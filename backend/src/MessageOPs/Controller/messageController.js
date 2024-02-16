import { getMessagesBetweenUsersService,getMessageService, addMessageService } from '../Services/messageServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { messageValidator } from '../Validator/messageValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getMessage = async (req, res) => {
    try {
        const data = await getMessageService(); // Use the appropriate service function
        if (data.length === 0) {
            sendNotFound(res, 'No Messages found');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(data, req.query.order));
                } else {
                    res.status(200).json(data);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(data, req.query.order), req, res);
                } else {
                    paginate(data, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error);
    }
};
//////////////////////////////////////////////////////
export const getMessageById = async (req, res) => {
    try {
        const messageId = req.params.id;

        // Query the database to get the Message by ID
        const message = await getMessageByIdFromDatabase(messageId);

        if (!message) {
            sendNotFound(res, 'Message not found');
        } else {
            res.status(200).json(message);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getMessageByIdFromDatabase(messageId) {
    try {
        const result = await poolRequest()
            .input('MessageID', sql.Int, messageId)
            .query("SELECT * FROM Message WHERE MessageID = @MessageID");

        return result.recordset[0]; // Assuming message id is unique
    } catch (error) {
        throw error;
    }
}
////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//controller message between users function
export const messageBetweenUsers = async (req, res) => {
    try {
        const messageId = req.params.messageId;

        const messages = await getMessagesBetweenUsersService(messageId);

        if (messages.length === 0) {
            sendNotFound(res, 'No Message found for the user');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(messages, req.query.order));
                } else {
                    res.status(200).json(messages);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(messages, req.query.order), req, res);
                } else {
                    paginate(messages, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};
////////////////////////////////////////////////////////

export const createMessage = async (req, res) => {
    const newMessage = {
        MessageID: req.body.MessageID,
        SenderID: req.body.SenderID,
        ReceiverID: req.body.ReceiverID,
        MessageDate: req.body.MessageDate,
        Content: req.body.Content,
    };

    const { error } = messageValidator(newMessage); // Update to use messageValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addMessageService(newMessage); // Update to use addMessageService
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Message with ID: ${newMessage.MessageID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};

///////////////////////////////////////
export const updateMessage = async (req, res) => {
    try {
        const messageId = req.params.id;

        // Fetch message data from the database
        const message = await getMessageByIdFromDatabase(messageId);

        if (!message) {
            sendNotFound(res, 'Message not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                if (req.body.Content) {
                    // Log the current Content before updating
                    console.log('Current Content:', message.Content);

                    // Update the message in the database
                    await updateMessageInDatabase(messageId, req.body.Content);

                    // Log the updated Content after updating
                    console.log('Updated Content:', req.body.Content);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Message updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid Content for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateMessageInDatabase(messageId, newContent) {
    try {
        // Update this function based on your service implementation for updating messages
    } catch (error) {
        throw error;
    }
}


////////////////////////////////////////////////////////////////////////
export const deleteMessage = async (req, res) => {
    try {
        const messageId = req.params.id;

        // Check if the message exists
        const message = await getsMessageByIdFromDatabase(messageId);

        if (!message) {
            sendNotFound(res, 'Message not found');
        } else {
            // Delete the message from the database
            await deleteMessageService(messageId);
            sendDeleteSuccess(res, `Message with id: ${messageId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getsMessageByIdFromDatabase(messageId) {
    try {
        const result = await poolRequest()
            .input('MessageID', sql.Int, messageId)
            .query("SELECT * FROM Message WHERE MessageID = @MessageID");

        return result.recordset[0]; // Assuming MessageID is unique
    } catch (error) {
        throw error;
    }
}

async function deleteMessageService(messageId) {
    try {
        await poolRequest()
            .input('MessageID', sql.Int, messageId)
            .query("DELETE FROM Message WHERE MessageID = @MessageID");
    } catch (error) {
        throw error;
    }
}

/////////////////////////////////////////////////////////
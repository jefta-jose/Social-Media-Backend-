import { getFriendsOfaUserService, getFriendshipService, addFriendshipService } from '../Services/friendshipServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { FriendshipValidator } from '../Validator/friendshipValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getFriendship = async (req, res) => {
    try {
        const data = await getFriendshipService();
        if (data.length === 0) {
            sendNotFound(res, 'No Friendship found');
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


////////////////////////////////////////////////////////////////////////////////////
export const getUserFriends = async (req, res) => {
    try {
        const userId = req.params.userId;

        const friends = await getFriendsOfaUserService(userId);

        if (friends.length === 0) {
            sendNotFound(res, 'No friends found for the user');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(friends, req.query.order));
                } else {
                    res.status(200).json(friends);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(friends, req.query.order), req, res);
                } else {
                    paginate(friends, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};
////////////////////////////////////////////////////////////////////////////////////////////

export const getFriendshipById = async (req, res) => {
    try {
        const friendshipId = req.params.id;

        // Query the database to get the GroupMember by ID
        const friendShip = await getFriendshipByIdFromDatabase(friendshipId);

        if (!friendShip) {
            sendNotFound(res, 'Friendship not found'); // Update the message
        } else {
            res.status(200).json(friendShip);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getFriendshipByIdFromDatabase(friendshipId) {
    try {
        const result = await poolRequest()
            .input('FriendshipID', sql.Int, friendshipId)
            .query("SELECT * FROM Friendship WHERE FriendshipID = @FriendshipID");

        return result.recordset[0];
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////

export const createFriendship = async (req, res) => {
    const newFriendship = {
        FriendshipID: req.body.FriendshipID,
        User1ID: req.body.User1ID,
        User2ID: req.body.User2ID,
        FriendshipDate: req.body.FriendshipDate,
    };

    const { error } = FriendshipValidator(newFriendship); // Update to use groupMemberValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addFriendshipService(newFriendship);
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Friendship with ID: ${newFriendship.FriendshipID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};

///////////////////////////////////////
export const updateFriendship = async (req, res) => {
    try {
        const friendshipId = req.params.id;

        // Fetch group member data from the database
        const friendShip = await getFriendshipByIdFromDatabase(friendshipId);

        if (!friendShip) {
            sendNotFound(res, 'Friendship not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                // Update based on your intention (e.g., updating MemberID)
                if (req.body.FriendshipID !== undefined) {
                    // Log the current MemberID before updating
                    console.log('Current FriendshipID:', friendShip.FriendshipID);

                    // Update the group member in the database
                    await updateFriendshipInDatabase(friendshipId, req.body.FriendshipID);

                    // Log the updated MemberID after updating
                    console.log('Updated FriendshipID:', req.body.FriendshipID);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Friendship updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid FriendshipID for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateFriendshipInDatabase(friendshipId, FriendshipID) {
    try {
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////////////////////////
export const deleteFriendship = async (req, res) => {
    try {
        const friendshipId = req.params.id;

        // Check if the group member exists
        const friendShip = await getsFriendshipByIdFromDatabase(friendshipId); // Assuming you have a function to fetch group members by ID

        if (!friendShip) {
            sendNotFound(res, 'Friendship not found');
        } else {
            // Delete the group member from the database
            await deleteFriendService(friendshipId);
            sendDeleteSuccess(res, `Friendship with id: ${friendshipId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getsFriendshipByIdFromDatabase(friendshipId) {
    try {
        const result = await poolRequest()
            .input('FriendshipID', sql.Int, friendshipId)  // Fix the typo here
            .query("SELECT * FROM Friendship WHERE FriendshipID = @FriendshipID");

        return result.recordset[0];
    } catch (error) {
        throw error;
    }
}


async function deleteFriendService(friendShipId) {
    try {
        await poolRequest()
            .input('FriendshipID', sql.Int, friendShipId)
            .query("DELETE FROM Friendship WHERE FriendshipID = @FriendshipID");
    } catch (error) {
        throw error;
    }
}

/////////////////////////////////////////////////////////
import { getGroupService, addGroupService } from '../Services/groupServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { groupValidator } from '../Validator/groupValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getGroup = async (req, res) => {
    try {
        const data = await getGroupService(); 
        if (data.length === 0) {
            sendNotFound(res, 'No Groups found');
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
export const getGroupById = async (req, res) => {
    try {
        const groupId = req.params.id;

        // Query the database to get the Group by ID
        const group = await getGroupByIdFromDatabase(groupId);

        if (!group) {
            sendNotFound(res, 'Group not found');
        } else {
            res.status(200).json(group);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getGroupByIdFromDatabase(groupId) {
    try {
        const result = await poolRequest()
            .input('GroupID', sql.Int, groupId)
            .query("SELECT * FROM GroupTable WHERE GroupID = @GroupID");

        return result.recordset[0]; // Assuming group id is unique
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////

export const createGroup = async (req, res) => {
    const newGroup = {
        GroupID: req.body.GroupID,
        GroupName: req.body.GroupName,
        Description: req.body.Description,
        CreatedDate: req.body.CreatedDate,
    };

    const { error } = groupValidator(newGroup); // Update to use groupValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addGroupService(newGroup); // Update to use addGroupService
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Group with ID: ${newGroup.GroupID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};

///////////////////////////////////////
export const updateGroup = async (req, res) => {
    try {
        const groupId = req.params.id;

        // Fetch group data from the database
        const group = await getGroupByIdFromDatabase(groupId);

        if (!group) {
            sendNotFound(res, 'Group not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                if (req.body.Description) {
                    // Log the current Description before updating
                    console.log('Current Description:', group.Description);

                    // Update the group in the database
                    await updateGroupInDatabase(groupId, req.body.Description);

                    // Log the updated Description after updating
                    console.log('Updated Description:', req.body.Description);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Group updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid Description for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateGroupInDatabase(groupId, newDescription) {
    try {
        // Update this function based on your service implementation for updating groups
    } catch (error) {
        throw error;
    }
}



////////////////////////////////////////////////////////////////////////
export const deleteGroup = async (req, res) => {
    try {
        const groupId = req.params.id;

        // Check if the group exists
        const group = await getsGroupByIdFromDatabase(groupId);

        if (!group) {
            sendNotFound(res, 'Group not found');
        } else {
            // Delete the group from the database
            await deleteGroupService(groupId);
            sendDeleteSuccess(res, `Group with id: ${groupId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getsGroupByIdFromDatabase(groupId) {
    try {
        const result = await poolRequest()
            .input('GroupID', sql.Int, groupId)
            .query("SELECT * FROM GroupTable WHERE GroupID = @GroupID");

        return result.recordset[0]; // Assuming GroupID is unique
    } catch (error) {
        throw error;
    }
}

async function deleteGroupService(groupId) {
    try {
        await poolRequest()
            .input('GroupID', sql.Int, groupId)
            .query("DELETE FROM GroupTable WHERE GroupID = @GroupID");
    } catch (error) {
        throw error;
    }
}


/////////////////////////////////////////////////////////
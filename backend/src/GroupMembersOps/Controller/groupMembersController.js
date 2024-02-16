import { getdisplayMemberDetailsService,getGroupMemberService, addGroupMemberService } from '../Services/groupMembersServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { groupMemberValidator } from '../Validator/groupMembersValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getGroupMember = async (req, res) => {
    try {
        const data = await getGroupMemberService(); // Update to use getGroupMembersService
        if (data.length === 0) {
            sendNotFound(res, 'No Group Members found'); // Update the message
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
export const getGroupMemberById = async (req, res) => {
    try {
        const groupMemberId = req.params.id;

        // Query the database to get the GroupMember by ID
        const groupMember = await getGroupMembersByIdFromDatabase(groupMemberId); // Update to use getGroupMembersByIdFromDatabase

        if (!groupMember) {
            sendNotFound(res, 'Group Member not found'); // Update the message
        } else {
            res.status(200).json(groupMember);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getGroupMembersByIdFromDatabase(groupMember) {
    try {
        const result = await poolRequest()
            .input('MemberID', sql.Int, groupMember)
            .query("SELECT * FROM GroupMembers WHERE MemberID = @MemberID"); // Update the table name

        return result.recordset[0]; // Assuming group member id is unique
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////

////////////////////////////////////////////////////
//members display function
export const displayMember = async (req, res) => {
    try {
        const groupId = req.params.userId;

        const event = await getdisplayMemberDetailsService(groupId);

        if (event.length === 0) {
            sendNotFound(res, 'No event found for the user');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(event, req.query.order));
                } else {
                    res.status(200).json(event);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(event, req.query.order), req, res);
                } else {
                    paginate(event, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};
////////////////////////////////////////////////////


export const createGroupMember = async (req, res) => {
    const newGroupMember = {
        GroupID: req.body.GroupID,
        MemberID: req.body.MemberID,
    };

    const { error } = groupMemberValidator(newGroupMember); // Update to use groupMemberValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addGroupMemberService(newGroupMember); // Update to use createGroupMemberService
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Group Member with ID: ${newGroupMember.GroupMemberID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};

///////////////////////////////////////
export const updateGroupMember = async (req, res) => {
    try {
        const groupMemberId = req.params.id;

        // Fetch group member data from the database
        const groupMember = await getGroupMembersByIdFromDatabase(groupMemberId);

        if (!groupMember) {
            sendNotFound(res, 'Group Member not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                // Update based on your intention (e.g., updating MemberID)
                if (req.body.MemberID !== undefined) {
                    // Log the current MemberID before updating
                    console.log('Current MemberID:', groupMember.MemberID);

                    // Update the group member in the database
                    await updateGroupMemberInDatabase(groupMemberId, req.body.MemberID);

                    // Log the updated MemberID after updating
                    console.log('Updated MemberID:', req.body.MemberID);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Group Member updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid MemberID for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateGroupMemberInDatabase(groupMemberId, MemberID) {
    try {
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////////////////////////
export const deleteGroupMember = async (req, res) => {
    try {
        const groupMemberId = req.params.id;

        // Check if the group member exists
        const groupMember = await getsGroupMemberByIdFromDatabase(groupMemberId); // Assuming you have a function to fetch group members by ID

        if (!groupMember) {
            sendNotFound(res, 'Group Member not found'); // Update the message
        } else {
            // Delete the group member from the database
            await deleteGroupMemberService(groupMemberId);
            sendDeleteSuccess(res, `Group Member with id: ${groupMemberId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getsGroupMemberByIdFromDatabase(groupMemberId) {
    try {
        const result = await poolRequest()
            .input('MemberID', sql.Int, groupMemberId)
            .query("SELECT * FROM GroupMembers WHERE MemberID = @MemberID"); // Update the table name

        return result.recordset[0]; // Assuming GroupMemberID is unique
    } catch (error) {
        throw error;
    }
}

async function deleteGroupMemberService(groupMemberId) {
    try {
        await poolRequest()
            .input('MemberID', sql.Int, groupMemberId)
            .query("DELETE FROM GroupMembers WHERE MemberID = @MemberID"); // Update the table name
    } catch (error) {
        throw error;
    }
}



/////////////////////////////////////////////////////////
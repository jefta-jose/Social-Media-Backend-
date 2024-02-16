import bcrypt from 'bcrypt';
import { findByCredentialsService,getUserService, addUserService } from '../Services/userServices.js';
import { notAuthorized,sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { userLoginValidator,userValidator } from '../Validator/userValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// contoller function to register a user
export const registerUser = async (req, res) => {
    const { UserID, Username, Password, Email, TagName, Location } = req.body;
    const { error } = userValidator({ UserID, Username, Password, Email, TagName, Location });

    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Password, salt); 
            const newUser = { UserID, Username, Password: hashedPassword, Email, TagName, Location };
            const response = await addUserService(newUser);

            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, 'User created successfully');
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};

// login  controller function 
export const loginUser = async (req, res) => {
    const { error } = userLoginValidator(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { Username, Password } = req.body;

    try {
        const userResponse = await findByCredentialsService({ Username, Password });

        if (userResponse.error) {
            res.status(400).send(userResponse.error);
        } else if (userResponse.success) {
            res.status(200).send({ success: true, message: 'Login successful', ...userResponse });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUser = async (req, res) => { 
    try {
        const data = await getUserService();
        if (data.length === 0) {
            sendNotFound(res, 'No user found');
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
}

//////////////////////////////////////////////////////
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        // Query the database to get the user by ID
        const user = await getsUserByIdFromDatabase(userId);

        if (!user) {
            sendNotFound(res, 'User not found');
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
}

async function getsUserByIdFromDatabase(userId) {
    try {
        const result = await poolRequest()
            .input('UserID', sql.VarChar, userId)
            .query("SELECT * FROM tbl_User WHERE UserID = @UserID");

        return result.recordset[0]; // Assuming UserID is unique
    } catch (error) {
        throw error;
    }
}
////////////////////////////////////////////////////

export const createUser = async (req, res) => {
    const newUser = {
        UserID: req.body.UserID,
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password,
        TagName: req.body.TagName,
        Location: req.body.Location,
    }

    const { error } = userValidator(newUser);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addUserService(newUser);
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `User with username: ${newUser.Username} was created successfully`);  // Corrected
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
}
///////////////////////////////////////
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Fetch user data from the database
        const user = await getUserByIdFromDatabase(userId);

        if (!user) {
            sendNotFound(res, 'User not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                if (req.body.Email) {
                    // Log the current user.Email before updating
                    console.log('Current Email:', user.Email);

                    // Update the email in the database
                    await updateEmailInDatabase(userId, req.body.Email);

                    // Log the updated user.Email after updating
                    console.log('Updated Email:', req.body.Email);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'User updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid email for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateEmailInDatabase(userId, newEmail) {
    try {
        await poolRequest()
            .input('UserID', sql.VarChar, userId)
            .input('Email', sql.VarChar, newEmail)
            .query("UPDATE tbl_User SET Email = @Email WHERE UserID = @UserID");
    } catch (error) {
        throw error;
    }
}


////////////////////////////////////////////////////////////////////////
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Check if the user exists
        const user = await getUserByIdFromDatabase(userId);

        if (!user) {
            sendNotFound(res, 'User not found');
        } else {
            // Delete the user from the database
            await deleteUserService(userId);
            sendDeleteSuccess(res, `User with id: ${userId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
}

async function getUserByIdFromDatabase(userId) {
    try {
        const result = await poolRequest()
            .input('UserID', sql.VarChar, userId)
            .query("SELECT * FROM tbl_User WHERE UserID = @UserID");

        return result.recordset[0]; // Assuming UserID is unique
    } catch (error) {
        throw error;
    }
}

async function deleteUserService(userId) {
    try {
        await poolRequest()
            .input('UserID', sql.VarChar, userId)
            .query("DELETE FROM tbl_User WHERE UserID = @UserID");
    } catch (error) {
        throw error;
    }
}
/////////////////////////////////////////////////////////
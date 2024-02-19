import { poolRequest, sql } from "../Database/dbConnect.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUserService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM tbl_User");
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const addUserService = async (user) => {
    try {
        // Check if the email or username already exists
        const existingUser = await poolRequest()
            .input('Email', sql.VarChar, user.Email)
            .input('Username', sql.VarChar, user.Username)
            .query("SELECT * FROM tbl_User WHERE Email = @Email OR Username = @Username");

        if (existingUser.recordset.length > 0) {
            // If a user with the same email or username already exists, determine which one it is
            const duplicateField = existingUser.recordset[0].Email === user.Email ? 'Email' : 'Username';
            throw new Error(`User with the same ${duplicateField} already exists.`);
        }

        // If no existing user found, proceed to insert the new user
        const result = await poolRequest()
            .input('Username', sql.VarChar, user.Username)
            .input('Email', sql.VarChar, user.Email)
            .input('Password', sql.VarChar, user.Password)
            .input('TagName', sql.VarChar, user.TagName)
            .input('Location', sql.VarChar, user.Location)
            .query("INSERT INTO tbl_User (Username, Email, Password, TagName, Location) VALUES (@Username, @Email, @Password, @TagName, @Location)");

        return result;
    } catch (error) {
        return error;
    }
}


// findByCredentialsService function
export const findByCredentialsService = async (user) => {
    try {
        const userFoundResponse = await poolRequest()
            .input('Username', sql.VarChar, user.Username)
            .query('SELECT * FROM tbl_user WHERE Username = @Username');

        if (userFoundResponse.recordset[0]) {
            const match = await bcrypt.compare(user.Password, userFoundResponse.recordset[0].Password);

            if (match) {
                const { Password, ...userData } = userFoundResponse.recordset[0];
                const token = jwt.sign(
                    {
                        id: userData.id,
                        Username: userData.username,
                        email: userData.email
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: "2h" }
                );

                return { success: true, user: userData, token: `JWT ${token}`, message: 'Login successful' };
            } else {
                return { error: 'Invalid Credentials' };
            }
        } else {
            return { error: 'Invalid Credentials' };
        }
    } catch (error) {
        return { error: error.message };
    }
};

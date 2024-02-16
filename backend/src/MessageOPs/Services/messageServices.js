import { poolRequest, sql } from "../Database/dbConnect.js";

// getMessageService
export const getMessageService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Message");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addMessageService
export const addMessageService = async (message) => {
    try {
        const result = await poolRequest()
            .input('MessageID', sql.Int, message.MessageID)
            .input('SenderID', sql.Int, message.SenderID)
            .input('ReceiverID', sql.Int, message.ReceiverID)
            .input('MessageDate', sql.DateTime, message.MessageDate)
            .input('Content', sql.Text, message.Content)
            .query("INSERT INTO Message (MessageID, SenderID, ReceiverID, MessageDate, Content) VALUES (@MessageID, @SenderID, @ReceiverID, @MessageDate, @Content)");

        return result;
    } catch (error) {
        return error;
    }
}


//message between service
export const getMessagesBetweenUsersService = async (messageId) => {
    try {
        const result = await poolRequest()
            .input('MessageId', sql.Int, messageId)
            .query(`
            SELECT m.MessageID, m.MessageDate, m.Content,
            sender.UserID AS SenderID, sender.Username AS SenderUsername,
            receiver.UserID AS ReceiverID, receiver.Username AS ReceiverUsername
            FROM Message m
            JOIN tbl_User sender ON m.SenderID = sender.UserID
            JOIN tbl_User receiver ON m.ReceiverID = receiver.UserID
            WHERE (m.SenderID = 1 AND m.ReceiverID = 2) 
            `);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
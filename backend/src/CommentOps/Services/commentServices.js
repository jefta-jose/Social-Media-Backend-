import { poolRequest, sql } from "../Database/dbConnect.js";

export const getCommentService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Comment");
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const addCommentService = async (comment) => {
    try {
        const result = await poolRequest()
        .input('CommentID', sql.Int, comment.CommentID)
        .input('PostID', sql.Int, comment.PostID)
        .input('UserID', sql.Int, comment.UserID)
        .input('CommentDate', sql.DateTime, comment.CommentDate)
        .input('Content', sql.VarChar, comment.Content)
        .query("INSERT INTO Comment (CommentID, PostID, UserID, CommentDate, Content) VALUES (@CommentID, @PostID, @UserID, @CommentDate, @Content)");

        return result;
    } catch (error) {
        return error;
    }
}
//////////////////////////////////////////
//get comments for a specific 
export const getCommentsForUserService = async (commentId) => {
    try {
        const result = await poolRequest()
            .input('CommentId', sql.Int, commentId)
            .query(`
            SELECT 
            Comment.CommentID,
            Comment.PostID,
            Comment.UserID,
            Comment.CommentDate,
            Comment.Content,
            tbl_User.Username
            FROM 
            Comment
            INNER JOIN 
            tbl_User ON Comment.UserID = tbl_User.UserID;
            `);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
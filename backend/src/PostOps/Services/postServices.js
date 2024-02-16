import { poolRequest, sql } from "../Database/dbConnect.js";
// getPostService
export const getPostService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Post");
        return result.recordset;
    } catch (error) {
        return error; // Return the entire error object for better debugging
    }
}

// addPostService
export const addPostService = async (post) => {
    try {
        const result = await poolRequest()
        .input('PostID', sql.Int, post.PostID)
        .input('UserID', sql.Int, post.UserID) 
        .input('Content', sql.VarChar, post.Content)
        .input('PostDate', sql.DateTime, post.PostDate) 
        .input('Likes', sql.Int, post.Likes)
        .input('Comments', sql.Int, post.Comments) 
        .query("INSERT INTO Post (PostID, UserID, Content, PostDate, Likes, Comments) VALUES (@PostID, @UserID, @Content, @PostDate, @Likes, @Comments)");

        return result;
    } catch (error) {
        return error; 
    }
}


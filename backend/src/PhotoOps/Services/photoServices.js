import { poolRequest, sql } from "../Database/dbConnect.js";
// getPhotoService
export const getPhotoService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Photo");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addPhotoService
export const addPhotoService = async (photo) => {
    try {
        const result = await poolRequest()
        .input('PhotoID', sql.Int, photo.PhotoID)
        .input('UserID', sql.Int, photo.UserID)
        .input('PhotoURL', sql.VarChar, photo.PhotoURL)
        .input('UploadDate', sql.DateTime, photo.UploadDate)
        .query("INSERT INTO Photo (PhotoID, UserID, PhotoURL, UploadDate) VALUES (@PhotoID, @UserID, @PhotoURL, @UploadDate)");

        return result;
    } catch (error) {
        return error;
    }
}

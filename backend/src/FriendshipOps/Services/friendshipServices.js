import { poolRequest, sql } from "../Database/dbConnect.js";
import { FriendshipValidator } from "../Validator/friendshipValidator.js";

// getGroupService
export const getFriendshipService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Friendship");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

//getuserfriendshipservice
export const getFriendsOfaUserService = async (userId) => {
    try {
        const result = await poolRequest()
            .input('UserId', sql.Int, userId)
            .query(`
                SELECT u.UserID, u.Username
                FROM Friendship f
                JOIN tbl_User u ON f.User2ID = u.UserID
                WHERE f.User1ID = @UserId
                UNION
                SELECT u.UserID, u.Username
                FROM Friendship f
                JOIN tbl_User u ON f.User1ID = u.UserID
                WHERE f.User2ID = @UserId
            `);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
// addGroupService
export const addFriendshipService = async (friendship) => {
    try {
        const { error } = FriendshipValidator(friendship);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const result = await poolRequest()
        .input('FriendshipID', sql.Int, friendship.FriendshipID)
        .input('User1ID', sql.Int, friendship.User1ID)
        .input('User2ID', sql.Int, friendship.User2ID)
        .input('FriendshipDate', sql.DateTime, friendship.FriendshipDate)
        .query("INSERT INTO Friendship (FriendshipID, User1ID, User2ID, FriendshipDate) VALUES (@FriendshipID, @User1ID, @User2ID, @FriendshipDate)");

        return result;
    } catch (error) {
        return error;
    }
};


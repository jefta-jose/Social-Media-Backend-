import { poolRequest, sql } from "../Database/dbConnect.js";
import { groupValidator } from "../Validator/groupValidator.js";

// getGroupService
export const getGroupService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM GroupTable");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addGroupService
export const addGroupService = async (group) => {
    try {
        const { error } = groupValidator(group);
        if (error) {
            throw new Error(error.details[0].message);
        }

        // Check if the group name already exists
        const existingGroup = await poolRequest()
            .input('GroupName', sql.VarChar(255), group.GroupName)
            .query("SELECT * FROM GroupTable WHERE GroupName = @GroupName");

        if (existingGroup.recordset.length > 0) {
            // If a group with the same name already exists, return an error
            throw new Error("Group with the same name already exists.");
        }

        // If no existing group found, proceed to insert the new group
        const result = await poolRequest()
            .input('GroupID', sql.Int, group.GroupID)
            .input('GroupName', sql.VarChar(255), group.GroupName)
            .input('Description', sql.Text, group.Description)
            .input('CreatedDate', sql.DateTime, group.CreatedDate)
            .query("INSERT INTO GroupTable (GroupID, GroupName, Description, CreatedDate) VALUES (@GroupID, @GroupName, @Description, @CreatedDate)");

        return result;
    } catch (error) {
        return error;
    }
};


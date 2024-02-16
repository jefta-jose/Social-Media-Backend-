import { poolRequest, sql } from "../Database/dbConnect.js";
import { eventAttendeeValidator } from "../Validator/eventsAttendeeValidator.js";

// getGroupService
export const getEventAttendeeService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM EventAttendee");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addGroupService
export const addEventAttendeeService = async (eventattendee) => {
    try {
        const { error } = eventAttendeeValidator(eventattendee);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const result = await poolRequest()
        .input('EventID', sql.Int, eventattendee.EventID)
        .input('AttendeeID', sql.Int, eventattendee.AttendeeID)
        .query("INSERT INTO EventAttendee (EventID, AttendeeID) VALUES (@EventID, @AttendeeID)");

        return result;
    } catch (error) {
        return error;
    }
};


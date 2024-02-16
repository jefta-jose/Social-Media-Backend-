import { poolRequest, sql } from "../Database/dbConnect.js";
import { eventValidator } from "../Validator/eventsValidator.js";

// getGroupService
export const getEventService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM Event");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// addGroupService
export const addEventService = async (events) => {
    try {
        const { error } = eventValidator(events);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const result = await poolRequest()
        .input('EventID', sql.Int, events.EventID)
        .input('EventName', sql.VarChar, events.EventName)
        .input('Descri_ption', sql.VarChar, events.Descri_ption) 
        .input('EventDate', sql.DateTime, events.EventDate)    
        .input('Location', sql.VarChar(100), events.Location)  
        .input('EventPosterURL', sql.VarChar, events.EventPosterURL)
        .query("INSERT INTO Event (EventID, EventName, Descri_ption, EventDate, Location, EventPosterURL) VALUES (@EventID, @EventName, @Descri_ption, @EventDate, @Location, @EventPosterURL)");

        return result;
    } catch (error) {
        return error;
    }
};

//--events attended by user with UserID 1
export const getattendedEventsService = async (eventId) => {
    try {
        const result = await poolRequest()
            .input('EventId', sql.Int, eventId)
            .query(`
            SELECT e.EventID, e.EventName
            FROM Event e
            JOIN EventAttendee ea ON e.EventID = ea.EventID
            JOIN tbl_User u ON ea.AttendeeID = u.UserID
            WHERE u.UserID = 1;
            `);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};

//--attendee details
export const getattendeeDetailsService = async (eventId) => {
    try {
        const result = await poolRequest()
            .input('EventId', sql.Int, eventId)
            .query(`
            SELECT e.EventID, e.EventName, e.Descri_ption, e.EventDate, e.Location, e.EventPosterURL,
            a.AttendeeID, u.Username AS AttendeeUsername, u.Email AS AttendeeEmail
            FROM Event e
            JOIN EventAttendee a ON e.EventID = a.EventID
            JOIN tbl_User u ON a.AttendeeID = u.UserID;
            
            `);

        return result.recordset;
    } catch (error) {
        throw error;
    }
};
import { getEventAttendeeService, addEventAttendeeService} from '../Services/eventAttendeeServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { eventAttendeeValidator } from '../Validator/eventsAttendeeValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getEventAttendee = async (req, res) => {
    try {
        const data = await getEventAttendeeService(); 
        if (data.length === 0) {
            sendNotFound(res, 'No Event Attendee found'); // Update the message
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
};

//////////////////////////////////////////////////////
export const getEventAttendeeById = async (req, res) => {
    try {
        const eventId = req.params.id;

        // Query the database to get the Event Attendee by ID
        const eventAttendee = await getEventAttendeeByIdFromDatabase(eventId);

        if (!eventAttendee) {
            sendNotFound(res, 'Event Attendee not found'); // Update the message
        } else {
            res.status(200).json(eventAttendee);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getEventAttendeeByIdFromDatabase(eventId) {
    try {
        const result = await poolRequest()
            .input('EventID', sql.Int, eventId)
            .query("SELECT * FROM EventAttendee WHERE EventID = @EventID");

        return result.recordset[0];
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////

export const createEventAttendee = async (req, res) => {
    const newEventAttendee = {
        EventID: req.body.EventID,
        AttendeeID: req.body.AttendeeID,
    };

    const { error } = eventAttendeeValidator(newEventAttendee); // Update to use eventAttendeeValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addEventAttendeeService(newEventAttendee); // Update to use addEventAttendeeService
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Event Attendee with ID: ${newEventAttendee.EventID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};


///////////////////////////////////////
export const updateEventAttendee = async (req, res) => {
    try {
        const eventAttendeeId = req.params.id;

        // Fetch event attendee data from the database
        const eventAttendee = await getEventAttendeeByIdFromDatabase(eventAttendeeId);

        if (!eventAttendee) {
            sendNotFound(res, 'Event Attendee not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                // Update based on your intention (e.g., updating EventID)
                if (req.body.EventID !== undefined) {
                    // Log the current EventID before updating
                    console.log('Current EventID:', eventAttendee.EventID);

                    // Update the event attendee in the database
                    await updateEventAttendeeInDatabase(eventAttendeeId, req.body.EventID);

                    // Log the updated EventID after updating
                    console.log('Updated EventID:', req.body.EventID);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Event Attendee updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid EventID for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateEventAttendeeInDatabase(eventAttendeeId, updatedEventID) {
    try {
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////////////////////////
export const deleteEventAttendee = async (req, res) => {
    try {
        const eventAttendeeId = req.params.id;

        // Check if the event attendee exists
        const eventAttendee = await getEventAttendeeByIdFromDatabase(eventAttendeeId);

        if (!eventAttendee) {
            sendNotFound(res, 'Event Attendee not found');
        } else {
            // Delete the event attendee from the database
            await deleteEventAttendeeService(eventAttendeeId);
            sendDeleteSuccess(res, `Event Attendee with id: ${eventAttendeeId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function deleteEventAttendeeService(eventAttendeeId) {
    try {
        await poolRequest()
            .input('EventAttendeeID', sql.Int, eventAttendeeId) // Adjust to match your actual primary key name
            .query("DELETE FROM EventAttendee WHERE EventAttendeeID = @EventAttendeeID");
    } catch (error) {
        throw error;
    }
}

/////////////////////////////////////////////////////////
import { getattendeeDetailsService,getattendedEventsService,getEventService, addEventService} from '../Services/eventServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { eventValidator } from '../Validator/eventsValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getEvent = async (req, res) => {
    try {
        const data = await getEventService();
        if (data.length === 0) {
            sendNotFound(res, 'No Event found'); // Update the message
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
///////////////////////////////////////////////////////////////

//eventattended function
export const getEventAttended = async (req, res) => {
    try {
        const eventId = req.params.eventId;

        const event = await getattendedEventsService(eventId);

        if (event.length === 0) {
            sendNotFound(res, 'No event found for the user');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(event, req.query.order));
                } else {
                    res.status(200).json(event);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(event, req.query.order), req, res);
                } else {
                    paginate(event, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

//////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

//attendeeDetails function
export const getEventAttendeeDetails = async (req, res) => {
    try {
        const eventId = req.params.eventId;

        const event = await getattendeeDetailsService(eventId);

        if (event.length === 0) {
            sendNotFound(res, 'No eventdetails found for the user');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(event, req.query.order));
                } else {
                    res.status(200).json(event);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(event, req.query.order), req, res);
                } else {
                    paginate(event, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

//////////////////////////////////////////////////////


export const getEventById = async (req, res) => {
    try {
        const eventId = req.params.id;

        // Query the database to get the Event by ID
        const event = await getEventByIdFromDatabase(eventId);

        if (!event) {
            sendNotFound(res, 'Event not found'); // Update the message
        } else {
            res.status(200).json(event);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getEventByIdFromDatabase(eventId) {
    try {
        const result = await poolRequest()
            .input('EventID', sql.Int, eventId)
            .query("SELECT * FROM Event WHERE EventID = @EventID");

        return result.recordset[0];
    } catch (error) {
        throw error;
    }
}


////////////////////////////////////////////////////

export const createEvent = async (req, res) => {
    const newEvent = {
        EventID: req.body.EventID,
        EventName: req.body.EventName,
        Descri_ption: req.body.Descri_ption,
        EventDate: req.body.EventDate,
        Location: req.body.Location,
        EventPosterURL: req.body.EventPosterURL,
    };

    const { error } = eventValidator(newEvent); // Update to use eventValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addEventService(newEvent); // Update to use addEventService
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Event with ID: ${newEvent.EventID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};


///////////////////////////////////////
export const updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;

        // Fetch event data from the database
        const event = await getEventByIdFromDatabase(eventId);

        if (!event) {
            sendNotFound(res, 'Event not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                // Update based on your intention (e.g., updating EventID)
                if (req.body.EventID !== undefined) {
                    // Log the current EventID before updating
                    console.log('Current EventID:', event.EventID);

                    // Update the event in the database
                    await updateEventInDatabase(eventId, req.body.EventID);

                    // Log the updated EventID after updating
                    console.log('Updated EventID:', req.body.EventID);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Event updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid EventID for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateEventInDatabase(eventId, updatedEventID) {
    try {
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////////////////////////
export const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;

        // Check if the event exists
        const event = await getsEventByIdFromDatabase(eventId);

        if (!event) {
            sendNotFound(res, 'Event not found');
        } else {
            // Delete the event from the database
            await deleteEventService(eventId);
            sendDeleteSuccess(res, `Event with id: ${eventId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getsEventByIdFromDatabase(eventId) {
    try {
        const result = await poolRequest()
            .input('EventID', sql.Int, eventId)
            .query("SELECT * FROM Event WHERE EventID = @EventID");

        return result.recordset[0];
    } catch (error) {
        throw error;
    }
}

async function deleteEventService(eventId) {
    try {
        await poolRequest()
            .input('EventID', sql.Int, eventId)
            .query("DELETE FROM Event WHERE EventID = @EventID");
    } catch (error) {
        throw error;
    }
}

/////////////////////////////////////////////////////////
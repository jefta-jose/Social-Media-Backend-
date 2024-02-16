import { Router } from 'express';
import { getEventAttendee, deleteEventAttendee, getEventAttendeeById, updateEventAttendee, createEventAttendee } from "../Controller/eventAttendeeController.js";

const eventAttendeeRouter = Router();
eventAttendeeRouter.get('/eventattendee', getEventAttendee);
eventAttendeeRouter.post('/eventattendee', createEventAttendee);
eventAttendeeRouter.put('/eventattendee/:id', updateEventAttendee);
eventAttendeeRouter.get('/eventattendee/:id', getEventAttendeeById);
eventAttendeeRouter.delete('/eventattendee/:id', deleteEventAttendee);

export default eventAttendeeRouter;

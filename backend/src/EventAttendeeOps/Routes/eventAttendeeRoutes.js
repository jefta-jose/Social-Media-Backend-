import { Router } from 'express';
import { getEventAttendee, deleteEventAttendee, getEventAttendeeById, updateEventAttendee, createEventAttendee } from "../Controller/eventAttendeeController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const eventAttendeeRouter = Router();
eventAttendeeRouter.get('/eventattendee', authenticateOperations, getEventAttendee);
eventAttendeeRouter.post('/eventattendee', authenticateOperations, createEventAttendee);
eventAttendeeRouter.put('/eventattendee/:id', authenticateOperations, updateEventAttendee);
eventAttendeeRouter.get('/eventattendee/:id', authenticateOperations, getEventAttendeeById);
eventAttendeeRouter.delete('/eventattendee/:id', authenticateOperations, deleteEventAttendee);


export default eventAttendeeRouter;

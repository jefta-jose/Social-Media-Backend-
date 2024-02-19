import { Router } from 'express';
import { getEventAttendeeDetails,getEventAttended,getEvent, deleteEvent, getEventById, updateEvent, createEvent } from "../Controller/eventController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const eventRouter = Router();
eventRouter.get('/event', authenticateOperations, getEvent);
eventRouter.post('/event', authenticateOperations, createEvent);
eventRouter.put('/event/:id', authenticateOperations, updateEvent);
eventRouter.get('/event/:id', authenticateOperations, getEventById);
eventRouter.delete('/event/:id', authenticateOperations, deleteEvent);
eventRouter.get('/eventattended/:id', authenticateOperations, getEventAttended);
eventRouter.get('/eventattendeedetails', authenticateOperations, getEventAttendeeDetails);




export default eventRouter;

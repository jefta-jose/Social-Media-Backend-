import { Router } from 'express';
import { getPhoto, deletePhoto, getPhotoById, updatePhoto, createPhoto } from "../Controller/photoController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';

const photoRouter = Router();
photoRouter.get('/photo', authenticateOperations, getPhoto);
photoRouter.post('/photo', authenticateOperations, createPhoto);
photoRouter.put('/photo/:id', authenticateOperations, updatePhoto);
photoRouter.get('/photo/:id', authenticateOperations, getPhotoById);
photoRouter.delete('/photo/:id', authenticateOperations, deletePhoto);

export default photoRouter;

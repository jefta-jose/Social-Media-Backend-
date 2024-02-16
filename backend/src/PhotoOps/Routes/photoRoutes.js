import { Router } from 'express';
import { getPhoto, deletePhoto, getPhotoById, updatePhoto, createPhoto } from "../Controller/photoController.js";

const photoRouter = Router();
photoRouter.get('/photo', getPhoto);
photoRouter.post('/photo', createPhoto);
photoRouter.put('/photo/:id', updatePhoto);
photoRouter.get('/photo/:id', getPhotoById);
photoRouter.delete('/photo/:id', deletePhoto);

export default photoRouter;

import { Router } from 'express';
import { getUserById, loginUser, registerUser, deleteUser, getUser, updateUser, } from "../Controller/usersController.js";
import authenticateOperations from '../../Authenticator/Authenticator.js';


const userRouter = Router(); 
userRouter.put('/users/:id', authenticateOperations, updateUser);
userRouter.get('/users/:id', authenticateOperations, getUserById);
userRouter.delete('/users/:id', authenticateOperations, deleteUser);
userRouter.post("/users/auth/login", loginUser);
userRouter.get('/users', getUser);
userRouter.post("/users/register", registerUser);


export default userRouter;

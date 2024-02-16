import { Router } from 'express';
import { loginUser,registerUser,getUserById, createUser, deleteUser, getUser, updateUser, } from "../Controller/usersController.js";

const userRouter = Router();
userRouter.get('/users', getUser);
userRouter.post('/users', createUser);
userRouter.put('/users/:id', updateUser);
userRouter.get('/users/:id', getUserById);
userRouter.delete('/users/:id', deleteUser);
userRouter.post("/users/register", registerUser);
userRouter.post("/users/auth/login", loginUser);



export default userRouter;

import {Router} from 'express';
import {createUser, updateUser, getAllUsers, getUserbyId, getUserbyBusinessId, deleteUser} from '../controllers/userControler';

const userRouter:Router = Router();

userRouter.post('/createuser',createUser);
userRouter.patch('/updateuser/:id', updateUser);
userRouter.get('/getuserbyid/:id', getUserbyId);
userRouter.get('/getallusers', getAllUsers);
userRouter.get('/getusersbybusinessid/:id', getUserbyBusinessId);
userRouter.delete('/deleteuser', deleteUser);

export default userRouter;
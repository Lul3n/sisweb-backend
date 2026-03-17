"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControler_1 = require("../controllers/userControler");
const userRouter = (0, express_1.Router)();
userRouter.post('/createuser', userControler_1.createUser);
userRouter.patch('/updateuser/:id', userControler_1.updateUser);
userRouter.get('/getuserbyid/:id', userControler_1.getUserbyId);
userRouter.get('/getallusers', userControler_1.getAllUsers);
userRouter.get('/getusersbybusinessid/:id', userControler_1.getUserbyBusinessId);
userRouter.delete('/deleteuser', userControler_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map
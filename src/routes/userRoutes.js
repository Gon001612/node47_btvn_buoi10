import express from 'express'
import { getUser } from '../controller/userController.js';

const userRoutes = express.Router();
userRoutes.get('/get-users', getUser)

export default userRoutes;

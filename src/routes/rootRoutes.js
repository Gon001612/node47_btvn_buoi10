import express from 'express';
import likeRoutes from './likeRoutes.js';
import userRoutes from './userRoutes.js';


const rootRoutes = express.Router();

// xử lý like nhà hàng
rootRoutes.use('/like',likeRoutes);

rootRoutes.use('/user', userRoutes);



export default rootRoutes;

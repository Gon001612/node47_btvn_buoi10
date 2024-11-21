import express from 'express';
import likeRoutes from './likeRoutes.js';
import userRoutes from './userRoutes.js';
import rateRoutes from './rateRoutes.js';
import orderRoutes from './orderRoutes.js';



const rootRoutes = express.Router();

// xử lý like nhà hàng
rootRoutes.use('/like',likeRoutes);

rootRoutes.use('/user', userRoutes);

rootRoutes.use('/rate', rateRoutes);

rootRoutes.use('/order', orderRoutes);


export default rootRoutes;

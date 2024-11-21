import express from 'express'
import { order } from '../controller/orderController.js';

const orderRoutes = express.Router();

orderRoutes.post('/order-food', order)

export default orderRoutes;
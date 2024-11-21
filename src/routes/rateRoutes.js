import exrpess from 'express'
import { rateRes, getRateByResId, getRateByUserId } from '../controller/rateController.js';

const rateRoutes = exrpess.Router();

rateRoutes.post('/rate-res', rateRes)
rateRoutes.get('/get-rate-by-res/:res_id', getRateByResId)
rateRoutes.get('/get-rate-by-user/:user_id', getRateByUserId)


export default rateRoutes
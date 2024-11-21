import express from 'express';
import { dislikeRes, getLikeRes, likeRes, likeResByResId, likeResByUserId} from '../controller/likeController.js';

const likeRoutes  = express.Router();
likeRoutes.get("/get-like-res", getLikeRes)

likeRoutes.post("/like-res", likeRes);
likeRoutes.delete("/dislike/:res_id/:user_id", dislikeRes);
likeRoutes.get("/like-res-by-res/:res_id", likeResByResId);
likeRoutes.get("/like-res-by-user/:user_id", likeResByUserId);




export default likeRoutes
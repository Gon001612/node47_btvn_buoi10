import { where } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const getLikeRes = async (req, res) => {
    try {
        let data = await model.rate_res.findAll();
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: "Error API get like restaurent" })
    }
}

const likeRes = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        await model.like_res.create({
            user_id,
            res_id

        })
        return res.status(201).json({ message: "Create like res successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Error API like restaurent" })

    }
}


const dislikeRes = async (req, res) => {
    try {
        let { res_id, user_id } = req.params;
        let checkLike = await model.like_res.findOne({
            where: {
                res_id,
                user_id
            }
        })
        if (!checkLike) {
            return res.status(500).json({ message: "Not this like in API" })
        }
        await model.like_res.destroy({
            where: {
                res_id,
                user_id,
            },
        });
        return res.status(200).json({ message: "dislikeRes" });
    } catch (error) {
        return res.status(500).json({ message: "Error API delike restaurent" })
    }
}

const likeResByResId = async (req, res) => {
    try {
        let { res_id } = req.params;
        let likeRes = await model.rate_res.findAll({
            where: {
                res_id
            }
        })
        return res.status(200).json(likeRes);
    } catch (error) {
        return res.status(500).json({ message: "Internal server" });
    }
}

const likeResByUserId = async (req, res) => {
    try {
        let { user_id } = req.params;
        let likeRes = await model.rate_res.findAll({
            where: { user_id }
        })
        return res.status(200).json(likeRes)
    } catch (error) {
        return res.status(500).json({ message: "Error API get like restaurent by user id" })
    }
}

export {
    getLikeRes,
    likeRes,
    dislikeRes,
    likeResByResId,
    likeResByUserId,
}
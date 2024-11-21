import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const rateRes = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body;
        await model.rate_res.create({
            user_id,
            res_id,
            amount
        })
        return res.status(200).json({ message: " Rate restaurent successfully" })
    } catch (error) {
        return res.status(500).json({ message: " Error API rate restaurent" })
        
    }

}

const getRateByResId = async (req,res) => {
    try {
        let {res_id} = req.params;
        let data = await model.rate_res.findAll({
            where: {res_id}
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: " Error API get rate restaurent by restaurent Id" })
        
    }
}

const getRateByUserId = async (req,res) => {
    try {
        let {user_id} = req.params;
        let data = await model.rate_res.findAll({
            where: {user_id}
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: " Error API get rate restaurent by user Id" })
        
    }
}

export {
    rateRes,
    getRateByResId,
    getRateByUserId,
}
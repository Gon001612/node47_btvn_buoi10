import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const order = async(req,res) => {
    
    try {
        let {user_id, food_id, amount} = req.body;
    await model.orders.create({
        user_id,
        food_id,
        amount
    })
    return res.status(201).json({message:'Order Successfully'})
    } catch (error) {
    return res.status(500).json({message:'Error API order'})
        
    }
}

export {
    order
}
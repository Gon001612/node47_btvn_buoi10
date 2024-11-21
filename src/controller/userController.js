import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const getUser = async (req,res) => {
    try {
        let {data} = await model.users.findAll()
        return res.status(200).json(data)

    } catch (error) {
        return res.status(500).json({message:"error API get user"})
    }
}

export {
    getUser,
}
import dashbordModel from "../models/dashbordModel.js";

export const getDashbord = async (req,res) =>{

    try {
         const data = await dashbordModel.find();
         res.status(200).json({
             data:data,
             message:'Successfully fetched!'
         })
         console.log(data)
    } catch (error) {
         res.status(400).json({
             message:error.message
         })
    }
 }


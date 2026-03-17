import { Request, RequestHandler, Response } from "express";
import { Business } from "../models/business";
import { User } from "../models/user";
import { stat } from "node:fs";

//Create Business
export const createBusiness : RequestHandler = (req:Request, res:Response) => {
    if(!req.body){
        return res.status(400).json({
            status : "error",
            message : "User cannot be empty",
            payload : null
        })
    }
    const business = {...req.body}

    Business.create(business)
        .then((data: Business | null) => (
            res.status(200).json({
                status : "success",
                message : "Business created",
                payload : data
            })
        ))
        .catch((err) => {
            res.status(500).json({
                status : "error",
                message : "Something gone wrong " + err.message,
                payload : null
            })
        })

};

//Update Business by Id
export const updateBusiness : RequestHandler = (req:Request, res:Response) => {
    if(!req.body){
        return res.status(400).json({
            status : "error",
            message : "Entry cannot be empty",
            payload : null
        })
    }
    Business.update({...req.body}, {where : {id : req.params.id}})
        .then((isUpdate) => {
            if(isUpdate){
                return res.status(200).json({
                    status : "success",
                    message : "Business successfully update",
                    payload : {...req.body}
                })
            }else{
                return res.status(500).json({
                    status : "error",
                    message : "Something happened updating the user",
                    payload : null 
                })
            }
        })
        .catch((err) => {{
            return res.status(500).json({
                status : "error",
                message : "Something happened updating the user " + err.message,
                payload : null
            })
        }})

};

//Get Business by Id
export const getBusinessById : RequestHandler = (req:Request, res:Response) => {
    Business.findByPk(req.params.id as any)
        .then((data : Business | null) =>{
            return res.status(200).json({
                status : "success",
                message : "Business successfully retrieved",
                payload : data
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                status : "error",
                message : "Something happened " + err.message,
                payload : null
            })
        })
};

//Get All Business 
export const getAllBusiness : RequestHandler = (req:Request, res:Response) => {
    Business.findAll()
        .then((data : Business[]) => {
            return res.status(200).json({
                status : "success",
                message : "Business successfully retrieved",
                payload : data
            })
        })
        .catch((err) => {
            res.status(500).json({
                status : "error",
                message : "Somehing happened " + err.message,
                payload : null
            })
        })
};

//Delete Business
export const deleteBusiness : RequestHandler = async (req:Request, res:Response) : Promise<void> => {
    const {id} = req.body;

    try{
        await Business.destroy({where : id});
        res.status(200).json({
            message : "Business delete"
        })
    }catch(error){
        res.status(500).json({
            message : "Something happened",
            error
        })

    }
};

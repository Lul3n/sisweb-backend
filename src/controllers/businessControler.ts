import { Request, RequestHandler, Response } from "express";
import { Business } from "../models/business";
import { User } from "../models/user";

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
                message : "Something gone wrong" + err.message,
                payload : null
            })
        })

};

//Update Business by Id
export const updateBusiness : RequestHandler = (req:Request, res:Response) => {

};

//Get Business by Id
export const getBusinessById : RequestHandler = (req:Request, res:Response) => {

};

//Get All Business 
export const getAllBusiness : RequestHandler = (req:Request, res:Response) => {

};

//Delete Business
export const deleteBusiness : RequestHandler = (req:Request, res:Response) => {

};

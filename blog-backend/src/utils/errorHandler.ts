import type { NextFunction, Request, Response } from "express";
import { Prisma } from "../generated/prisma/client";

const errorHandler = (err:any, req:Request, res:Response, next:NextFunction)=>{

    let statusCode = 500;
    let errorMsg = "Internal Server Error!";
    
    //* PrismaClientValidationError
    if(err instanceof Prisma.PrismaClientValidationError){
        statusCode = 400;
        errorMsg = "Missing fields or incorrect data type."
    }

    res.status(statusCode).json({
        success : false,
        message : errorMsg,
    })
}

export default errorHandler;
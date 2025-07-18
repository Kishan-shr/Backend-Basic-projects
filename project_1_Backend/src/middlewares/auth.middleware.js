import { ApiError } from "../utils/ApiError.js";
import { APiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User as user } from "../models/user.model.js";

// id their on response then instead of res we can underscore "_"
export const verifyJWT = asyncHandler(async(req,_,next)=>{ //here we can use underscore "_"

  try {
     const token= req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")
     if(!token){
      throw new ApiError(401,"Unauthorized request")
     }
     const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
     await user.findById(decodedToken?._id).select("-password -refreshToken")
  
     if(!user){
    throw new ApiError(401,"Invalid Access Token")
     }
     req.user = user;
     next()
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token")
  }
})
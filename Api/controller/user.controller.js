// import "../models/connection.js";
// import url from "url";
// import jwt from "jsonwebtoken";
// import rs from "randomstring";
// import { sendMail } from "./email.controller.js";

// //to link models to controller
// import UserSchemaModel from '../models/user.model.js';
// // import { console } from "inspector";

// export const save=async(req,res)=>{
//  const users=await UserSchemaModel.find();   
//  const l=users.length;
//  const _id=l==0?1:users[l-1]._id+1;
//  const userDetails={...req.body,"_id":_id,"status":0,"role":"user","info":Date()};   
//  try{
//     await UserSchemaModel.create(userDetails);
//     sendMail(userDetails.email,userDetails.password);
//     console.log(userDetails)
//     res.status(201).send({"status":"OK"});
//  }catch(error){
//     res.status(500).json({"status":false});
//     console.log(error);        
//  }
// };

// export const fetch=async(req,res)=>{
//    var condition_obj=req.query;  
//    var userList=await UserSchemaModel.find(condition_obj);
//    if(userList.length!=0)
//      res.status(200).json(userList);
//    else
//      res.status(404).json({"status":"Resource not found"});    
// };


// export var deleteUser=async(req,res)=>{
//    let userDetails = await UserSchemaModel.findOne(req.body);
//    if(userDetails){
//        let user=await UserSchemaModel.deleteOne(req.body);   
//        if(user)
//          res.status(200).json({"status":"OK"});
//        else
//          res.status(500).json({"status": "Server Error"});
//    }
//    else
//      res.status(404).json({"status":"Requested resource not available"});
// };  


// export var update=async(req,res)=>{
//    let userDetails = await UserSchemaModel.findOne(req.body.condition_obj);
//   // console.log (userDetails);
   
//    if(userDetails){
//        let user=await UserSchemaModel.updateMany(req.body.condition_obj,{$set:req.body.content_obj});   
//        if(user)
//          res.status(200).json({"status":"OK"});
//        else
//          res.status(500).json({"status": "Server Error"});
//    }
//    else
//      res.status(404).json({"status":"Requested resource not available"});    
// };


// export const login=async(req,res)=>{
//   var condition_obj={...req.body,"status":1};
//   var userList=await UserSchemaModel.find(condition_obj);
//   if(userList.length!=0)
//   {
//    const payload=userList[0].email; 
//    const key=rs.generate(50);
//    const token = jwt.sign(payload,key); 
//    res.status(200).json({"token":token,"userDetails":userList[0]});
//   }
//   else
//    res.status(500).json({"token":"error"});

//  };

import "../models/connection.js";
import jwt from "jsonwebtoken";
import rs from "randomstring";

// Link model
import UserSchemaModel from "../models/user.model.js";

// ===================== SAVE =====================
export const save = async (req, res) => {
  try {
    const userDetails = {
      ...req.body,
      status: 0,
      role: "user",
      info: Date()
    };

    await UserSchemaModel.create(userDetails);

    res.status(201).json({ status: "OK" });

  } catch (error) {
    console.log("Save Error:", error);
    res.status(500).json({ status: false, error: error.message });
  }
};


// ===================== FETCH =====================
export const fetch = async (req, res) => {
  try {
    const condition_obj = req.query || {};

    const userList = await UserSchemaModel.find(condition_obj);

    if (userList.length !== 0) {
      res.status(200).json(userList);
    } else {
      res.status(404).json({ status: "Resource not found" });
    }

  } catch (error) {
    console.log("Fetch Error:", error);
    res.status(500).json({ status: false, error: error.message });
  }
};


// ===================== DELETE =====================
export const deleteUser = async (req, res) => {
  try {
    const condition = req.body;

    const userDetails = await UserSchemaModel.findOne(condition);

    if (!userDetails) {
      return res.status(404).json({ status: "Requested resource not available" });
    }

    await UserSchemaModel.deleteOne(condition);

    res.status(200).json({ status: "OK" });

  } catch (error) {
    console.log("Delete Error:", error);
    res.status(500).json({ status: "Server Error", error: error.message });
  }
};


// ===================== UPDATE =====================
export const update = async (req, res) => {
  try {
    const { condition_obj, content_obj } = req.body;

    const user = await UserSchemaModel.findOne(condition_obj);

    if (!user) {
      return res.status(404).json({ status: "Requested resource not available" });
    }

    await UserSchemaModel.updateMany(condition_obj, { $set: content_obj });

    res.status(200).json({ status: "OK" });

  } catch (error) {
    console.log("Update Error:", error);
    res.status(500).json({ status: "Server Error", error: error.message });
  }
};


// ===================== LOGIN =====================
export const login = async (req, res) => {
  try {
    const condition_obj = { ...req.body, status: 1 };

    const userList = await UserSchemaModel.find(condition_obj);

    if (userList.length !== 0) {
      const payload = userList[0].email;
      const key = rs.generate(50);

      const token = jwt.sign(payload, key);

      res.status(200).json({
        token: token,
        userDetails: userList[0]
      });
    } else {
      res.status(401).json({ token: "error", message: "Invalid credentials" });
    }

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ token: "error", error: error.message });
  }
};

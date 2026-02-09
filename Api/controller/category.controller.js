import "../models/connection.js";
import url from "url";
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


//to link models to controller
import CategorySchemaModel from '../models/category.model.js';

export const save=async(req,res)=>{
 const category=await CategorySchemaModel.find();   
 const l=category.length;
 const _id=l==0?1:category[l-1]._id+1;

 const caticon=req.files.caticon;
 const caticonnm=Date.now()+"_"+caticon.name;
 const categoryuploadpath=path.join(__dirname,"../../UI/public/assets/uploads/categoryicons",caticonnm);
 const cDetails={...req.body,"_id":_id,"caticonnm":caticonnm};   
 
 try{
    await CategorySchemaModel.create(cDetails);
    caticon.mv(categoryuploadpath);
    res.status(201).send({"status":"OK"});
 }catch(error){
    res.status(500).json({"status":false});        
 };
};

export const fetch=async(req,res)=>{
  var condition_obj=req.query;  
  var cList=await CategorySchemaModel.find(condition_obj);
  if(cList.length!=0)
    res.status(200).json(cList);
  else
    res.status(404).json({"status":"Resource not found"});    
};

export var deleteUser=async(req,res)=>{
   let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
   if(cDetails){
       let category=await CategorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));   
       if(category)
         res.status(200).json({"status":"OK"});
       else
         res.status(500).json({"status": "Server Error"});
   }
   else
     res.status(404).json({"status":"Requested resource not available"});
};  


export var update=async(req,res)=>{
   let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
   if(cDetails){
       let c=await CategorySchemaModel.updateMany(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});   
       if(c)
         res.status(200).json({"status":"OK"});
       else
         res.status(500).json({"status": "Server Error"});
   }
   else
     res.status(404).json({"status":"Requested resource not available"});    
};


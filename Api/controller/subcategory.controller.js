

import "../models/connection.js";
import url from "url";
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link models to controller
import SubCategorySchemaModel from '../models/subcategory.model.js';

export const save=async(req,res)=>{
 const subcategory=await SubCategorySchemaModel.find();   
 const l=subcategory.length;
 const _id=l==0?1:subcategory[l-1]._id+1;

 const caticon=req.files.caticon;
 const subcaticonnm=Date.now()+"_"+caticon.name;
 const subcategoryuploadpath=path.join(__dirname,"../../UI/public/assets/uploads/subcategoryicons",subcaticonnm);
 const scDetails={...req.body,"_id":_id,"subcaticonnm":subcaticonnm};   
 
 try{
    await SubCategorySchemaModel.create(scDetails);
    caticon.mv(subcategoryuploadpath);
    res.status(201).send({"status":"OK"});
 }catch(error){
    res.status(500).json({"status":false});        
 };
};


export const fetch=async(req,res)=>{
  var condition_obj=req.query;  
  var scList=await SubCategorySchemaModel.find(condition_obj);
  if(scList.length!=0)
    res.status(200).json(scList);
  else
    res.status(404).json({"status":"Resource not found"});    
};


/*export var deleteUser=async(req,res)=>{
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
*/

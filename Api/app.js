import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from 'express-fileupload';

// routers
import UserRouter from "./routes/user.router.js";
import CategoryRouter from "./routes/category.router.js";
import SubCategoryRouter from "./routes/subcategory.router.js";
import ContactRouter from "./routes/contact.router.js";

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


// routes
app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/subcategory", SubCategoryRouter);
app.use("/contact", ContactRouter);

// server
app.listen(3002, () => {
  console.log("Server running at http://localhost:3002");
});

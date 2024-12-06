import express from "express";
import * as BlogsController from "../app/controllers/BlogsController.js";

const router = express.Router();

router.post("/createBlog", BlogsController.createBlog)
router.get("/readBlogById/:id", BlogsController.getBlogById)
router.post("/updateBlog/:id", BlogsController.updateBlog)
router.get("/deleteBlog/:id", BlogsController.deleteBlog)

export default router
import { createBlogService, deleteBlogService, getBlogByIdService, updatedBlogService } from "../service/BlogServices.js";

//create blog
export const createBlog = async (req, res) => {
    let result = await createBlogService(req)
    return res.json(result);
}

//get blog by id
export const getBlogById = async (req, res) => {
    let result = await getBlogByIdService(req)
    return res.json(result);
}

//update blog
export const updateBlog = async (req, res) => {
    let result = await updatedBlogService(req)
    return res.json(result);
}

//delete blog
export const deleteBlog = async (req, res) => {
    let result = await deleteBlogService(req)
    return res.json(result);
}
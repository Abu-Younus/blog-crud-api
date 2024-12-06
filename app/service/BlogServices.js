import blogsModel from "../model/blogsModel.js";


// Create a blog
export const createBlogService = async (req) => {
    try {
        let { title, short_des, des } = req.body;

        // Validation to check if all fields are provided
        if (!title || !short_des || !des) {
            return { status: "error", message: "All fields are required!" };
        }

        // Check if the blog with the same title already exists
        const existingBlog = await blogsModel.findOne({ title });
        if (existingBlog) {
            return { status: "error", message: "Title is already taken!" };
        }

        // Create the new blog
        let data = await blogsModel.create(req.body);
        return { status: "success", message: "Blog created successfully.", data: data };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};

// Read (get) a single blog by ID
export const getBlogByIdService = async (req) => {
    try {
        const { id } = req.params;

        const blog = await blogsModel.findById(id);
        if (!blog) {
            return { status: "error", message: "Blog not found!" };
        }

        return { status: "success", data: blog };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};

// Update a blog by ID
export const updatedBlogService = async (req) => {
    try {
        const { id } = req.params;

        let { title, short_des, des } = req.body;

        // Validation to check if all fields are provided
        if (!title || !short_des || !des) {
            return { status: "error", message: "All fields are required!" };
        }

        // Check if the product exists
        const blog = await blogsModel.findById(id);
        if (!blog) {
            return { status: "error", message: "Blog not found!" };
        }

        // Update the blog with new data
        const updatedBlog = await blogsModel.findByIdAndUpdate(id, req.body, { new: true });

        return { status: "success", message: "Blog updated successfully.", data: updatedBlog };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};

// Delete a blog by ID
export const deleteBlogService = async (req) => {
    try {
        const { id } = req.params;

        // Check if the blog exists
        const blog = await blogsModel.findById(id);
        if (!blog) {
            return { status: "error", message: "Blog not found!" };
        }

        // Delete the product
        await blogsModel.findByIdAndDelete(id);

        return { status: "success", message: "Blog deleted successfully." };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};
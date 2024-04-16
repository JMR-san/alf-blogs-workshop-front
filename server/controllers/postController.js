const Post = require('../models/postModel');
const deleteFile = require('../utils/deleteFile');
//CREATE
// @desc     Create a Posts
// @route    POST /posts
//access     Public
const createPost = async(req, res) => {
    if (!req.body) {
        res.status(400).json({ error: 'No request body'});
    }

    const { title, author, content } = req.body;

    //const { path } = req.file
    const path  = req.file?.path ?? null

    try {
        const post = new Post({
            title,
            author,
            content,
            cover_photo: path,
        })

        const newPost = await post.save();

        if (newPost) {
            res.status(201).json(newPost);
        }
    } catch (error) {
        console.log(error)
        res.status(422).json(error)
    }
}

//UPDATE
// @desc     Update a Posts
// @route    PUT|PATCH /posts/:id
//access     Public
const updatePost = async(req, res) => {
    if (!req.body) {
        res.status(400).json({ error: 'No request body'});
    }

    const { id } = req.params; 
    const { title, author, content } = req.body;

    // Optionally check if req.file exists
    const path  = req.file?.path ?? null;

    try {
        // Find the Post
        const orignalPost = await Post.findById(id);
        // If there is no post, return
        if (!orignalPost) {
            return res.status(404).json({ error: 'Orignal Post Not Found'});
        }
        // Handle Deleting of the Previous Photo
        // Onlyy Delete the Previus Photo if there's a newly UPLOADED file
        if (orignalPost.cover_photo && path) {
            deleteFile(orignalPost.cover_photo);
        }

        // Update the fiels of the orignal Post
        orignalPost.title = title
        orignalPost.author = author
        orignalPost.content = content
        orignalPost.cover_photo = path
        
        // Save Post
        const updatedPost = await orignalPost.save()

        // Return
        res.status(200).json(updatedPost)

    } catch (error) {
        console.log(error)
        res.status(422).json(error)
    }
}

// @desc     Get ALL Posts
// @route    GET /posts
// access     Public
const getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find()

        res. json(posts)
    } catch (error) {
        console.log(error)
    }
}


// @desc     Show specified Posts
// @route    GET /posts
// access     Public
const showPost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);

        if (!post) {
            res.status(404).json({ error: 'Post not Found'});
        }

        res.json(post);
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: 'Post not Found'});
    }
}

// @desc     Delete specified Posts
// @route    DEL /posts
// access     Public
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            res.status(404).json({ error: 'Post not Found'});
        }

        if (post.cover_photo) {
            deleteFile(post.cover_photo);
        }

        res.status(200).json({ message: 'Successfully deleted post'})
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: 'Post not Found'});
    }
}

module.exports = {
    getAllPosts,
    createPost,
    updatePost,
    showPost,
    deletePost
}
//UPDATE
//DELETE
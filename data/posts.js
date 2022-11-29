const { ObjectId } = require('mongodb');
const data = require('../config/mongoCollections');
const posts = data.posts;

const getPostById = async (id) => {
    const postsCollection = await posts();

    const foundPost = await postsCollection.findOne({ _id: ObjectId(id) });

    return foundPost;
};

const getAllPosts = async () => {
    const postsCollection = await posts();

    const foundPosts = await postsCollection.find({}).toArray();
    return foundPosts;
};

const createPost = async (
    posterId,
    name,
    location,
    date,
    time
) => {

    //Error Check
    const postsCollection = await posts();

    const newPost = {
        posterId,
        name,
        location,
        date,
        time,
        respondents: []
    }

    const inserted = await postsCollection.insertOne(newPost);

    return getPostById(inserted.insertedId);
}


const deletePost = async (id) => {
    
    const postsCollection = await posts();
    const removedPost = await getPostById(id);

    const deletedInfo = await postsCollection.deleteOne({_id:ObjectId(id)});

    return removedPost;
};

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    deletePost
}
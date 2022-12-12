const { ObjectId } = require("mongodb");
const data = require("../config/mongoCollections");
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

const getPostsByName = async (name) => {
  const postsCollection = await posts();

  const found = await postsCollection.find({ name: name }).toArray();
  return found;
};

const rsvpPost = async (id, userId) => {
  const postsCollection = await posts();

  const inserted = await postsCollection.updateOne(
    { _id: ObjectId(id) },
    { $push: { respondents: userId } }
  );
  const updatedPost = await getPostById(id);
  return updatedPost;
};

const createPost = async (posterId, name, location, date, time) => {
  //Error Check
  const postsCollection = await posts();

  const newPost = {
    posterId,
    name,
    location,
    date,
    time,
    respondents: [],
  };

  const inserted = await postsCollection.insertOne(newPost);

  return getPostById(inserted.insertedId);
};

const deletePost = async (id) => {
  const postsCollection = await posts();
  const removedPost = await getPostById(id);

  const deletedInfo = await postsCollection.deleteOne({ _id: ObjectId(id) });

  return removedPost;
};

const updatePost = async (id, posterId, name, location, date, time) => {
  const postsCollection = await posts();
  const updated = await postsCollection.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        posterId: posterId,
        name: name,
        location: location,
        date: date,
        time: time,
      },
    }
  );
  const post = await getPostById(id);
  return post;
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  deletePost,
  getPostsByName,
  rsvpPost,
  updatePost,
};

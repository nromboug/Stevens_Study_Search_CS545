const data = require("../config/mongoCollections");
const users = data.users;
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const saltRounds = 10;

const addUser = async (username, password) => {
  try {
    if (!username || !password) throw "must provide username and password";

    const userCollection = await users();
    if (await userCollection.findOne({ username: username }))
      throw "Username already exists!";
    const hash = await bcrypt.hash(password, saltRounds);
    const addedInfo = await userCollection.insertOne({
      username,
      password: hash,
    });

    return await userCollection.findOne({
      _id: ObjectId(addedInfo.insertedId),
    });
  } catch (e) {
    throw e;
  }
};

const loginUser = async (username, password) => {
  try {
    if (!username || !password) throw "must provide username and password";
    const userCollection = await users();
    const user = await userCollection.findOne({ username: username });
    const cmp = await bcrypt.compare(password, user.password);
    if (cmp) {
      return username;
    } else throw "Password does not match!";
  } catch (e) {
    throw e;
  }
};

module.exports = {
  addUser,
  loginUser,
};

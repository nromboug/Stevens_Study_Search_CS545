const data = require('../config/mongoCollections');
const users = data.users;
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const saltRounds = 10;

const addUser = async (
    username,
    password
) => {
    if (!username || !password) throw "must provide username and password";

    const userCollection = await users();

    const hash = await bcrypt.hash(password, saltRounds);
    const addedInfo = await userCollection.insertOne({username, password: hash});

    return await userCollection.findOne({_id: ObjectId(addedInfo.insertedId)});
};



module.exports = {
    addUser
}
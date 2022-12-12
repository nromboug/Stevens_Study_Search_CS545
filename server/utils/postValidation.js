const { ObjectId } = require('mongodb');

const checkPostInfo = (
    posterId,
    name,
    location,
    date,
    time
) => {
    if (!posterId) throw "Must provide posterId";
    if (!name) throw "Must provide name";
    if (!location) throw "Must provide location";
    if (!date) throw "Must provide date";
    if (!time) throw "Must provide time";

    if(!ObjectId.isValid(posterId)) throw "Id must be a valid ObjectId";

    if (typeof(name) !== 'string') throw 'name must be a string';
    if (typeof(location) !== 'string') throw 'location must be a string';
    if (typeof(date) !== 'string') throw 'date must be a string';
}
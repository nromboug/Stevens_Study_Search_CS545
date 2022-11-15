const postRoutes = require('./posts');
const userRoutes = require('./users');

const construct = (app) => {
    app.use('/posts', postRoutes);
    app.use('/users', userRoutes);

    app.use('*', (req, res) => {
        res.status(404).json({error: "Endpoint doesn't exist."});
    });
}


module.exports = construct;
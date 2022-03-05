module.exports = (req, res, next) => {
    console.log(`${new Date().toUTCString()}-${req.method}-${req.hostname}`);
    next(); //bir sonraki middleware geçmesini sağlar
};
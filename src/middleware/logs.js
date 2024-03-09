const logRequest = (req, res, next) =>{(req, res, next)
        console.log('Terjadi request ke PATH :', req.path);
        console.log(req.data);
        next();
    }
module.exports = logRequest;

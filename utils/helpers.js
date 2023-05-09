const authorCheck = (req, res) => {
    if(req.body.username === req.session.username){
        return true;
    }else {
        console.log(req.body.username);
        console.log(req.session.username);
        return false;
    }
};

module.exports = authorCheck;
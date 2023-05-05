const router = require('express').Router();
const { User, Poll } = require('../models');
const auth = require('../utils/auth');

//Main page, displaying all polls in blocks
router.get('/', async(req, res) => {
    try {
        //Getting and returning all poll titles and the creating user
        const pollTitle = await Poll.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const polls = pollTitle.map((poll) => poll.get({plain: true}));

        res.render('homepage', {
            polls,
            logged_in: req.session.logged_in
        });
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/login', async(req, res) => {
    if(req.session.logged_in){
        res.redirect('/user-page');
        return;
    }

    res.render('login');
});
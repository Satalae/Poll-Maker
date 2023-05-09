const router = require('express').Router();
const { User, Poll, Result } = require('../models');
const auth = require('../utils/auth');

// Login/Base Page
router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});

// Homepage page, displaying all polls in blocks
router.get('/homepage', async (req, res) => {
    try {
        // If not logged in, send back to start
        if (!req.session.logged_in) {
            res.redirect('/');
            return;
        }

        //Getting and returning all poll titles and the creating user
        const pollTitle = await Poll.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const polls = pollTitle.map((poll) => poll.get({ plain: true }));

        res.render('homepage', {
            polls,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to a specific poll
router.get('/homepage/:id', async (req, res) => {
    try {
        const pollData = await Poll.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const poll = pollData.get({ plain: true });

        res.render('poll', {
            ...poll,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
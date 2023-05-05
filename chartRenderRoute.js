const router = require('express').Router();
const { Poll, Result } = require('./models');

// get poll results for a single poll
router.get('/:id', async (req, res) => {
    try {
        const poll = await Poll.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Result,
                attributes: ['option_1_votes', 'option_2_votes']
            }]
        });
        // Render the poll results for a single poll using Handlebars.js
        res.render('polls', {
            polls: [poll]
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

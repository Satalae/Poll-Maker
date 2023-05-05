const router = require('express').Router();
const { Poll, Result } = require('./models');

// get poll results 
router.get('/', async (req, res) => {
    try {
        const polls = await Poll.findAll({
            include: [
                {
                    model: Result,
                    attributes: ['option_1_votes', 'option_2_votes']
                }
            ]
        });

        // Render the poll results using Handlebars.js
        res.render('polls', { polls });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

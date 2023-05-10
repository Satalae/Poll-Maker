const router = require('express').Router();
const { Poll, Result } = require('../models');


router.get('/polls/:id', async (req, res) => {
    try {
        const poll = await Poll.findOne({
            where: { id: req.params.id },
            include: [Result]
        });
        res.render('chartview', { poll });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
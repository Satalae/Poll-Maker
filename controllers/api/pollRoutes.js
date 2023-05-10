const router = require('express').Router();
const { Poll, Option, Result } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPoll = await Poll.create({
            title: req.body.title,
            description: req.body.description,
            end_date: req.body.endDate,
            user_id: req.session.user_id,
        });

        await Option.bulkCreate([
            { choice: req.body.option1, poll_id: newPoll.id },
            { choice: req.body.option2, poll_id: newPoll.id },
        ]);

        await Result.create({ poll_id: newPoll.id });

        res.status(200).json(newPoll);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const pollData = await Poll.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!pollData) {
            res.status(404).json({ message: 'No poll found with this ID!' });
            return;
        }

        res.status(200).json(pollData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

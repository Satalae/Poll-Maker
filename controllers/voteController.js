const { Vote, Result, Option } = require('../models');

async function createVote(req, res) {
    try {
        // Create the vote
        const vote = await Vote.create({
            user_id: req.body.user_id,
            option_id: req.body.option_id
        });

        // Find out which option was voted for
        const option = await Option.findByPk(req.body.option_id);

        // Increment the vote count for the voted option
        if (option.choice === 'Option 1') {
            await Result.increment('option_1_votes', { where: { poll_id: option.poll_id } });
        } else if (option.choice === 'Option 2') {
            await Result.increment('option_2_votes', { where: { poll_id: option.poll_id } });
        }

        res.json(vote);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

module.exports = { createVote };
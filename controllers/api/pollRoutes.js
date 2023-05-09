const router = require('express').Router();
const { Poll } = require('../../models');
const auth = require('../../utils/auth');

// Creating a poll
router.post('/homepage', auth, async(req, res) => {
    try{
        const newPoll = await Poll.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPoll);
    }catch(err){
        res.status(400).json(err);
    }
});

// Deleting a poll
router.delete('/homepage/:id', auth, async(req, res) => {
    try{
        const pollData = await Poll.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if(!pollData){
            res.status(404).json({message: 'No poll found with this ID!'});
            return;
        }

        res.status(200).json(pollData);
    }catch(err){
        res.status(500).json(err);
    }
});
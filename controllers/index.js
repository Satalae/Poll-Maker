// central point for all routes
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const chartView = require('./chartRenderRoute')
const { createVote } = require('./voteController');

router.use('/chart', chartView)
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.post('/votes', createVote);

module.exports = router;
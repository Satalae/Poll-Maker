// central point for all routes
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', apiRoutes);
router.use('/api', homeRoutes);

module.exports = router;
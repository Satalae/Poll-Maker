const { Setting } = require('../models');
const router = require('express').Router();

const settingsController = {
  getSetting: async (req, res) => {
    try {
      const setting = await Setting.findOne({ where: { name: req.params.name } });
      if (setting) {
        res.json(setting);
      } else {
        res.status(404).json({ message: 'Setting not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching setting', error });
    }
  },
};

router.get('/:name', settingsController.getSetting);

module.exports = router;

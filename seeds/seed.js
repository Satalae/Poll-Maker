const sequelize = require('../config/connection');
const { User, Poll, Option, Vote, Result } = require('../models');

const userData = require('./userData.json');
const pollData = require('./pollData.json');
const optionData = require('./optionData.json');
const votedata = require('./votedata.json');
const resultData = require('./resultData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // seed user
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // seed poll
    await Poll.bulkCreate(pollData, {
        individualHooks: true,
        returning: true,
    });

    // seed option
    await Option.bulkCreate(optionData, {
        individualHooks: true,
        returning: true,
    });

    await Vote.bulkCreate(votedata, {
        individualHooks: true,
        returning: true,
    });
    // Seed results
    await Result.bulkCreate(resultData, {
        individualHooks: true,
        returning: true,
    });

    console.log('All data seeded successfully.');
    process.exit(0);
};

seedDatabase();
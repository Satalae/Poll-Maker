const sequelize = require('./config/connection');
const { User, Vote, Result, Poll, Option } = require('./models');

const userData = [
    {
        username: 'user1',
        password: 'password1'
    },
    {
        username: 'user2',
        password: 'password2'
    },
    {
        username: 'user3',
        password: 'password3'
    }
];

const pollData = [
    {
        title: 'Poll 1',
        description: 'This is the first poll.',
        end_date: new Date('2023-05-31'),
        user_id: 1
    },
    {
        title: 'Poll 2',
        description: 'This is the second poll.',
        end_date: new Date('2023-06-30'),
        user_id: 2
    },
    {
        title: 'Poll 3',
        description: 'This is the third poll.',
        end_date: new Date('2023-07-31'),
        user_id: 3
    }
];

const optionData = [
    {
        choice: 'Option 1',
        poll_id: 1
    },
    {
        choice: 'Option 2',
        poll_id: 1
    },
    {
        choice: 'Option 1',
        poll_id: 2
    },
    {
        choice: 'Option 2',
        poll_id: 2
    },
    {
        choice: 'Option 1',
        poll_id: 3
    },
    {
        choice: 'Option 2',
        poll_id: 3
    }
];

const voteData = [
    {
        user_id: 1,
        option_id: 1
    },
    {
        user_id: 1,
        option_id: 2
    },
    {
        user_id: 2,
        option_id: 2
    },
    {
        user_id: 2,
        option_id: 2
    },
    {
        user_id: 3,
        option_id: 2
    },
    {
        user_id: 3,
        option_id: 1
    }
];

const resultData = [
    {
        poll_id: 1,
        option_1_votes: 1,
        option_2_votes: 2
    },
    {
        poll_id: 2,
        option_1_votes: 0,
        option_2_votes: 2
    },
    {
        poll_id: 3,
        option_1_votes: 1,
        option_2_votes: 1
    }
];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, { individualHooks: true, returning: true });
    const polls = await Poll.bulkCreate(pollData, { returning: true });
    const options = await Option.bulkCreate(optionData, { returning: true });
    const votes = await Vote.bulkCreate(voteData, { returning: true });
    const results = await Result.bulkCreate(resultData, { returning: true });

    console.log('Database seeded!');
    process.exit(0);
};

seedDatabase();

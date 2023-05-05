// import models
const User = require('./user');
const Poll = require('./poll');
const Vote = require('./vote');
const Option = require('./options');
const Result = require('./results');

// DEFINE MODEL RELATIONS
// User Model
User.hasMany(Poll, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Poll.belongsTo(User, { foreignKey: 'user_id' });

// Poll Model
Poll.hasMany(Option, { foreignKey: 'poll_id', onDelete: 'CASCADE' });
Option.belongsTo(Poll, { foreignKey: 'poll_id' });

Poll.hasOne(Result, { foreignKey: 'poll_id', onDelete: 'CASCADE' });
Result.belongsTo(Poll, { foreignKey: 'poll_id' });

// Option Model
Option.hasMany(Vote, { foreignKey: 'option_id', onDelete: 'CASCADE' });
Vote.belongsTo(Option, { foreignKey: 'option_id' });
Option.belongsTo(Poll, { foreignKey: 'poll_id' });

// Vote Model
Vote.belongsTo(User, { foreignKey: 'user_id' });

const models = {
    User,
    Poll,
    Vote,
    Option,
    Result
};

module.exports = models;
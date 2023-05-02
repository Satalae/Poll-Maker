const { User, Poll, Vote, Result, Setting } = require('./models');

User.belongsToMany(Poll, {
  through: 'user_poll',
  foreignKey: 'user_id'
});

Poll.belongsToMany(User, {
  through: 'user_poll',
  foreignKey: 'poll_id'
});

Poll.hasMany(Vote, {
  foreignKey: 'poll_id',
  onDelete: 'CASCADE'
});

Vote.belongsTo(Poll, {
  foreignKey: 'poll_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Poll.hasOne(Result, {
  foreignKey: 'poll_id'
});

Result.belongsTo(Poll, {
  foreignKey: 'poll_id'
});

module.exports = { User, Poll, Vote, Result, Setting };

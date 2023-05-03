//  import the required modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create a Setting class that extends the Model class from Sequelize.
class Setting extends Model {}

// initialize the Setting model using the init method, passing in an object with the model's properties
Setting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {}
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'setting'
  }
);

// export the Setting class for use in other parts of the app
module.exports = Setting;
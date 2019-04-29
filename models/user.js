'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    full_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:`Email Address in invalid format`
        },
        isUnique(email) {
          return User.findOne({
            where: {
              email: email
            }
          })
          .then(function (found){
            if (found !== null && found.email === email) {
              throw new Error(`email already registered`)
            }
          })
        }
      }
    },
    password: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:(user, options)=>{
        let hash = bcrypt.hashSync(`${user.password}/\/`, salt);
        user.password = hash
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };

  return User;
};
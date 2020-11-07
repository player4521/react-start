'use strict';

const path = require('path');
const Sequelize = require('sequelize');

// 두번째의 '..' 는 경로의 이동값인데, 현 디렉토리의 밖에 있다는 의미로 쓰이며
// 세번째의 'config' 는 현재 디렉토리 안에 있는 'config'라는 디렉토리로 들어간다는 의미
// 마지막의 'db.json' 는 'config' 디렉토리 안에 있는 'db.json' 파일을 가져오겠다는 의미
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[
  env
];
const db = {};

// Sequelize에 RDS의 정보를 할당
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the database: ', err);
  });

db.Teacher = require('./teacher')(sequelize, Sequelize);
db.Class = require('./class')(sequelize, Sequelize);

// 1 대 1 관계 (Teacher : Class)
// db.Teacher.hasOne(db.Class);

//   1 대 M 관계 (Teacher : Classes)
// db.Teacher.hasMany(db.Class, {
//   foreignKey: 'teacher_id',
//   sourceKey: 'id'
// });
// db.Class.belongsTo(db.Teacher, {
//   foreignKey: 'teacher_id',
//   targetKey: 'id'
// });

//   N 대 M 관계 (Teachers : Classes)
// db.Teacher.belongsToMany(db.Class, {
//   through: 'scedule',
//   foreignKey: 'teacher_id'
// });
// db.Class.belongsToMany(db.Teacher, {
//   through: 'scedule',
//   foreignKey: 'class_id',
// });

db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
module.exports = db;

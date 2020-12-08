const express = require('express');
const app = express();

// 서버와 시퀄라이즈 연동
const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// index.js에 정의된 테이블이어야 함
const {
  Teacher,
  Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

// insert의 경우
app.post('/add/data', (req, res) => {
  console.log(req.body)

  Teacher.create({
    name: req.body.data
  })
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
      throw err;
    })
})

// Select의 경우
app.get('/get/data', (req, res) => {
  // Teacher.findOne({
  //   where: { id: 2 }                                   // 1건만 조회(object형태로 전송)
  // })
  // Teacher.findAll()                                    // 전 데이터 조회(Array형태로 전송)
  // Teacher.findAll({
  //   where: { name: 'player0' }                         // where구 name = player0
  // })
  Teacher.findAll({
    where: { [Op.or]: [{ id: 1 }, { name: 'player1' }] }  // where구 id = 1 or name = player0
  })
    .then(result => { res.send(result) })
    .catch(err => { throw err })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})

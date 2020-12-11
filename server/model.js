const sequelize = require('./models').sequelize;

// index.js에 정의된 테이블이어야 함
const {
    Teacher,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

module.exports = {
    api: {
        getData: callback => {
            Teacher.findAll()                                                   // 전 데이터 조회(Array형태로 전송)
                // Teacher.findOne({
                //     where: { id: 2 }                                         // 1건만 조회(object형태로 전송)
                // })
                // Teacher.findAll({
                //     where: { name: 'player0' }                               // where구 name = player0
                // })
                // Teacher.findAll({
                //     where: { [Op.or]: [{ id: 1 }, { name: 'player1' }] }     // where구 id = 1 or name = player0
                // })
                .then(result => { callback(result) })
                .catch(err => { throw err })
        },

        // TODO : req가 정의되지 않음
        addData: callback => {
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
        },

        modifyData: callback => {
            Teacher.update({ name: req.body.modify.name }, {
                where: { id: req.body.modify.id }
            })
                .then(result => { res.send(result) })
                .catch(err => { throw err })
        },

        deleteData: callback => {
            Teacher.destroy({
                where : { id : req.body.delete.id }
            })
            .then( res.sendStatus(200) )
            .catch( err => { throw err })
        },
    }
}
const path = require('path');
const model = require('./model');

const AWS = require('aws-sdk');
AWS.config.loadFromPath(
    path.join(__dirname, 'config', 'awsConfig.json')
);

module.exports = {
    needs: () => upload,
    api: {
        getData: (req, res) => {
            console.log('컨트롤러 연결 성공!')
            model.api.getData(data => {
                return res.send(data)
            })
        },

        addData: (req, res) => {
            model.api.addData(req.body.data)
        },

        modifyData: (req, res) => {
            model.api.modifyData(data => {
                return res.send(data)
            })
        },

        deleteData: (req, res) => {
            model.api.deleteData(data => {
                return res.send(data)
            })
        },
    }
}
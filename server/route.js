const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get/data', controller.api.getData);
router.post('/add/data', controller.api.addData);
router.post('/modify/data', controller.api.modifyData);
router.post('/delete/data', controller.api.deleteData);

// 다른 파일에서 사용할 수 있도록
module.exports = router;

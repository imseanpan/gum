var express = require('express');
var router = express.Router();

router.get('/getList', function(req, res, next) {
    res.json({message:"取得列表成功!"});
});

/* GET home page. */
router.post('/add', function(req, res, next) {
    res.json({message:"添加用户成功!"});
});


module.exports = router;

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

var params='';
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
  	var data={
  		data:ret,
  		code:true
  	}
    res.json(data);
  }
};

// 注册用户接口
router.post('/friends', (req, res) => {
var sql = $sql.user.login;
	params = req.body;
  conn.query('select * from friends', function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }else {
    	jsonWrite(res, result);
    }
  })
});

module.exports = router;

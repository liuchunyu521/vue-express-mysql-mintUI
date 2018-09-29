/**
 * Created by xiaoze on 2017/12/5.
 */
// node 后端服务器

const userApi = require('./api/userApi')//注册
const loginApi = require('./api/loginApi')//登录
const chatApi = require('./api/chatApi')//聊天
const friendsApi = require('./api/friendsApi')//朋友圈

const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api/user', userApi)
app.use('/api/user', loginApi)
app.use('/api/user', chatApi)
app.use('/api/user', friendsApi)


// 监听端口
//app.listen(3000)
//console.log('success listen at port:3000......')

var debug = require('debug')('server'); // debug模块
app.set('port', process.env.PORT || 3000); // 设定监听端口
 
//启动监听
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
 
//module.exports = app;//这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来

/**
 * Created by xiaoze on 2017/12/5.
 */
// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into login(id, passname, password) values (0, ?, ?)',
    login: ''
  }
}
module.exports = sqlMap

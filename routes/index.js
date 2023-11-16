var express = require('express');
var router = express.Router();
const oracDb = require('oracledb'); 

let conn=oracDb.getConnection(
  {
    user: "s2020615644",
    password: "dpass",
    connectString: '103.221.254.51:1521/pdbdbms2023.cse.du.ac.bd',
  }
)
console.log("successfully connected to oracle db");

/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });

module.exports = router;

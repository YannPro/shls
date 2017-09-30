var express = require('express');
var router = express.Router();
/* GET home page. */
/*router.get('/',(req,res,next)=>{
    res.render('login/login');
})*/
router.get('/login', (req, res) => {
  res.render('login/login');
});
router.get('/index', (req,res) => {
    res.render('index')
});
router.use('/users', require('./users'))
module.exports = router;

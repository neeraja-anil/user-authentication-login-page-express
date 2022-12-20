var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,next) {
  console.log(req.session)
  let userid = req.session.userid
  if(userid){
    res.render('users')
  }else
  res.render('signin');

});




module.exports = router;

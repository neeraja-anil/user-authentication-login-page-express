var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res) {
  res.render('users');
});



router.post('/', (req, res) => {
  console.log(req.body)


  const email = req.body.email;
  const password = req.body.password;

  if (email == 'info@example.com' && password == 'random') {
    session = req.session
    session.loggedIn = true
    session.userid = req.body.email
    console.log(req.session)
    console.log(req.session.id)
    res.render('users')
  } else {
    res.send('invalid userid or password')
  }
})

router.get('/logout', (req,res)=>{
  req.session.destroy()
  res.redirect('/signin')
})





module.exports = router;

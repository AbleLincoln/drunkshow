var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newdonation', function(req, res) {
  console.log(req.body);
  res.send('hey');
});

router.get('/newdonation', function(req, res) {
  console.log(req.body);
  
  // res.json(req.body);
  // res.show(JSON.stringify(req.body, null, 2));
})

module.exports = router;

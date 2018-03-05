var express = require('express');
var router = express.Router();
const io = require('socket.io-client');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newdonation', function(req, res) {
  // io emit
  res.io.emit('new donation', req.body);
  // console.log(req.body);
  res.send('Received');
});

router.get('/newdonation', function(req, res) {
  console.log(req.body);
  
  // res.json(req.body);
  // res.show(JSON.stringify(req.body, null, 2));
})

module.exports = router;

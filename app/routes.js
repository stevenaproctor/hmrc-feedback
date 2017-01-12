var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/feedback2', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var done = req.query.done

  if (done === 'No') {
    // redirect to the relevant page
    res.redirect('/feedback2a')
  } else{
    res.render('feedback2')    
    }
})

module.exports = router

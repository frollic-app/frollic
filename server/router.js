const express = require('express');
const controller = require('./controller.js');
const router = express.Router();


//code here  
router.get('/search', controller.getResults, (req, res) => {
  console.log('in the router');
  res.status(200).json(res.locals);
});

module.exports = router;
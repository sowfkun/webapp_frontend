const express = require('express');
const router = express.Router();
var multer = require('multer'); 

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/upload/staff');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '_' + file.originalname.replace(/\s/g, ""));
  }
})

var upload = multer({
  storage: storage
})


const staffCtrler= require('../controllers/staff_ctrler')
//get staff info
router.get('/', staffCtrler.staff); 
//post staff info
router.post('/create',upload.single('staffImg'),staffCtrler.create);

module.exports = router;
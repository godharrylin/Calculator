const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    // res.send('Welcome from indexRouter!');
    res.render('index');  
})

module.exports = router;
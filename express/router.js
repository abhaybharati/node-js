const express = require("express");
const router = express.Router();
const middleware = require('./middleware');
router.use(middleware)  

router.get('/', (req, res)=>{
    console.log(req.query);
    
    res.render('index', {
        title:'Index File'
    })
});
router.get('/home', (req, res)=>{
    res.render('home', {
        title:'Home File'
    })
});

module.exports = router;
const express = require ("express");
const router = express.Router();
const port = 5000

router.get('/', (req,res)=> {
    res.status(200).json({
        name:'Pedro'
    })
})

module.exports = router
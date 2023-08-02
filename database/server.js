const express = require('express');

const app = express();
const users= require('./connection');
app.listen(3000, ()=>{

    console.log('Server is running on Port 3000');
});

app.use(express.json());
// Request type = post, get, patch, delete

app.post('/',async(req,res)=>{

    try {
        
        const sendData = new users(req.body);
        const saveData = await sendData.save();
        res.send(saveData);
    } catch (error) {
        
        res.status(404).send(error);
    }
})
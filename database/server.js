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

app.get('/', async(req, res)=>{

   try {
    const getData = await users.find({});
    res.send(getData);
   } catch (error) {
    
    res.status(404).send(error);
   }
});

// find data by id

app.get('/user-by-id/:id', async(req, res)=>{

    try {

        const id = req.params.id;

    const getidData =await users.findById({_id:id});
    res.send(getidData);

    } catch (error) {
        
        res.status(404).send(error);
    }
});

// update data

app.patch('/update/:id', async(req, res)=>{

    try {
        
        const id = req.params.id;
        // const requestData = new users(req.body);
        const updateData = await users.findByIdAndUpdate({_id:id}, req.body,{new:true});
        res.send(updateData);
    } catch (error) {
        
        res.status(500).send(error);
    }
});
// delete 

app.delete('/delete/:id', async(req,res)=>{

    try {
        
const id = req.params.id;
const deleteDataByid = await users.findByIdAndDelete({_id:id});
res.send(deleteDataByid);

    } catch (error) {
        
        res.status(500).send(error);
    }
});

// login

app.post('/login', async(req, res)=>{
try {
    
    
    const userPhone = req.body.phone;
    const getUser = await users.findOne({phone:userPhone});

    res.send(getUser);
    
} catch (error) {
    res.status(500).send(error);
}
});
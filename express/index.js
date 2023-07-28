const express = require('express');
const app = express();

app.get('/', (req, res)=>{

    res.send('hi this is first express route');
});
app.get('/about', (req, res)=>{

    res.send('hi this is first about route');
});

app.listen(3000, ()=>{

    console.log('Server is running on 3000 port');
})
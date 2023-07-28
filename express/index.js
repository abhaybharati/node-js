const express = require("express");
const path = require("path");
const app = express();
const pathDirectory = path.join(__dirname, 'public');
// console.log('pathDirectory===>', pathDirectory);
// app.use(express.static(pathDirectory));

// app.get('/', (req, res)=>{

//     // res.sendFile(`${pathDirectory}/index.html`);
// });
// // app.get('/', (req, res)=>{

// //     res.send('<h1> Html tag being used</h1>');
// // });

// app.get('/about', (req, res)=>{

//     res.send('hi this is first about route');
// });
// app.get('/home', (req, res)=>{

//     // res.sendFile(`${pathDirectory}/home.html`);
// });
// app.get('/download', (req, res)=>{

//     // res.download(`${pathDirectory}/index.html`);
// });

app.listen(3000, ()=>{

    console.log('Server is running on 3000 port');
})

// ===========Started using template engine (ejs)==============>

app.set("view engine", "ejs");
console.log(app.get("view engine"));
console.log(path.join(__dirname, "views"));

app.get('/', (req, res)=>{
    res.render('index', {
        title:'Index File'
    })
});
app.get('/home', (req, res)=>{
    res.render('home', {
        title:'Home File'
    })
});
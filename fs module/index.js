const fs = require('fs');

// Non Blocking iO Model
// fs.writeFile('file.txt', 'data is added successfully', ()=>{

//     console.log('data is added successfully');
// });
const addedData = fs.writeFileSync('file2.txt', 'data is added successfully');
console.log(addedData);
console.log('fs module');
// 
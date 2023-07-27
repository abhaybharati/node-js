const os = require('os');

const freeMem = os.freemem();
const homeDir = os.homedir();
const maChine = os.machine();
console.log(freeMem);
console.log(homeDir);
console.log(maChine);
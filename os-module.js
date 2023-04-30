const os = require('os');

console.log(os.userInfo());
console.log(os.uptime()/3600);

const currentOs  = {
    name : os.type(),
    rel : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs);
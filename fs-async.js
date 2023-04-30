const {readFile, writeFile} = require('fs');
// console.log(fs)
console.log('start')
readFile('./content/first.txt', "utf8",(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = res;
    // console.log(res);
    readFile('./content/second.txt','utf8',(err, res)=> {
        if(err){
            console.log(err)
            return;
        }
        const second = res;
        writeFile('./content/result-async.txt',`here is the result :  ${first}, ${second}`,(err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(res);
            console.log('done')
        });
    })
})

console.log('strat next')
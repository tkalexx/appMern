const util = require('util');
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('timeout')
        resolve(1);
    }, 2000);
    setTimeout(() => {
        // console.log('timeout3')
        reject(new Error('eerror'));
    }, 3000)
});
const cbb = (error,result) => {};

const acb = (cb)=>{
    //
    cb(null, 10);
};
const pacb = util.promisify(acb);

const a = async () => {
    return 10;
};

const p1 = new Promise((resolve, reject) => {
    resolve(10);
});

Promise.all([
    a(),
    p1,
    pacb(),
    p
]).then(console.log).catch(console.error);

(async ()=>{
    try {
        // const x = await pacb();
        // console.log(x );
        // const result = await p;
        // console.log(`result: ${result}`);
        const results = await Promise.race([
            a(),
            p1,
            pacb(),
            p
        ]);
        console.log(results);
    } catch (e) {
        console.log(`error: ${e.message}`)
    }

})();
// p.then(console.log).catch(console.error);
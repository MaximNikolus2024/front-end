console.log('Start');

setTimeout(() => {
    console.log('timeout 4000')
}, 4000);

setTimeout(()=>{
    console.log('timeout 2000')
}, 2000);

console.log('Finish')
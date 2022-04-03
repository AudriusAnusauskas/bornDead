let bornCount =0;
let deadCount=0;

setInterval(function (a, b){
    a = 4.4;
    b=1.8;
    
    let roundedBornCount = Math.round(bornCount += a);
    document.getElementById('born').innerHTML = roundedBornCount;

    let roundedDeadCount = Math.round(deadCount += b);
    document.getElementById('dead').innerHTML = roundedDeadCount;
        
    console.log(roundedBornCount, roundedDeadCount);
}, 1000)



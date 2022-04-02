// let born = document.getElementById('born');
// let dead = document.getElementById('dead');

let bornCount =0;
let deadCount=0;

const bornDead = setInterval(function (a, b){
    a = 4.4;
    b=1.8;
    for(let i=0; i<=a; i++){
        bornCount += Math.floor(a);
        born = document.getElementById('born');
        born.innerHTML;
    }
    for(let j=0; j<=b; j++){
        deadCount += Math.floor(b);
        dead = document.getElementById('dead');
        
    }

    // return (born, dead)
    console.log(born, dead);
}, 1000)



// setInterval(() => {
//     for(let i=0; i<=4.4; i++){
//         born += Math.floor(4.4);
//     }
//     born.innerHTML;

//     for(let j=0; j<=1.8; j++){
//         dead += Math.floor(1.8)
//     }
//     dead.innerHTML;

// bornDead(4.4, 1.8)

// })

// let born = 0;
// setInterval(function (a = 4) {born += a}, 1000 );

// count()

// console.log()

// const born = document.getElementById('born');
// const dead = document.getElementById('dead');

// setInterval(() => {
//     born += 4.4; 
//     born.innerHTML;
// })

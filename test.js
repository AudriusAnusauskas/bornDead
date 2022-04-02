let born = 0;
let dead = 0
const bornDead = function (a, b){
    for(let i=0; i<=a; i++){
        born += Math.floor(a);
    }
    for(let j=0; j<=b; j++){
        dead += Math.floor(b)
    }

    // return (born, dead)
    console.log(born, dead);
}

bornDead(4.4, 1.8)



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

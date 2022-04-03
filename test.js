let bornCount =0;
let deadCount=0;

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', function handleClick(event) {

event.preventDefault();

let a = Number(document.getElementById('avgBorn').value);
let b = Number(document.getElementById('avgDead').value);

function bornDead(){
            
        let roundedBornCount = Math.round(bornCount += a);
        document.getElementById('born').innerHTML = roundedBornCount;
    
        let roundedDeadCount = Math.round(deadCount += b);
        document.getElementById('dead').innerHTML = roundedDeadCount;
            
        console.log(roundedBornCount, roundedDeadCount);
        return false
    }
    
  setInterval(bornDead, 1000);

})

btn2.addEventListener('click', clearInterval())
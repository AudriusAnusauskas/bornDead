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
            
        if (a > 0 && a < 100) {
          let targetDiv = document.getElementById('innerdivs')
          // let sheet = document.createElement('style')
          // sheet.innerHTML = "div {flex: ; border: 2px solid black; width: 20px; height: 10%; background-color: blue;}";
          // targetDiv.appendChild(sheet);
          var tempDiv = document.createElement('span');
          tempDiv.style.display = 'inline';
          tempDiv.style.backgroundColor = 'pink';
          // tempDiv.style.height = '20px';
          // tempDiv.style.width = '20px';
          tempDiv.style.margin = '2px';
          tempDiv.style.border = 'solid black 1px';

          
          if (targetDiv) {
            targetDiv.insertAdjacentElement('afterend', tempDiv);
  }
        }
        
        console.log(roundedBornCount, roundedDeadCount);
        return false
      }
      
      setInterval(bornDead, 1000);
      
    }, {once : true});
    
    btn2.addEventListener('click', clearInterval())
    
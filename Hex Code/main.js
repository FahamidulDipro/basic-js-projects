const hexNum = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hex_btn');
const bodyBcg = document.querySelector('body');

const hexCode = document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex(){
    let hexCol = '#';
    for(var i = 0; i < 6 ; i++){
        let random = Math.floor(Math.random()*hexNum.length);
        hexCol += hexNum[random];
        console.log(hexCol);
       
    }
    bodyBcg.style.backgroundColor = hexCol;
    hexCode.innerHTML = hexCol;
}
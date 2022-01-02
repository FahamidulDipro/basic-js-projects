const colorBtn = document.querySelector('.color_btn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','purple','crimson','grey','green','skyblue','steelblue','pink','magenta','orange','lightgreen'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}
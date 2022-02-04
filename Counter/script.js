let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', function() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > '0') counter.style.color = 'lightgreen';
    else if (counter.innerHTML == '0') counter.style.color = 'white';
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' });

});
lowerCount.addEventListener('click', function() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') counter.style.color = 'orange';
    else if (counter.innerHTML == '0') counter.style.color = 'white';
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' });


});
const counter = document.getElementById('timer');
const deccrease = document.getElementById('dec');
const reset = document.getElementById('reset');
const increase = document.getElementById('inc');

let count = 0;

deccrease.addEventListener('click', () =>{
    count = count - 1;
    counter.textContent = count;
});

reset.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
})

increase.addEventListener('click', () => {
    count = count + 1;
    counter.textContent = count;
})
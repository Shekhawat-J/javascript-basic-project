const toggle = document.querySelector('.btn');
const popUp = document.querySelector('.modal');
const closeButton = document.querySelector('.close-btn');

console.log(toggle);
console.log(popUp)
console.log(closeButton);
toggle.addEventListener('click', () => {
    popUp.classList.add('open-modal');
});

closeButton.addEventListener('click', () => {
    popUp.classList.remove('open-modal');
});


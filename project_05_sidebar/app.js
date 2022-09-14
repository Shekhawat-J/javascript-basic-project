const toggleButton = document.querySelector('.solid-bar');
const closeButton = document.querySelector('.cross-button');
const sideBar = document.querySelector('.side-bar');

console.log(toggleButton);
console.log(closeButton);
console.log(sideBar);

toggleButton.addEventListener('click', () => {

    // sideBar.classList.toggle('show-side-bar');
    sideBar.classList.remove('side-bar');
    sideBar.classList.add('show-side-bar');
});

closeButton.addEventListener('click', () => {
    sideBar.classList.remove('show-side-bar');
    sideBar.classList.add('side-bar');
});
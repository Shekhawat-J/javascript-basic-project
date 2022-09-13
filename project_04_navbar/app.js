const toggle_button = document.querySelector('.toggle');
const links = document.querySelector('.links')
console.log(links);
console.log(links.classList);

toggle_button.addEventListener('click', () => {
    links.classList.toggle('links-show');
});
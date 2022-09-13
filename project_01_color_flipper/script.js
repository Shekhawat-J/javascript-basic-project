const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')
const container = document.querySelector('.container');

/**
 * 
console.log(typeof btn);
console.log(typeof color);
console.log(typeof container);

 */



btn.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    
    container.style.backgroundColor = hexColor;
    color.style.color = hexColor;
    color.textContent = hexColor;
    btn.style.backgroundColor = hexColor;
    

});

function getRandomNumber(){

    return Math.floor(Math.random()*hex.length);
}

/**
 * 
 * btn.addEventListener('click', (e) => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor);
    container.style["background-color"] = "#"+randomColor;
    color.textContent = ("#"+randomColor).toUpperCase();
    color.style["color"] = "#"+randomColor;
    // color.innerHTML = "#"+randomColor;
    btn.style["background-color"] = "#"+randomColor;
    // console.log(color.innerText)
    // container.style.background-color;
});
 */


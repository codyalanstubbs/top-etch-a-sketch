let sketchy = document.querySelector('.sketchy');

for (let i = 1; i <= (16*16); i++) {
    
    let sketchySquare = document.createElement('div');

    sketchySquare.id = i;
    sketchySquare.classList.add("square");

    sketchy.appendChild(sketchySquare);
}

let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        console.log(square);
        console.log(e);
        square.style.background = "pink";
    })
})
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

let dimensionsButton = document.querySelector('.editDimensions');
dimensionsButton.addEventListener('click', (e) => {
    
    let numberSquares = prompt("Enter the number of squares per side (max 100): ");
    checkLessThan101(numberSquares);
    
    for (let i = 1; i <= (numberSquares*numberSquares); i++) {
        sketchy.remove();
        sketchy = document.createElement('.sketchy');
        document.querySelector('body').appendChild(sketchy)

        let sketchySquare = document.createElement('div');
  
        sketchySquare.id = i;
        sketchySquare.classList.add("square");
        sketchySquare.style.width = 320 /numberSquares;
        sketchySquare.style.height = 320 /numberSquares;
    
        sketchy.appendChild(sketchySquare);
    }
})

function checkLessThan101(numberSquares) {
    if (numberSquares > 100) {
        let numberSquares = prompt(`Enter the number of squares per side (LESS THAN 101): `)
        checkLessThan101(numberSquares);
    };
}
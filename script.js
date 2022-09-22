let numberSquares = 16;
buildGrid(numberSquares);

let dimensionsButton = document.querySelector('.editDimensions');
dimensionsButton.addEventListener('click', (e) => {

    let numberSquares = prompt("Enter the number of squares per side (max 100): ");
    checkLessThan101(numberSquares);
    buildGrid(numberSquares);

})

function buildGrid(numberSquares) {

    let oldSquares = document.querySelectorAll('.square');
    if (!!oldSquares) { // If old squares exist, then remove them
        oldSquares.forEach((square) => {
            square.remove();
        })
    }
    
    // Create new squares
    for (let i = 1; i <= (numberSquares ** 2); i++) {
        sketchy = document.querySelector('div');
        sketchy.classList.add('sketchy');

        let sketchySquare = document.createElement('div');

        sketchySquare.id = i;
        sketchySquare.classList.add("square");
        sketchySquare.style.width = 320 / numberSquares + 'px';
        sketchySquare.style.height = 320 / numberSquares + 'px';

        sketchy.appendChild(sketchySquare);
    }

    // Add event listeners for coloring squares
    let newSquares = document.querySelectorAll('.square');
    newSquares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.style.background = "pink";
        })
    })
}

function checkLessThan101(numberSquares) {
    if (numberSquares > 100) {
        let numberSquares = prompt(`Enter the number of squares per side (LESS THAN 101): `)
        checkLessThan101(numberSquares);
    };
}
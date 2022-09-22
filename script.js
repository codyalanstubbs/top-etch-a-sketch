let sketchy = document.querySelector('.sketchy');

for (let i = 1; i <= (16*16); i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    sketchy.appendChild(square);
}
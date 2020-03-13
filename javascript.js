





const gridContainer = document.querySelector("#gridContainer");






/* The code that creates the divs with dom need to be looped with each iteration.
If they are declared outside of the loop, and only the appendchild action is looped,
this will simply replace the the initial div the was appended to the container.
By creating element within the loop, it creates a brand new div for appending to 
the container.
*/

function createGrid(num) {
    for (let i = 0; i < num; i++) {
    let makeBox = document.createElement('div');
    makeBox.className = 'gridBox';
    gridContainer.appendChild(makeBox);  
    }
}

createGrid(256);

/* Dynamically changes grid size based on user input after button click.
    CSS variables for the grid column and row amount is updated. The loop
    that creates DIVS is then re-iterated based on the new input.
*/
let root = document.documentElement;
let resizeNum;

document.querySelector("#resize").addEventListener("click", function() {
    resizeNum = prompt("how many rows and columns should the grid have?");
    root.style.setProperty('--colNum', resizeNum);
    root.style.setProperty('--rowNum', resizeNum);
    let newGrid = (resizeNum*resizeNum);
    console.log(newGrid);
    createGrid(newGrid);
});

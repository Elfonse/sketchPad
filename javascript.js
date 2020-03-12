




//document.getElementById("makeBox").style.width = "300px";

const gridContainer = document.querySelector("#gridContainer");






/* The code that creates the divs with dom need to be looped with each iteration.
If they are declared outside of the loop, and only the appendchild action is looped,
this will simply replace the the initial div the was appended to the container.
By creating element within the loop, it creates a brand new div for appending to 
the container.
*/

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++ ) {
        let makeBox = document.createElement("div");
        makeBox.classList.add("gridBox");
        document.getElementById("gridContainer").appendChild(makeBox);
        }
        let lineBreak = document.createElement("br");
        document.getElementById("gridContainer").appendChild(lineBreak);
    }
}

createGrid(16);


/*document.getElementById("gridContainer").appendChild(makeBox);
document.getElementById("gridContainer").appendChild(lineBreak);
gridContainer.createElement(makeBoxClone); */
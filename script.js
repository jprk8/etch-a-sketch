const container = document.querySelector("#container");
function drawGrid(size) {
    container.style.cssText = `width: 800px; height: 800px`;
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.addEventListener("mouseover", () => {
                //limit random to not generate white or close to white
                //white will white-out
                const red = Math.floor(Math.random() * 155) + 90;
                const green = Math.floor(Math.random() * 155) + 90;
                const blue = Math.floor(Math.random() * 155) + 90;
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
            });
            squareSize = 800 / size;
            square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
            column.appendChild(square);
        }
        container.appendChild(column);
    }
}

function resize() {
    let size = prompt("Enter size");
    const removeTarget = document.querySelectorAll("#container > div");
    removeTarget.forEach((item) => {
        container.removeChild(item);
    })
    drawGrid(size);
}

const resizeBtn = document.querySelector("#resizeBtn");
resizeBtn.addEventListener("click", () => { resize(); });

drawGrid(50);
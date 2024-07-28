const container = document.querySelector("#container");
function drawGrid(size) {
    gridSize = size * 4;
    container.style.cssText = `width: ${gridSize}px; height: ${gridSize}px`;
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            })
            square.style.cssText = "width: 4px; height: 4px;";
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

drawGrid(100);
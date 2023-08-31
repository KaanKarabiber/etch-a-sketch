function createGrid(dimension){
    widthHeightValue = (100 / dimension) + '%';
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container);
    for(let i = 0; i < dimension; i++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style.minHeight = widthHeightValue;
        for(let j = 0; j < dimension; j++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('cells');
            newDiv.style.width = widthHeightValue;
            newRow.appendChild(newDiv);
        }
        container.appendChild(newRow);
    }
    cellClick();
}
function removeGrid(){
    const container = document.querySelector('.container');
    container.remove();
}
function cellClick(){
    let isMousePressed = false;
    cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () =>{
            isMousePressed = true;
        });
        document.body.addEventListener('mouseup', () =>{
            isMousePressed = false;
        });
        cell.addEventListener('mousemove', (event) =>{
            if(isMousePressed){
                event.target.style.backgroundColor = 'black';
            }
        });
    });
}
const changeDimensionsButton = document.querySelector('#change-dimension');
changeDimensionsButton.addEventListener('click',() => {
    let answer = prompt('Type dimension');
    while(answer >= 100){
        answer = prompt('Please enter a number less then 101');
    }
    removeGrid();
    createGrid(answer);
})
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () =>{
    cells = document.querySelectorAll('.cells');
    cells.forEach(cell =>{
        cell.style.backgroundColor = '';
    });
});
const removeBordersButton = document.querySelector('#remove-borders');
removeBordersButton.addEventListener('click', () =>{
    cells = document.querySelectorAll('.cells');
    let removeAdd = false;
    cells.forEach(cell =>{
        if(removeBordersButton.textContent === "Remove borders"){
            cell.style.border = '0px';
            removeAdd = true;
        }
        else{
            cell.style.border = '1px solid black';
            removeAdd = false;
        }
    });
    if(removeAdd){
        removeBordersButton.textContent = 'Add borders';
    }
    else{
        removeBordersButton.textContent = 'Remove borders';
    }
});

createGrid(16);




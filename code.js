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
}
function removeGrid(){
    const container = document.querySelector('.container');
    container.remove();
}
let changeDimensionsButton = document.querySelector('button');
changeDimensionsButton.addEventListener('click',() => {
    let answer = prompt('type dimension');
    while(answer >= 100){
        answer = prompt('please enter a number less then 101');
    }
    removeGrid();
    createGrid(answer);
})

createGrid(16);




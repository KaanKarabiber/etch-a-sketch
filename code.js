function createGrid(){
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container);
    for(let i = 0; i < 16; i++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for(let j = 0; j < 16; j++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('cells');
            newRow.appendChild(newDiv);
        }
        //const container = document.getElementById('container');
        container.appendChild(newRow);
    }
}
let changeDimensionsButton = document.querySelector('button');
changeDimensionsButton.addEventListener('click',() => {
    let answer = prompt('type dimension');
    console.log(answer);
    
})
createGrid();



function createDivELement(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('cells');
            let row = document.querySelector(`.row${j + 1}`);
            row.appendChild(newDiv);
        }
    }
}
let changeDimensionsButton = document.querySelector('button');
changeDimensionsButton.addEventListener('click',() => {
    let answer = prompt('type dimension');
    console.log(answer);
    
})
createDivELement();



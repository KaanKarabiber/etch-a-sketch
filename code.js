function createDivELement(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('cells');
            let row = document.querySelector(`.row${j + 1}`);
            console.log(row);
            row.appendChild(newDiv);
        }
    }
}
createDivELement();



function createDivELement(){
    for(i = 0; i < 16; i++){
        const newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
    }
}
createDivELement();
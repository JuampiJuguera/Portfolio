
function changeColor(hola){
    hola.style.color = 'red';
}


function hideMenu(){
    let displayMenu = document.getElementById('id__links')
    if(displayMenu.style.display === 'none'){
        displayMenu.style.display = 'flex'
    }
    else{
        displayMenu.style.display = 'none';
    }
}

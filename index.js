
function hideMenu(){
    const displayMenu = document.getElementById('id__links')
    if(displayMenu.style.display === 'none'){
        displayMenu.style.display = 'flex'
        return
    }
        displayMenu.style.display = 'none';
}

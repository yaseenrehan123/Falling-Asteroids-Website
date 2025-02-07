
//#region Navbar
const navTemplate = ``

const navContainer = document.querySelector('.nav-container');
navContainer.innerHTML = navTemplate;
const sideBar = document.querySelector('.side-bar');

function showSideBar(){
    
    enableObjectInlineBlock(sideBar);
}

function hideSideBar(){
    disableObject(sideBar);
}

//#endregion

//#region General Functions

function enableObjectFlex(object){
    object.style.display = 'flex';
}
function enableObjectInlineBlock(object){
    object.style.display = 'inline-block';
}
function disableObject(object){
    object.style.display = 'none';
}
//#endregion
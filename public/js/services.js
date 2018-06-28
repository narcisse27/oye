function activeThisItem(item){
    item.classList.remove('hidden');
    item.classList.add('active');
}
function hideThisItem(item){
    item.classList.remove('active');
    item.classList.add('hidden');
}
function activeTransition(){
    var item = document.getElementById('service-text-transition');
    activeThisItem(item);
}
function hideTransition(){
    var item = document.getElementById('service-text-transition');
    hideThisItem(item);
}
function mantraTransition(position){
    var height = document.getElementById("mantras-list").offsetHeight;
    var nodesArray = [].slice.call(document.querySelectorAll("#mantras-list"));
    var arr = Array.prototype.slice.call( nodesArray[0].children )
    arr.map( (item) => {
         item.style.position = "relative";
         item.style.bottom = (position) * height + "px";
         item.style.height = height+"px";
    });
}
function disableButtons(){
    document.getElementsByClassName('scene-nav').disabled = true;
}
function enableButtons(){
    document.getElementsByClassName('scene-nav').disabled = false;
}
function goToNextItem(){
    setTimeout(activeTransition, 0);
    disableButtons;
    document.getElementById("riffle-next-image").click();
    setTimeout(changeNextItem, 500);
    setTimeout(hideTransition, 700);
    refreshLines();
    enableButtons;
}
function goToPreviousItem(){
    setTimeout(activeTransition, 0);
    disableButtons;
    document.getElementById("riffle-previous-image").click();
    setTimeout(changePreviousItem, 500);
    setTimeout(hideTransition, 700);
    enableButtons;
}
function refreshLines(itemToHide, itemToActive){
    var items = $('.slide-position');
    for(var i = 0; i <= items[itemToHide].children.length; i++){
        items[itemToHide].children[i].classList.remove('active');
        items[itemToHide].children[i].classList.add('hidden');
        items[itemToActive].children[i].classList.remove('hidden');
        items[itemToActive].children[i].classList.add('active');
    }
}
function changeNextItem(){
    let allTexts = document.getElementsByClassName('service-text');
    let length = allTexts.length;
    let nextItemId = 0;
    let servicesLines = document.getElementsByClassName('slide-position');
    let state = false;
    let i = 0;
    while(state === false){
        if(allTexts[i].classList.contains('active')){
            hideThisItem(allTexts[i]);
            var nextItem = (i+1 >= length) ? (0) : i+1;
            mantraTransition(nextItem);
            activeThisItem(allTexts[nextItem]);
            refreshLines(i, nextItem);
            state = true;
        }
        i++;
    }
    return nextItemId;
}
function changePreviousItem(){
    var allTexts = document.getElementsByClassName('service-text');
    var servicesLines = document.getElementsByClassName('slide-position');
    var length = allTexts.length;
    var state = false;
    var i = 0;
    while(state === false){
        if(allTexts[i].classList.contains('active')){
            hideThisItem(allTexts[i]);
            let prevItem = (i-1 < 0) ? (length-1) : (i-1);
            mantraTransition(prevItem);
            activeThisItem(allTexts[prevItem]);
            refreshLines(i, prevItem);
            state = true;
        }
        i++;
    }
}

console.log("Main script loaded");
function logouti(){
    sessionStorage.clear();
    window.location.reload();
}


function openpopup(loaddata){
    document.getElementById(loaddata).style.display = "flex";
    
}
function closepopup(loaddata){
    document.getElementById(loaddata).style.display = "none";
}   
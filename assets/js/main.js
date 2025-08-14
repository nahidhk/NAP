console.log("Main script loaded");

function logouti() {
    sessionStorage.clear();
    window.location.reload();
}

function urlpara() {
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');
    const type = params.get('type');
    popupins({ "id": id, "type": type });
}
urlpara();

function popupins(datain) {
    document.getElementById(datain.id).style.display = datain.type;

}
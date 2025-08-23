console.log("Main script loaded");

function logouti() {
    sessionStorage.clear();
    window.location.reload();
}

const params = new URLSearchParams(window.location.search);

const id = params.get('id');
const type = params.get('type');


if (id && type) {
    popupins({ "id": id, "type": type });
} else {
    console.log("URL এ id বা type পাওয়া যায়নি");
}


function popupins(datain) {
    document.getElementById(datain.id).style.display = datain.type;

}




function onloadmy() {
    fetch('/components/call/call.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dataContainer');

            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

               
                const obj = {
                    id: item.btn_name,
                    url: item.componen
                };

                card.innerHTML = `
                    <div class="minbtn" id="active-${item.btn_name}" onclick='callurlx(${JSON.stringify(obj)})'>
                        <i class="${item.btn_icon}"></i>&nbsp;${item.btn_name}
                    </div>
                `;

                console.log("Loaded the mySQL server data");
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}
onloadmy();

function callurlx(urlData) {
    window.location.href = "?f=" + encodeURIComponent(urlData.url) + "&";
    const mybtn = document.getElementById("active-"+urlData.id);
    mybtn.innerHTML=`<i class="fa-solid fa-hourglass fa-spin-pulse"></i>&nbsp;Loading....`
}

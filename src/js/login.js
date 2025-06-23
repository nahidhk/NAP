// Install python and config JSON !
console.log("Login script loaded");
const youlogin = sessionStorage.getItem("login");
if (youlogin === "true") {

} else {
alert("You are not logged in! Please log in to continue.");
window.location.href = "/";
}


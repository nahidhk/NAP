function showpass() {
    var passwordinputTag = document.getElementsByClassName("password")[0];
    var passiconTag = document.getElementsByClassName("passicon")[0];
    if (passwordinputTag.type === "password") {
        passwordinputTag.type = "text";
        passiconTag.classList.remove("fa-eye");
        passiconTag.classList.add("fa-eye-slash");
    } else {
        passwordinputTag.type = "password";
        passiconTag.classList.remove("fa-eye-slash");
        passiconTag.classList.add("fa-eye");
    }
}

const username = document.getElementById("username");
const key = document.getElementById("key");








function login() {
    const loginform = document.getElementById("loginform");
    const mypassword = document.getElementById("password").value;

    if (username.value === dBusername && password === dBpassword && key.value === dBtoken) {
        alert("Login successful");
        // Redirect to another page or perform any other action
    } else {
        alert("Login failed");
    }

}
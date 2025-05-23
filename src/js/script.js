function showpass(){
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
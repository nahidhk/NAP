// Show/Hide Password
function showpass() {
    var passwordinputTag = document.getElementsByClassName("password")[0];
    var passiconTag = document.getElementsByClassName("passicon")[0];
    if (passwordinputTag.type === "password") {
        passwordinputTag.type = "text";
        passiconTag.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordinputTag.type = "password";
        passiconTag.classList.replace("fa-eye-slash", "fa-eye");
    }
}

// DOM elements
const username = document.getElementById("username");
const key = document.getElementById("key");

// Store credentials globally
let dBusername = "";
let dBpassword = "";
let dBtoken = "";

// Load config.json
async function loadjson() {
    try {
        const response = await fetch('/config.json');
        const data = await response.json();

        if (data && data.length > 0) {
            dBusername = data[0].username;
            dBpassword = data[0].password;
            dBtoken = data[0].token;

            // Optional: Autofill fields
            username.value = dBusername;
            key.value = dBtoken;
        } else {
            console.warn("No data in config.json");
        }
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

// Login function
function loginapp() {
    const inputUser = username.value;
    const inputPass = document.getElementById("password").value;
    const inputToken = key.value;

    if (
        inputUser === dBusername &&
        inputPass === dBpassword &&
        inputToken === dBtoken
    ) {
        document.getElementById("loginform").method = "GET";

        document.getElementById("loginform").action = "dash";

        document.getElementById("loginform").submit();
        sessionStorage.setItem("login", true);
        sessionStorage.setItem("username", inputUser);
        sessionStorage.setItem("token", inputToken);
        sessionStorage.setItem("password", inputPass);

    } else {
        alert("❌ Login Failed!");
    }
}

// Call loadjson on page load
window.onload = loadjson;


// install server tools and css js auto version load
function installServerTools() {
    const serverTools = document.getElementById("server-tools");
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "/css/style.css?v=" + new Date().getTime();
    serverTools.appendChild(cssLink);

    const jsScript = document.createElement("script");
    jsScript.src = "/js/server.js?v=" + new Date().getTime();
    serverTools.appendChild(jsScript);
}
// Call installServerTools on page load
window.onload = function () {
    loadjson();
    installServerTools();
}
// Add event listener for Enter key
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        loginapp(); // Call the login function
    }
});
// Add event listener for the login button
document.getElementById("login-button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission
    loginapp(); // Call the login function
});
// click enter key to submit form
document.getElementById("loginform").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        loginapp(); // Call the login function
    }
});
// Add event listener for the password input field
document.getElementById("password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        loginapp(); // Call the login function
    }
});
// Add event listener for the key input field
document.getElementById("key").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        loginapp(); // Call the login function
    }
});
// Add event listener for the username input field
document.getElementById("username").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        loginapp(); // Call the login function
    }
});

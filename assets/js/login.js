// Install python and config JSON !
console.log("Login script loaded");
const youlogin = sessionStorage.getItem("login");
if (youlogin === "true") {

} else {
document.write(`
    <div style=" text-align: center; background-color: #fff; color: black; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 9999; position: fixed; width: 100%;">
       <code>
       [Requst error] <br>
       [login and try agin] <br>
       <a href="/">Login agin</a>
       </code>
    </div>
`)

}


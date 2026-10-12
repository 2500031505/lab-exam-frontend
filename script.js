
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";

        document.getElementById("message").innerText =
            "Welcome, " + username + "!";
    
}
function logout() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

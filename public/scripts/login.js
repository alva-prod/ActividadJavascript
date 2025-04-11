function validate() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(email === "admin@admin" && password === "user") {
        console.log("Successful Login");
        window.location.href = "public/pages/profile.html"; // Redirige al perfil
    } else {
        alert("Login failed");
    }
}

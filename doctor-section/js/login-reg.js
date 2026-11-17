// Doctor Login
function loginDoctor() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("loginMessage");

    if (email == "" || password == "") {
        message.innerHTML = "Please enter email and password.";
        return false;
    } else {
        return true;
    }
}

// Doctor Registration
function registerDoctor() {
    let name = document.getElementById("doctorName").value;
    let email = document.getElementById("registerEmail").value;
    let department = document.getElementById("department").value;
    let password = document.getElementById("registerPassword").value;
    let message = document.getElementById("registerMessage");

    if (name == "" || email == "" || department == "" || password == "") {
        message.innerHTML = "Please fill in all fields.";
        return false;
    } else if (password.length < 6) {
        message.innerHTML = "Password must be at least 6 characters.";
        return false;
    } else {
        alert("Registration successful. Please login.");
        return true;
    }
}

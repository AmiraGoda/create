function validateData() {
    var user = document.getElementById("user").value;

    var email = document.getElementById("email").value;

    var pass = document.getElementById("pass").value;

    var confirm = document.getElementById("confirm").value;

    var result = document.getElementById("result");

    result.setAttribute("class", "text-center alert theme-danger ")

    if (user == "" && email == "" && pass == "" && confirm == "") {
        result.innerHTML = "Enter Data";
        return false;
    } else if (user.length < 3 || user.length > 15) {
        result.innerHTML = "Enter 3-15 Character in Name";
        return false;
    } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com") == -1) {
        result.innerHTML = "Enter Valid Email";
        return false;
    } else if (pass.length < 8) {
        result.innerHTML = "Weak assword";
        return false;
    } else if (pass != confirm) {
        result.innerHTML = "Password Not Match";
        return false;
    }




}
// var form =
//     document.querySelector("form");
// form.addEventListener("submit ", function(event) {
//     event.preventDefault();
//     if
// })
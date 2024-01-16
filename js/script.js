const showPopupBtn = document.querySelector(".createAccount");
const closePopupBtn = document.querySelector(".closeButton");
const formPopup = document.querySelector(".loginSignupForm");
const loginSignupLink = document.querySelectorAll(".form-box .button-link a");
//show form
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// close form
closePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "login-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});

// const formData = document.getElementById("formData").value;

function formData() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("cPassword").value;

    if(firstName, lastName, email, password, cPassword){
        // window.location.assign("logged.html");
        alert("Register Successfully");
        // document.writeln("your name" + firstName);
    }
};
function loginData() {
    var emailId = document.getElementById("emailId").value;
    var passwords = document.getElementById("passwordLogin").value;

    if(emailId, passwords){
        // window.location.assign("logged.html");
        alert("Login Successfully");
    }
}
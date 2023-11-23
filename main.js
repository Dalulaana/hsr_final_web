$(document).ready(function() {
    $('#showPassword').click(function() {
      var passwordInput = $('#passwordi');
      passwordInput.attr('type', passwordInput.attr('type') === 'password' ? 'text' : 'password');
    });
  }); //show pwd jquery

//form validation
document.getElementById('reg').addEventListener('input', function() {
    validateForm();
});

function validateForm() {
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('passwordi').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (username.trim() === "") {
        usernameError.textContent = "Введите электронную почту";
    }

    if (password.trim() === "") {
        passwordError.textContent = "Требуется пароль. ";
    }

    if (confirmPassword.trim() === "") {
        confirmPasswordError.textContent = "Требуется подтвердить пароль";
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Пароли не совпадают";
    }

    const registerButton = document.getElementById('submitButton');
            registerButton.disabled = (username.trim() === "" && password.trim() === "" && confirmPassword.trim() === "", username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "");
 }

//multiple steps form

var Form1 = document.getElementById("reg");
var Form2 = document.getElementById("reg2");

var Next = document.getElementById("submitButton");
var Back = document.getElementById("backButton");

var progress = document.getElementById("progress");

Next.onclick = function() {
  Form1.style.left = "-450px";
  Form2.style.left = "26px";
  progress.style.width = "400px"
}
Back.onclick = function() {
  Form1.style.left = "26px";
  Form2.style.left = "450px";
  progress.style.width = "200px"
}

//modal box
let popup = document.getElementById("popup");

function openPopup() {
  event.preventDefault();
  popup.classList.add("open-popup");
  popup.style.visibility = "visible";
}
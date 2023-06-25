const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const pass = upperCase + lowerCase + number;

function passGen() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (length > password.length) {
        password += pass[Math.floor(Math.random() * pass.length)];
    }

    passwordBox.value = password;
}

function copyPass() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
}

document.getElementById("generatePass").addEventListener("click",passGen);
document.getElementById("passCopy").addEventListener("click",copyPass);

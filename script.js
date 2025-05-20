const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("passwordConfirmation");
const gmailDomain = "@gmail.com";
const emailDomain = "@email.com";
const yahoDomain = "@yahoo.com";
const outlookDomain = "@outlook.com";
const hotmailDomain = "@hotmail.com";
const icloudDomain = "@icloud.com";
const mailDomain = "@mail.com";



function signUp() {
    if(name.value && (email.value.includes(gmailDomain) || email.value.includes(emailDomain) || email.value.includes(yahoDomain) || email.value.includes(outlookDomain) || email.value.includes(hotmailDomain) || email.value.includes(icloudDomain) || email.value.includes(mailDomain)) && password.value === confirmedPassword.value) {

        localStorage.setItem("userName", email.value)
        localStorage.setItem("userPassword", password.value)
        localStorage.setItem("accountCreated", "true");

        name.value = "";
        email.value = "";
        password.value = "";
        confirmedPassword.value = "";

        window.location.href = "signin.html";

    }
    else if (localStorage.getItem("userName") === email.value) {
        document.getElementById("signUpDisplay").innerHTML = "Account already exists"
    }
    else if(!name.value && email.value && password.value === confirmedPassword.value) {
        document.getElementById("signUpDisplay").innerHTML = "Please enter your name";
    }
    else if(name.value && !email.value && password.value === confirmedPassword.value) {
        document.getElementById("signUpDisplay").innerHTML = "Please enter your email";
    }
    else if(name.value && email.value && password.value === "") {
        document.getElementById("signUpDisplay").innerHTML = "Please enter your password";
    }
    else if(name.value && email.value && password.value !== confirmedPassword.value) {
        document.getElementById("signUpDisplay").innerHTML = "Please enter your matching passwords";

        password.value = "";
        confirmedPassword.value = "";
    }
    else if(!email.value.includes(gmailDomain) || !email.value.includes(emailDomain) || !email.value.includes(yahoDomain) || !email.value.includes(outlookDomain) || !email.value.includes(hotmailDomain) || !email.value.includes(icloudDomain) || !email.value.includes(mailDomain)) {
        document.getElementById("signUpDisplay").innerHTML = "Please enter a valid email";

        email.value = "";
    }
    else{
        document.getElementById("signUpDisplay").innerHTML = "Your account could not be created! Please try again";

        name.value = "";
        email.value = "";
        password.value = "";
        confirmedPassword.value = "";
    }
}
if (localStorage.getItem("accountCreated") === "true") {
      document.getElementById("signInDisplay").innerHTML = "Account created successfully. Please sign in.";
      localStorage.removeItem("accountCreated");
    }

    function signIn() {

      const userName = document.getElementById("email").value;
      const userPassword = document.getElementById("password").value;

      const savedUsername = localStorage.getItem("userName");
      const savedPassword = localStorage.getItem("userPassword");

      if (userName === savedUsername && userPassword === savedPassword) {
        document.getElementById("signInDisplay").innerText = "Sign in successful!";

        email.value = "";
        password.value = "";
      }
      else if (userName !== savedUsername) {
        document.getElementById("signInDisplay").innerText = "Account not recognized";
      }
      else if (userPassword !== savedPassword) {
        document.getElementById("signInDisplay").innerText = "Incorrect password";
      }
      else {
        document.getElementById("signInDisplay").innerText = "Please try again";

        email.value = "";
        password.value = "";
      }
}

function pswrd() {
    if(email.value.includes(gmailDomain) || email.value.includes(emailDomain) || email.value.includes(yahoDomain) || email.value.includes(outlookDomain) || email.value.includes(hotmailDomain) || email.value.includes(icloudDomain) || email.value.includes(mailDomain)) {
        document.getElementById("pswrdDisplay").innerHTML = "We’ve sent a password reset link to " + email.value;
    }
    else if (email.value === "") {
        document.getElementById("pswrdDisplay").innerHTML =  "Please enter your email"
    }
    else {
        document.getElementById("pswrdDisplay").innerHTML =  "Please try again"
    }
}
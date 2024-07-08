let email = document.getElementById("inputEmail4");
let password = document.getElementById("inputPassword4");
let phone = document.getElementById("phone");
let signUp = document.getElementById("signUP");

let emailValidate = /\w+(\d+)?@(gmail)\.(com)/gi;
let passwordValidate =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
let phoneValidate = /(\(+20\))?\s?0?\d{3}\-?\d{3}\-?\d{4}/;

signUp.onsubmit = function (event) {
  // Validate email
  if (emailValidate.test(email.value) === false) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a valid Gmail address.",
    });
    return false;
  }

  // Validate password
  if (!passwordValidate.test(password.value)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Password",
      text: "Password must be at least 8 characters long, contain at least one letter, one digit, and one special character.",
    });
    return false;
  }

  // Validate phone number
  if (!phoneValidate.test(phone.value)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Phone Number",
      text: "Please enter a valid phone number. Format: (+20) 0xxx-xxx-xxxx.",
    });
    return false;
  }

  return true;
};

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordError = document.getElementById("passwordError");
let matchError = document.getElementById("matchError");
let form = document.getElementById("passwordForm");
let usernameInput = document.getElementById("username");
let res = document.getElementById("res");

let emailInput = document.getElementById("email");
let resEmail = document.getElementById("res-email");

emailInput.addEventListener("input", validateEmail);

function validateEmail() {
  let email = emailInput.value;
  let emailRegex = /^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,5}$/;

  if (!emailRegex.test(email)) {
    resEmail.innerHTML = `<p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">ელფოსტის მისამართი არასწორია!</p>`;
  } else {
    resEmail.innerHTML = "";
  }
}

usernameInput.addEventListener("input", validateUsername);

function validateUsername() {
  let username = usernameInput.value;
  let usernameRegex = /^(?=.*[A-z])(?=.*\d)[A-z\d]{5,}$/; // შეცდომის გამოსწორება

  if (!usernameRegex.test(username)) {
    res.innerHTML = `<p style="color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">უნდა შეიცავდეს მინიმუმ ხუთ სიმბოლოს (მათშორის ბოლოში ციფრს) </p>`;
  } else {
    res.innerHTML = "";
  }
}

// Validate password strength
function validatePasswordStrength() {
  let passwordValue = password.value;
  let hasNumber =
    /^[A-Z](?=.*[A-z])(?=.*\d)(?=.*[@!#$%?&*])[A-z\d@!#$%?&*]{8,}$/.test(
      passwordValue
    );
  let hasMinLength = passwordValue.length >= 8;

  if (hasNumber && hasMinLength) {
    passwordError.style.display = "none";
    return true;
  } else {
    passwordError.style.display = "block";
    return false;
  }
}

// Validate password match
function validatePasswordsMatch() {
  if (password.value === confirmPassword.value) {
    matchError.style.display = "none";
    return true;
  } else {
    matchError.style.display = "block";
    return false;
  }
}

// Attach input validation events
password.addEventListener("input", validatePasswordStrength);
confirmPassword.addEventListener("input", validatePasswordsMatch);

// Form submission validation
form.addEventListener("submit", (e) => {
  let isPasswordStrong = validatePasswordStrength();
  let doPasswordsMatch = validatePasswordsMatch();

  if (!isPasswordStrong || !doPasswordsMatch) {
    e.preventDefault();
  }
});

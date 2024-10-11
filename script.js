document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("registration-form");
  let feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("The username is less than 3 characters");
    }
    if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      messages.push("Email must include both '@' and '.' characters");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters");
    }

    feedbackDiv.style.display = "block";
    if (isValid == true) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});

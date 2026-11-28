const form = document.getElementById("feedbackForm");
const emailInput = document.getElementById("email");
const emailError = document.querySelector(".box .error");
const transmissionBtn = document.getElementById("transmissionBtn");

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("invalid");
  if (emailError) {
    emailError.textContent = "";
    emailError.style.color = "#ff6b6b";
  }
});

function validateAtSymbol() {
  const value = emailInput.value.trim();

  if (!value.includes("@")) {
    emailInput.classList.add("invalid");
    if (emailError) {
      emailError.style.color = "#ff6b6b";
      emailError.textContent = "* Please include an '@' in your email address";
    }
  } else {
    emailInput.classList.remove("invalid");
    if (emailError) {
      emailError.style.color = "#7ae582";
      emailError.textContent = "Thanks! Your feedback was validated (demo form).";
    }
  }
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateAtSymbol();
  });
}

if (transmissionBtn) {
  transmissionBtn.addEventListener("click", () => {
    validateAtSymbol();
  });
}

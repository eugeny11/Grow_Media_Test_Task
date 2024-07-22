document
  .getElementById("businessForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => (message.textContent = ""));

    const name = document.getElementById("name").value.trim();
    if (name === "") {
      isValid = false;
      const nameError = document.getElementById("nameError");
      nameError.textContent = "Пожалуйста, введите имя.";
      nameError.classList.add("show");
    }

    const email = document.getElementById("email").value.trim();
    if (email === "" || !email.includes("@")) {
      isValid = false;
      const emailError = document.getElementById("emailError");
      emailError.textContent = "Пожалуйста, введите корректный email.";
      emailError.classList.add("show");
    }

    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\+?[\d\s\-\(\)]+$/;
    const sanitizedPhone = phone.replace(/[\s\(\)\-]+/g, "");
    if (
      phone === "" ||
      !phonePattern.test(phone) ||
      sanitizedPhone.length < 7
    ) {
      isValid = false;
      const phoneError = document.getElementById("phoneError");
      phoneError.textContent = "Пожалуйста, введите корректный телефон.";
      phoneError.classList.add("show");
    }

    const revenue = document.getElementById("revenue").value.trim();
    const revenuePattern = /^\d+\.\d+$/;
    if (revenue === "" || !revenuePattern.test(revenue)) {
      isValid = false;
      const revenueError = document.getElementById("revenueError");
      revenueError.textContent =
        "Пожалуйста, введите корректный оборот (число с плавающей точкой).";
      revenueError.classList.add("show");
    }

    const industry = document.getElementById("industry").value;
    if (industry === "") {
      isValid = false;
      const industryError = document.getElementById("industryError");
      industryError.textContent = "Пожалуйста, выберите индустрию.";
      industryError.classList.add("show");
    }

    const agreement = document.getElementById("agreement").checked;
    if (!agreement) {
      isValid = false;
      const agreementError = document.getElementById("agreementError");
      agreementError.textContent = "Пожалуйста, примите правила сервиса.";
      agreementError.classList.add("show");
    }

    if (isValid) {
      showModal("Спасибо! Ваша заявка принята.");
      clearForm();
    }
  });

function showModal(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;
  modal.style.display = "block";

  document.getElementById("ok-btn").onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  document.querySelector(".close-btn").onclick = function () {
    modal.style.display = "none";
  };
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("revenue").value = "";
  document.getElementById("industry").value = "";
  document.getElementById("agreement").checked = false;
}

function setupFieldValidation() {
  const fields = document.querySelectorAll("input, select");

  fields.forEach((field) => {
    field.addEventListener("input", function () {
      const errorElement = document.getElementById(this.id + "Error");
      if (errorElement) {
        errorElement.classList.remove("show");
        errorElement.textContent = "";
      }
    });
  });
}

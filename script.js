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
      document.getElementById("nameError").textContent =
        "Пожалуйста, введите имя.";
    }

    const email = document.getElementById("email").value.trim();
    if (email === "" || !email.includes("@")) {
      isValid = false;
      document.getElementById("emailError").textContent =
        "Пожалуйста, введите корректный email.";
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
      document.getElementById("phoneError").textContent =
        "Пожалуйста, введите корректный телефон.";
    }

    const revenue = document.getElementById("revenue").value.trim();
    const revenuePattern = /^\d+\.\d+$/;
    if (revenue === "" || !revenuePattern.test(revenue)) {
      isValid = false;
      document.getElementById("revenueError").textContent =
        "Пожалуйста, введите корректный оборот (число с плавающей точкой).";
    }

    const industry = document.getElementById("industry").value;
    if (industry === "") {
      isValid = false;
      document.getElementById("industryError").textContent =
        "Пожалуйста, выберите индустрию.";
    }

    const agreement = document.getElementById("agreement").checked;
    if (!agreement) {
      isValid = false;
      document.getElementById("agreementError").textContent =
        "Пожалуйста, примите правила сервиса.";
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

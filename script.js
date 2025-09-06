// ============================
// Interactive Web Page Script
// ============================

// 1. Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Character Counter for Message
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", () => {
  let currentLength = messageInput.value.length;
  charCount.textContent = `${currentLength}/200 characters`;
  
  // Limit to 200 characters
  if (currentLength > 200) {
    messageInput.value = messageInput.value.slice(0, 200);
    charCount.textContent = "200/200 characters (limit reached)";
  }
});

// 3. Reveal Offer on Link Click
const revealLink = document.getElementById("revealLink");
const offerText = document.getElementById("offerText");

revealLink.addEventListener("click", (e) => {
  e.preventDefault(); // prevent actual link navigation
  offerText.style.display = "block";
});

// 4. Custom Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = messageInput.value.trim();

  // Custom validation rules
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "⚠️ All fields are required.";
    formMessage.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = "⚠️ Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (message.length < 10) {
    formMessage.textContent = "⚠️ Message must be at least 10 characters.";
    formMessage.style.color = "red";
    return;
  }

  // Success
  formMessage.textContent = "✅ Form submitted successfully!";
  formMessage.style.color = "green";
  form.reset();
  charCount.textContent = "0/200 characters"; // reset counter
});

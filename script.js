// ==========================
// Part 1: Event Handling
// ==========================

// Show/Hide Book List
const toggleBooksBtn = document.getElementById("toggleBooks");
const bookList = document.getElementById("bookList");

toggleBooksBtn.addEventListener("click", () => {
  bookList.classList.toggle("hidden");
});

// Highlight book on hover
const books = document.querySelectorAll(".book");
books.forEach(book => {
  book.addEventListener("mouseover", () => {
    book.style.color = "blue";
  });
  book.addEventListener("mouseout", () => {
    book.style.color = "black";
  });
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Light/Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Book Counter Game
let count = 0;
const increaseBtn = document.getElementById("increaseCount");
const resetBtn = document.getElementById("resetCount");
const countDisplay = document.getElementById("bookCount");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = `Books read: ${count}`;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = `Books read: ${count}`;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ==========================
// Part 3: Form Validation
// ==========================

const form = document.getElementById("libraryForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email Validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password Validation (min 6 chars)
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Category Validation
  const category = document.getElementById("category").value.trim();
  if (category === "") {
    document.getElementById("categoryError").textContent = "Please enter a favorite category.";
    valid = false;
  } else {
    document.getElementById("categoryError").textContent = "";
  }

  // Success Message
  if (valid) {
    document.getElementById("formSuccess").textContent = "🎉 Membership form submitted successfully!";
    form.reset();
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});

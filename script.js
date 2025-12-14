document.addEventListener("DOMContentLoaded", function () {

  const roleText = document.getElementById("role");
  const changeRoleBtn = document.getElementById("changeRoleBtn");
  const themeBtn = document.getElementById("themeBtn");
  const editJobBtn = document.getElementById("editJobBtn");
  const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
  const skillsSection = document.getElementById("skillsSection");
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const messageInput = document.getElementById("message");
  const formMsg = document.getElementById("formMsg");
  const sendBtn = document.getElementById("sendBtn");
  const counter = document.getElementById("counter");
  const dateDisplay = document.getElementById("dateDisplay");
  const greeting = document.getElementById("greeting");

  function styleButton(btn, bgColor, hoverColor) {
    if (!btn) return;
    btn.style.backgroundColor = bgColor;
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "10px 22px";
    btn.style.fontSize = "14px";
    btn.style.fontWeight = "600";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
    btn.style.transition = "all 0.3s ease";

    btn.addEventListener("mouseenter", function () {
      btn.style.backgroundColor = hoverColor;
      btn.style.transform = "translateY(-2px)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.backgroundColor = bgColor;
      btn.style.transform = "translateY(0)";
    });
  }

  // Apply button styles
  styleButton(changeRoleBtn, "#6b7280", "#4b5563");
  styleButton(sendBtn, "#2563eb", "#1e40af");
  styleButton(themeBtn, "#f59e0b", "#b45309");
  styleButton(editJobBtn, "#10b981", "#047857");
  styleButton(toggleSkillsBtn, "#ef4444", "#b91c1c");

  // Change role
  changeRoleBtn.addEventListener("click", function () {
    roleText.textContent = roleText.textContent === "Web Developer" ? "Front-End Developer" : "Web Developer";
  });

  // Dark/light mode
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Edit job title
  editJobBtn.addEventListener("click", function () {
    const newTitle = prompt("Enter new job title:", roleText.textContent);
    if (newTitle !== null && newTitle.trim() !== "") {
      roleText.textContent = newTitle.trim();
    }
  });

  // Show/hide skills
  toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
      toggleSkillsBtn.textContent = "Hide Skills";
    } else {
      skillsSection.style.display = "none";
      toggleSkillsBtn.textContent = "Show Skills";
    }
  });

  // Live character counter
  messageInput.addEventListener("input", function () {
    const remaining = 200 - messageInput.value.length;
    counter.textContent = remaining;
  });

  // Form validation
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
      formMsg.style.color = "red";
      formMsg.textContent = "Please fill in all fields.";
    } else {
      formMsg.style.color = "green";
      formMsg.textContent = "Message sent successfully!";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      counter.textContent = "200";
    }
  });

  // Greeting based on time
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }

  // Display today's date
  const today = new Date();
  dateDisplay.textContent = today.toDateString();
});

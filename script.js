
let animationActive = false; // Global Scope Variable

// Function with parameters & return value
function toggleAnimation(elementId, start) {
  let element = document.getElementById(elementId);
  if (start) {
    element.classList.add("animate");
    return "Animation Started";
  } else {
    element.classList.remove("animate");
    return "Animation Stopped";
  }
}

// Function demonstrating local scope
function showPopup() {
  let popup = document.getElementById("popup"); // Local Scope
  popup.classList.remove("hidden");
}

// Function to close popup
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// Event Listeners (Part 3: CSS + JS Integration)
document.getElementById("startBtn").addEventListener("click", () => {
  let message = toggleAnimation("animate-box", true);
  console.log(message);
  animationActive = true;
  showPopup();
});

document.getElementById("stopBtn").addEventListener("click", () => {
  let message = toggleAnimation("animate-box", false);
  console.log(message);
  animationActive = false;
});

document.getElementById("closePopup").addEventListener("click", closePopup);

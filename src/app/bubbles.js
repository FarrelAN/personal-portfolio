document.addEventListener("DOMContentLoaded", function () {
  // Create bubble
  function createBubble(e) {
    const bubble = document.createElement("div");
    bubble.className = "interactive";
    document.body.appendChild(bubble);

    // Update bubble position
    bubble.style.left = e.pageX + "px";
    bubble.style.top = e.pageY + "px";

    // Remove bubble after animation
    setTimeout(() => {
      bubble.remove();
    }, 2000); // Adjust the timeout duration as needed
  }

  // Attach event listener for mouse movement
  document.addEventListener("mousemove", createBubble);
});

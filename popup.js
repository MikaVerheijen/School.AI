document.getElementById("humanizeBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value.trim();
  const outputArea = document.getElementById("outputText");

  if (!input) {
    outputArea.value = "Please paste some text first!";
    return;
  }

  
  const fakeOutputs = [
    "Here’s a simpler version that sounds more natural and less robotic.",
    "This sounds more like something a real student would write.",
    "I reworded it so it doesn't look AI-generated anymore.",
    "Simplified, cleaner, and safe to hand in now.",
    "Now it sounds like you actually did your homework 😎"
  ];

  
  const randomResponse =
    fakeOutputs[Math.floor(Math.random() * fakeOutputs.length)];

  
  outputArea.value = "Rewriting...";
  setTimeout(() => {
    outputArea.value = `${randomResponse}\n\n"${input}"`;
  }, 1200);
});
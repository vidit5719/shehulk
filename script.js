const scene = document.getElementById("scene");
const character = document.getElementById("character");
const transformBtn = document.getElementById("transformBtn");
const resetBtn = document.getElementById("resetBtn");
const caption = document.getElementById("caption");

let busy = false;

transformBtn.addEventListener("click", () => {
  if (busy || scene.classList.contains("transformed")) return;

  busy = true;
  scene.classList.remove("transformed");
  scene.classList.add("transforming");
  caption.textContent = "TRANSFORMING...";

  setTimeout(() => {
    scene.classList.add("transformed");
    scene.classList.remove("transforming");
    caption.textContent = "SHE HULK";
    busy = false;
  }, 3400);
});

resetBtn.addEventListener("click", () => {
  if (busy) return;
  scene.classList.remove("transforming", "transformed");
  caption.textContent = "READY?";
});

// Allow Space/Enter to transform.
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    transformBtn.click();
  }
});

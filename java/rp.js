const claimButton = document.getElementById("claim");

claimButton.addEventListener("click", function() {
  alert("Claiming reward...");
  document.getElementsByClassName("progress-text")[0].innerHTML = "Your XP: <strong>400</strong>";
  document.getElementsByClassName("progress-left")[0].innerHTML = "Next Tier in: <strong>0 XP</strong>";
  const pBS = document.querySelector(".progress-bar span");
  pBS.style.width = "100%";
});



const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 150; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 1 + 0.5
    });
  }
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "pink";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
  }
  ctx.fill();
  moveSnow();
}

function moveSnow() {
  for (let flake of snowflakes) {
    flake.y += flake.d;
    if (flake.y > canvas.height) {
      flake.y = 0;
      flake.x = Math.random() * canvas.width;
    }
  }
}

createSnowflakes();
setInterval(drawSnow, 30);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

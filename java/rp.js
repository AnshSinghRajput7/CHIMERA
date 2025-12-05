const claimButton = document.getElementById("claim");

claimButton.addEventListener("click", function() {
  alert("Claiming reward...");
  document.getElementsByClassName("progress-text")[0].innerHTML = "Your XP: <strong>400</strong>";
  document.getElementsByClassName("progress-left")[0].innerHTML = "Next Tier in: <strong>0 XP</strong>";
  const pBS = document.querySelector(".progress-bar span");
  pBS.style.width = "100%";
});

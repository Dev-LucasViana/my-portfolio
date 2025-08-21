const curso1 = document.querySelector(".course-1");
const desc1 = document.querySelector(".desc-1");
const curso2 = document.querySelector(".course-2");
const desc2 = document.querySelector(".desc-2");
const abrir1 = document.querySelector("#abrir1");
const abrir2 = document.querySelector("#abrir2");

function click1() {
  if (desc1.style.display === "none" || desc1.style.display === "") {
    desc1.style.display = "flex";
    abrir1.className = "fa-solid fa-angle-down";
  } else {
    desc1.style.display = "none";
    abrir1.className = "fa-solid fa-angle-right";
  }
}

function click2() {
  if (desc2.style.display === "none" || desc2.style.display === "") {
    desc2.style.display = "flex";
    abrir2.className = "fa-solid fa-angle-down";
  } else {
    desc2.style.display = "none";
    abrir2.className = "fa-solid fa-angle-right";
  }
}

const theme = document.querySelector("#theme");
const corpo = document.querySelector(".corpo");

let aux = true;
function changeTheme() {
  if (aux == true) {
    corpo.style.backgroundImage = "linear-gradient(270deg, #211f2f, #08203e)";
    corpo.style.color = "white";
    theme.className = "fa-solid fa-sun";
    aux = false;
  } else {
    corpo.style.backgroundImage = "linear-gradient(270deg, #ebf4f5, #b5c6e0)";
    corpo.style.color = "black";
    theme.className = "fa-solid fa-moon";
    aux = true;
  }
}

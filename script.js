const curso1 = document.querySelector(".course-1");
const desc1 = document.querySelector(".desc-1");
const curso2 = document.querySelector(".course-2");
const desc2 = document.querySelector(".desc-2");

function click1() {
  if (desc1.style.display === "none" || desc1.style.display === "") {
    desc1.style.display = "flex";
  } else {
    desc1.style.display = "none";
  }
}

function click2() {
  if (desc2.style.display === "none" || desc2.style.display === "") {
    desc2.style.display = "flex";
  } else {
    desc2.style.display = "none";
  }
}

const theme = document.querySelector("#theme");
const corpo = document.querySelector(".corpo");

let aux = true;
function changeTheme() {
  if (aux == true) {
    corpo.style.backgroundImage = "linear-gradient(270deg, #211f2f, #727a9a)";
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

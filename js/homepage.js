const greetDiv = document.getElementById("greet");
const greet = "Ahoy!";
const welcomeDiv = document.getElementById("welcome");
const welcome = "May you have fair winds and following seas";
const endDiv = document.getElementById("end");
const end = " Elate Inc.";
const card = document.getElementById("card");

let i = 0;

function startW() {
  if (i < greet.length) {
    greetDiv.innerHTML += greet.charAt(i);
    i++;
    card.style.color = "red";
    setTimeout(startW, 100);
    card.classList.add("card-gray"); // change the value of "100" to adjust the typing speed
  } else {
    i = 0;

    startX();
  }
}

function startX() {
  if (i < welcome.length) {
    welcomeDiv.innerHTML += welcome.charAt(i);
    i++;
    setTimeout(startX, 100); // change the value of "100" to adjust the typing speed
  } else {
    i = 0;
    startY();
  }
}

function startY() {
  if (i < end.length) {
    endDiv.innerHTML += end.charAt(i);
    i++;
    setTimeout(startY, 300);
  }
}

startW();
setTimeout(function () {
  card.classList.remove("card-gray");
}, 10000);

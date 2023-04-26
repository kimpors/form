const form = document.getElementsByTagName("form")[0];
const result = document.getElementById("result");

function solve() {
  const a = form.elements["a"].value;
  const b = form.elements["b"].value;
  const c = form.elements["c"].value;

  const D = Math.pow(b, 2) - 4 * a * c;
  let solve;

  if (D > 0) {
    const x1 = ((-b - Math.sqrt(D)) / (2 * a)).toPrecision(2);
    const x2 = ((-b + Math.sqrt(D)) / (2 * a)).toPrecision(2);

    solve = "X1: " + x1 + ", X2: " + x2;
  } else if (D == 0) {
    const x = (-b / (2 * a)).toPrecision(3);
    solve = "X: " + x;
  } else {
    solve = "Коренів немає";
  }

  result.innerHTML = "<h2>Результат</h2> <p>" + solve + "</p>";
}

function login() {
  const nickname = form.elements["nickname"].value;
  const password = form.elements["password"].value;
  if (nickname == "admin" && password == "admin") {
    result.innerHTML = "<h2>Вірний логін</h2>";
  } else {
    result.innerHTML = "<h2>Невірний логін</h2>";
  }
}

function send() {
  result.innerHTML = "<h2>Результат</h2>";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.id == "math") {
    solve();
  } else if (form.id == "login") {
    login();
  } else if (form.id == "test") {
    send();
  }

  window.scrollTo(result.offsetLeft, result.offsetTop);
  return false;
});

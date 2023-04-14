const form = document.getElementById("solve");
const result = document.getElementById("result");
const a = form.elements["a"];
const b = form.elements["b"];
const c = form.elements["c"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const D = Math.pow(b.value, 2) - 4 * a.value * c.value;
  let solve;

  if (D > 0) {
    const x1 = ((-b.value - Math.sqrt(D)) / (2 * a.value)).toPrecision(2);
    const x2 = ((-b.value + Math.sqrt(D)) / (2 * a.value)).toPrecision(2);

    solve = "X1: " + x1 + ", X2: " + x2;
  } else if (D == 0) {
    const x = (-b.value / (2 * a.value)).toPrecision(3);
    solve = "X: " + x;
  } else {
    solve = "Коренів немає";
  }

  result.innerHTML = "<h2>Результат</h2> <p>" + solve + "</p>";
  window.scrollTo(result.offsetLeft, result.offsetTop);
  return false;
});

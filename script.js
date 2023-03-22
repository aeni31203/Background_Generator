let input1 = document.getElementById("color1");
let input2 = document.getElementById("color2");
let body = document.getElementById("colorTheme");
let para = document.getElementById("para");

function colorGenerator() {
  body.style.background = `linear-gradient(to right,${input1.value},${input2.value})`;
  para.textContent = body.style.background + ";";
}

input1.addEventListener("input", colorGenerator);
input2.addEventListener("input", colorGenerator);

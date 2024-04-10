// Average Calculator by Mr.V
document.getElementById("calc-btn").addEventListener("click", calcAverage);
// Event Function
function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  // Process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let rem = num1 / num2;
  let power = num1 ** num2;
  let num = num1;
  let n = num.toFixed(2);
  let radians = num3;

  // Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("num4").innerHTML = sum;
  document.getElementById("num5").innerHTML = product;
  document.getElementById("num6").innerHTML = rem;
  document.getElementById("num7").innerHTML = power;
  document.getElementById("num8").innerHTML = n;
  document.getElementById("num9").innerHTML = Math.tan(radians);
  document.getElementById("num10").innerHTML = Math.random();
}

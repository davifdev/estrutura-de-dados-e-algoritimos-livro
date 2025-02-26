// Instruções condicionais
var num1 = 1;

// Instruções com if
if (num1 === 1) {
  console.log("num is equal to 1");
}

var num2 = 0;

// Instruções com if e else
if (num2 === 1) {
  console.log("num is equal to 1");
} else {
  console.log("num is not equal to 1, the value of num is " + num2);
}

// Instruções com operador ternário
if (num2 === 1) {
  num2--;
} else {
  num2++;
}

num2 === 1 ? num2-- : num2++;

var month = 5;

// Instrução if e else com várias expressões
if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else if (month === 3) {
  console.log("March");
} else {
  console.log("Month is not January, February or Macrh");
}

// Instruções com Switch
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Month is not January, February or March");
}

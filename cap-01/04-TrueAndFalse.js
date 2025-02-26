function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // Objeto é sempre true
testTruthy(""); // false
testTruthy("Packt"); // true
testTruthy(new String("")); // Objeto é sempre true
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // Objeto é sempre true
testTruthy({}); // Objeto é sempre true

var obj = { name: "Jhon" };
testTruthy(obj); // Objeto é sempre true
testTruthy(obj.name); // true
testTruthy(obj.age); // property does not exist 


const funcName = function() {
  const inputA = document.getElementById("numA");
  let numA = Number.parseInt(inputA.value);
  console.log(numA);

  const inputB = document.getElementById("numB");
  let numB = Number.parseInt(inputB.value);
  const res = document.getElementById("res");

  inputB.innerText = numA + numC;

  res.innerText = numA+numB; 
console.log(numA+numB);
  // return '123';
};

let a = 123;

const test = "test";
a = 23432;
// funcName = 131;

// document: {
//     input: {
//         value: 123
//     }
// }

// document.input.value === 123

let input = document.getElementById('inputNumber')
let a = "";
let operator1;

const tooAwah = (too) => {
  input.innerHTML += too;
};

const temdeg = (operator) => {
  a = input.innerHTML;
  operator1 = operator;
  input.innerHTML = "";
};
const AllClear = () => {
    input.innerHTML = "";
};
const tentsuu = () => {
  switch (operator1) {
    case "+":
      input.innerHTML = Number( input.innerHTML) + Number(a);
      break;
    case "-":
      (input.innerHTML) = Number(input.innerHTML) - Number(a);
      break;
    case "*":
      (input.innerHTML) = Number(input.innerHTML) * Number(a);
      break;
    case "/":
      (input.innerHTML) = Number(a) / Number(input.innerHTML);
      break;
  }
};
const huvi = () => { 

  input.innerHTML = Number(input.innerHTML) / 100
}
const surugtoo = () => { 
  input.innerHTML = Number(input.innerHTML) * -1
 
}
const tseg = () => { 
  // input.innerHTML += '.' ;
  if ( input.innerHTML.includes(".") ) {} else { input.innerHTML += '.' } ;

}
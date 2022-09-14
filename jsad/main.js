let a = "" ;
let operator1;
let input = document.getElementById('inputNumber')
const AllClear = () => {
  input.innerText = ""
}
const tooAwah = (too) => {
  input.innerText += too

}


const result = () => {
  document.addEventListener("keydown", (e) => { console })
}
//  const nemeh = (temdeg) =>  { 
//   let a = input.innerText 
//   input.innerText = temdeg
//     console.log(temdeg)
//  }
const nemeh = (operator) => {
  let a = input.innerText
  console.log(operator1)
  input.innerText = ""
  operator1 = operator;
}

const tentsuu = () => {
  if (
    operator1 = "+"
  ) {
    console.log(operator1)
    
    input.innerHTML = Number(a) + Number(input.innerHTML ) 
  }
}

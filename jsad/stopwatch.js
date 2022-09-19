
let element = document.getElementById("tens");
const start = () => {
setInterval(function() {element.innerHTML = Number( element.innerHTML) + Number(1)}, 10);
  switch (element.innerHTML) {
    case Number(100) :
      console.log("a");
      break;
} 

}
//   if (element.innerHTML === 100) { 
//     console.log("a")
//     // document.getElementById("seconds").innerHTML = Number(document.getElementById("seconds").innerHTML) + Number(1)
//     // element.innerHTML = 0 
// } else { console.log("b")}

let i=11
const asuu = async () => {
    const response = await fetch("https://www.randomuser.me/api/?results=50");
   const data = await response.json();
  console.log(data.results[emails].emails);
  document.getElementById("asu").innerHTML = data;
} 
  
  asuu();
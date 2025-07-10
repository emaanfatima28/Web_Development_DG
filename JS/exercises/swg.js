let options = ["S", "W", "G"];
let random = options.sort(() => 0.5 - Math.random())[0];
console.log(random);

let user_input = prompt("Enter S,W or G: ");

if(user_input == "S" || user_input == "W" || user_input == "G"){
  if(random == user_input){
    alert("Congratulations!You won")
  }
  else{
    alert("Better luck next time ;)")
  }
}else{
    alert("Invalid Input!")
}
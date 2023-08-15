const el = document.querySelectorAll(".div1");
const query1 = document.querySelector(".div1");

console.log(query1.textContent);
console.log(el[1].textContent);
// getElemenyById
const username = document.getElementById("username").value;

// querySelector
const username2 = document.querySelector("#username").value;



console.log(username);
console.log(username2);
const el2 = document.querySelector("input[name='login']").value;
console.log(el2);
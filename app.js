let x;
x = window.innerHeight;
console.log(x);

x = window.innerWidth;
console.log(x);

x = window.location;
console.log(x);

let y = document.URL;
console.log(y);

//query selector
let z;
z = document.querySelector("h1");
z = document.querySelectorAll("#list-item");
console.log(z);

let f;
f = document.querySelector(".text");
console.log(f.textContent);

document.querySelector(".dyn-text").textContent = "this was filled dyn-ly"

//sel array
let t;
t = document.querySelectorAll("p");
t.forEach((element) => {
  console.log(element.textContent);
})

t.forEach((element, index) => {
  element.textContent = `${index}: list-item`;
});

let s = document.querySelectorAll(".list-item");
console.log(s[1].textContent);

let ptag = document.querySelectorAll("p");
console.log(ptag[1].textContent);

let litag = document.querySelectorAll("li");
litag.forEach(element => {
  console.log(element.textContent);
})

let listItem = document.querySelectorAll(".list-item");
console.log( listItem[2].textContent);
console.log(litag.length);

// let listItemsAgain = document.querySelector("property-nodes");
// console.log(listItemsAgain.textContent);
// console.log(listItemsAgain.innerHTML);

// const textInsert = document.querySelector("add-to-me");
// textInsert.textContent = "hello";
// textInsert.innerHTML = "<h1>hi from headline 1</h1>"; google all this

const listItemB = document.querySelectorAll("li");
listItemB.forEach(element => {
  element.classList.add("purple");
})

listItemB[1].classList.remove("purple");

button = document.querySelector("button");
button.style.display = "block";
button.style.color = "white";
button.style.fontSize = "1.2rem";
button.style.cursor = "pointer";
button.style.backgroundColor = "gray";
button.style.borderRadius = "4px";
button.style.padding = "1rem 2rem";

//exercise
const favFood = ["milk", "rice", "pizza", "beans"];
const foodList = document.querySelector("#dyn-content");
foodList.innerHTML = "<ul>"

favFood.forEach((food) => {
  foodList.innerHTML += `<li>${food}</li>`
})

//ex2
const body = document.querySelector("body");
body.classList.add("dark-mode");


















// DOM Manipulation
// const title = document.getElementById("sports");
// console.log(title);
// const item = document.getElementsByClassName("list-item");
// console.log(item);
// const item = document.getElementById("golf");
// console.log(item);
// item.style.color = "red";
// const qa = document.querySelectorAll(".list-item");
// console.log(qa);
// for (let i = 0; i < qa.length; i++) {
//   qa[i].style.fontSize = "3rem";
// }
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// li.innerText = "soccer";
// ul.append(li);
// li.classList.add("list-item");
// console.log(li.classList.contains("list-item"));
// ul.remove();

// DOM Traversing
const ul = document.querySelector("ul");
// Parent node traversal
// console.log(ul.parentNode);
// console.log(ul.parentElement); // element is a type of node

// Child node traversal
// indentation counts as text nodes
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// Sibling node traversal
// const div = document.querySelector("div");
// console.log(div.previousSibling);
// console.log(div.nextSiblingSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// Event Delegation
document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.id + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby");

sports.appendChild(newSport);

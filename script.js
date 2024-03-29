// DOM Tasks

// a <p> with red text that says “Hey I’m red!”

// an <h3> with blue text that says “I’m a blue h3!”

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”

// your JavaScript file
const container = document.querySelector("#container");

const pRed = document.createElement("p");
pRed.textContent = "Hey I'm red!";
pRed.style.color="red";

const h3Blue = document.createElement("h3");
h3Blue.textContent = "I'm a blue h3!";
h3Blue.style.color = "blue";

const blackPinkDiv = document.createElement("div");
blackPinkDiv.setAttribute("style","background: pink; border: 1px solid black;");

const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I'm in a div";

const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO!";

blackPinkDiv.appendChild(h1InDiv);
blackPinkDiv.appendChild(pInDiv);

container.appendChild(pRed);
container.appendChild(h3Blue);
container.appendChild(blackPinkDiv);




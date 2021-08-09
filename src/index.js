import "./styles.css";

document.getElementById("app").innerHTML = `
<h1 class='underline'>This is Heading</h1>
<div>

  <a href='https://www.linkedin.com/feed/'>Its My LinkedIn Profile</a>.
  <p>This is paragraph</p>
  <button style={{ color: "red", background: "yellow" }}>click me</button>
  <hr />
  <div class="box">
    <div></div>
  </div>
  <hr/>
  <div>
  <svg>
  <circle cx="100" cy="50" r="30" stroke="black" fill="none" />
  <circle cx="100" cy="50" r="40" stroke="black" fill="none" />
  </svg>
  </div>
</div>
`;

//Conceptual questions
//Add two numbers using arrow function;
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));

//How to add elements at the last of an array
let arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

//How can we add elements at any specific position in JS?
const elements = [1, 3, 4, 5];
const insert = (arr, index, newItems) => [
  ...arr.slice(0, index),
  newItems,
  ...arr.slice(index)
];
const result = insert(elements, 1, 2);
console.log(result);

//Function to delete array elements in javascript.
let deleteElem = 3;
let elem = [5, 4, 3, 2, 1];

elem = elem.filter((num) => num !== deleteElem);
console.log(elem);

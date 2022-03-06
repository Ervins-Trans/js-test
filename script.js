console.log("test js on");
// first task
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];
for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]); // dirty but ...
}
/* // 2nd task - Using JavaScript, create a button and add it to the html (the document)
When the button is clicked:
- Insert an h1 tag with the text “Javascript test”
- Change the background color of the body */

const body = document.body;
const button = document.createElement("button");
const tag = document.createElement("h1");
function addTagChangeBg() {
  tag.innerText = `Javascript test`;
  body.append(tag);
  body.style = `background-color: #CCC;`;
  // function for click-event that adds h1 and changes background to gray
}
button.innerText = `BUTTON THAT DOES THINGS`;
body.append(button);

button.addEventListener("click", addTagChangeBg);
// Task 3
/* 
Make an API call using the Fetch API. Make use of the following API:
https://reqres.in/api/users
Display the first_name of the first three users in the DOM */

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      const span = document.createElement("span");
      span.innerText = `${data[i]?.first_name} `; // can't target sorry. This is what i need to learn from the test - bloody promises :)
      document.body.append(span);
    }
  });

/*  Task 4  Create a class called “Person”. The constructor should have 1 parameter called
 firstname. It should have 1 method called sayHello that should log: 'Hello my name is
 FIRSTNAME'
 Here is an example:
 const peter = new Person('peter');
 peter.sayHello(); // 'Hello my name is Peter' */

class Person {
  constructor(firstname) {
    this.firstname = firstname;
  }

  sayHello() {
    console.log(`Hello my name is ${this.firstname}`);
  }
}
const peter = new Person("peter");
peter.sayHello(); // 'Hello my name is Peter' */

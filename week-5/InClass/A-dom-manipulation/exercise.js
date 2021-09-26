/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
 let pElement = document.getElementsByTagName("p");
    console.log(pElement);
 let divElement = document.querySelector(".site-header");
  console.log(divElement);
  let jumbo = document.getElementById("jumbotron-text");
  console.log(jumbo);
  let allElementP = document.querySelectorAll(".primary-content p");
  console.log(allElementP);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let btn = document.querySelector("#alertBtn");
    btn.addEventListener("click", function(){
      alert("Thanks for visiting Bikes for Refugees!");  
    })

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const colorBtn = document.querySelector("#bgrChangeBtn");
colorBtn.onclick = function () {
    const body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

// const newElement = document.createElement("p");
// newElement.innerText = "Read more below.";
// const jumboC = document.getElementsByClassName("jumbotron");


// addTextBtn.addEventListener("click", function (){
//  jumboC.appendChild(newElement);
// })

const addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.onclick = function() {
    const newPara = document.createElement("p");
    newPara.innerText = "Read more below";
    addTextBtn.parentElement.appendChild(newPara);
}
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


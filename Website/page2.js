// Website assignmemt 

// Variables for HTML Elements
let ansInput1El = document.getElementById("answer1");
let ansInput2El = document.getElementById("answer2");
let ansInput3El = document.getElementById("answer3");
let ansInput4El = document.getElementById("answer4");
let ansInput5El = document.getElementById("answer5");
let resultsbuttonEl = document.getElementById("resultsbutton");
let feedback1El = document.getElementById("feedback1");
let feedback2El = document.getElementById("feedback2");
let feedback3El = document.getElementById("feedback3");
let feedback4El = document.getElementById("feedback4");
let feedback5El = document.getElementById("feedback5");
let totalmarkEl = document.getElementById("marks");
let percentEl = document.getElementById("per"); 
let responseEl = document.getElementById("response");

// Add Event Listener
resultsbuttonEl.addEventListener("click", responseOut);

//Event Functions
function responseOut() {

// Answer vertfiy and marks
// Case Insensetive
let ansInput1 = ansInput1El.value.toLowerCase();
let ansInput2 = ansInput2El.value.toLowerCase();
let ansInput3 = ansInput3El.value.toLowerCase();
let ansInput4 = ansInput4El.value.toLowerCase();
let ansInput5 = ansInput5El.value.toLowerCase();

// Question one 
 let totalMar = 0;
let percent = 0;
 if (ansInput1 === "oui") {
     ansInput1El.style.border = "2px solid green";
    totalMar++;
    feedback1El.innerHTML = "Correct";
 } else if (ansInput1 !== "oui") {
    ansInput1El.style.border = "2px solid red";
     feedback1El.innerHTML= "Incorrect";
 }

// Question two
if (ansInput2 === "les glucides, lipides, protéines, vitamines, minéraux") {
    ansInput2El.style.border = "2px solid green";
    totalMar++;
    feedback2El.innerHTML = "Correct";
 } else if (ansInput2 !== "les glucides, lipides, protéines, vitamines, minéraux") {
    ansInput2El.style.border = "2px solid red";
     feedback2El.innerHTML= "Incorrect";
 }

 // Question three
 if (ansInput3 === "carbone, hydrogène, oxygène" || ansInput3 === "hydrogène, carbone, oxygène" || ansInput3 ==="oxygène, hydrogène, carbone") {
    ansInput3El.style.border = "2px solid green";
    totalMar++;
    feedback3El.innerHTML = "Correct";
 } else if (ansInput3 !== "carbone, hydrogène, oxygène") {
    ansInput3El.style.border = "2px solid red";
     feedback3El.innerHTML= "Incorrect";
 }

// Question four
if (ansInput4 === "stockage d'énergie à long terme") {
    ansInput4El.style.border = "2px solid green";
    totalMar++;
    feedback4El.innerHTML = "Correct";
 } else if (ansInput4 !== "stockage d'énergie à long terme") {
    ansInput4El.style.border = "2px solid red";
     feedback4El.innerHTML= "Incorrect";
 }

// Question five
if (ansInput5 === "la forme de la protéine") {
    ansInput5El.style.border = "2px solid green";
    totalMar++;
    feedback5El.innerHTML = "Correct";
 } else if (ansInput5 !== "la forme de la protéine") {
     ansInput5El.style.border = "2px solid red";
     feedback5El.innerHTML= "Incorrect";
 }
  

//Total marks after addition 
totalmarkEl.innerHTML = +totalMar;

//Percent calculation
percent = (totalMar / 5) * 100;
percentEl.innerHTML = +percent;

if(percent === 100) {
    // you did it statment 
    responseEl.innerHTML = "J'y suis arrivé!";
} else {
    // try again statement 
    responseEl.innerHTML = "Tu peux faire mieux";
}
}
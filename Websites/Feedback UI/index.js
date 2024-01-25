const ratingEls = document.querySelectorAll(".rating");
const containerEl = document.getElementById("container");


// refer to the button
const btnEl = document.getElementById("btn");

//this will contain the string of which feedback choice you choose
let selectedRating = "";

// forEach ratingEl execute the following function
ratingEls.forEach((ratingEl) => {
//if a mouse click is seen, then execute what is below
    ratingEl.addEventListener("click", (event) => {
      //removes any "active" classes first
      removeActive();
      //adds the inner String text to the variable selectedRating
      selectedRating =
      // "||" is the OR operator, parentNode is in case the user clicks on the image
        event.target.innerText || event.target.parentNode.innerText;
      //adds the class "active" to the list of calsses
      event.target.classList.add("active");
      //this is in case if the user clicks on the image
      event.target.parentNode.classList.add("active");
    });
  });



//remove any "active" classes that any of the divs have
function removeActive(){
    ratingEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active");
    })
}




//calls the if function if the button is clicked
btnEl.addEventListener("click",()=> {
  //if the selectedRating is not empty then overwrite the HTML in the container
  if(selectedRating !==""){
    //this code does not use the single quotes
    containerEl.innerHTML = `<strong> Thank You </strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>`;
  }
});

const ratingEls = document.querySelectorAll(".rating");
const containerEl = document.getElementById("container");


// refer to the button
const btnEl = document.getElementById("btn");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
      removeActive();
      selectedRating =
        event.target.innerText || event.target.parentNode.innerText;
      event.target.classList.add("active");
      event.target.parentNode.classList.add("active");
    });
  });




function removeActive(){
    ratingEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active");
    })
}




//execute function after clicking the button
btnEl.addEventListener("click",()=> {
  if(selectedRating !==""){
    containerEl.innerHTML = `<strong> Thank You </strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>`;
  }
});
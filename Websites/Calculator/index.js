const display = document.getElementById("display");


// adds the button inputs to the display 
function appendToDisplay(input){
    display.value += input; 
}

// hitting the "c" button will clear the values on the display
function clearDisplay(){
    display.value ="";
}


//pressing the "=" button will calculate what is in the display and give the results
function calculate(){
    //this code is can cause an error so it has to be in the "try" brackets
    try{
        //eval function will calculate what is in the display and then overwrite what was displayed with the result
        display.value = eval(display.value);
    }
    // if there is an error, the display will show the string "Error"
    catch(error){
        display.value = "Error";
    }
}
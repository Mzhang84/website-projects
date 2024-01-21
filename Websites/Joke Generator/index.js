
// refer to the button
const btnEl = document.getElementById("btn")

// refer will go to the paragraph text
const jokeEl = document.getElementById("joke")

//api key to use their api
const apiKey = "mVGSdTNC71hSrvgDzh9Qog==l75S5jXl3ieUfS43";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,

    },
};

//dad joke api
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getjoke(){
    //try will try to execute function and it will not crash if it can't 
    try{ 
        //display this text before the joke is generated     
        jokeEl.innerText = "Getting joke...";
    
        //disable the button while loading joke
        btnEl.disabled = true;
        //displayed while loading joke
        btnEl.innerText = "Loading.."; 
    
        //getting the api
        const response = await fetch(apiURL, options);
        const data = await response.json();

        //renable the button
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"; 

        //replace text with joke
        jokeEl.innerText = data[0].joke;
    

    }


    // will do this function if there is an error
    catch(error){
        jokeEl.innerText = "An error occurred, try again";
        btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"; 

    }

   
}

//execute getjoke function after clicking the button
btnEl.addEventListener("click", getjoke);
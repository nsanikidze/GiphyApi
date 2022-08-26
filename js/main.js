import { headerButtons } from "./common/inputsArray.js";
import { Header } from "./modules/header.js";



let inputButtons = new Header(headerButtons);
inputButtons.rander();



let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', () =>  {
    let text = document.getElementById("search-text").value;
    inputButtons.search(text, true);
});

let trandingButton = document.querySelector('#trending-submit');
trandingButton.addEventListener('click', () =>  inputButtons.getTrendingGifs() );


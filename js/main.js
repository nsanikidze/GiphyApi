import { searchInputs } from "./common/inputsArray.js";
import { INPUTS } from "./modules/inputs.js";


console.log(searchInputs);
let inputButtons = new INPUTS(searchInputs);
inputButtons.rander();



let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', () =>  inputButtons.search() );

let trandingButton = document.querySelector('#trending-submit');
trandingButton.addEventListener('click', () =>  inputButtons.trending() );
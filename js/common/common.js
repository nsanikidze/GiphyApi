export let setContent = (id, value) => { 
  let element = document.getElementById(id);
  element.innerHTML = value;
};
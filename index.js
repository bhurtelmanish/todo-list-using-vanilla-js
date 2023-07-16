const todoContainer = document.querySelectorAll('.todo-container')[0];
const add = document.querySelectorAll('.add')[0];
const inputField = document.querySelectorAll('.text')[0];
const message = document.querySelectorAll('.box')[0];


add.addEventListener('click' , ()=>{
    let container = document.createElement('div');
    let paragraph = document.createElement('p');
    let remove = document.createElement("button");
    todoContainer.appendChild(container);
    container.appendChild(paragraph);
    container.appendChild(remove);
    paragraph.innerText = inputField.value;
    container.className = "todo-item-container";
    remove.className ="remove btn-common";
    remove.innerText = "x";
    if(inputField.value == ""){
        alert("Please enter something!!");
        container.style.display = "none";
    }
    remove.addEventListener('click' , ()=>{
        container.style.display = "none";
    });
    inputField.value = "";
});
const inputBox = document.getElementById('inputBox'); 
const listContainer = document.getElementById('listContainer'); 

function addTask() { 
    if(inputBox.value === '') { 
        alert("You must write something!"); 
    } else { 
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li); 
    } 
}

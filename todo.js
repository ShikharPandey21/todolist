var tskinpt = document.getElementById("taskInput");
var button = document.getElementById("add");
var tsklist = document.getElementById("taskList");

button.addEventListener("click" , function(){
    let input = tskinpt.value;
    let newItem = document.createElement("li");
    newItem.textContent = input;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X" ;
    deleteButton.addEventListener("click" , function(){
        newItem.remove();
    })
    newItem.appendChild(deleteButton);
    tsklist.appendChild(newItem);
    
    tskinpt.value ="";

    newItem.addEventListener("click" ,  function(){
        newItem.classList.toggle("completed")
    })
})

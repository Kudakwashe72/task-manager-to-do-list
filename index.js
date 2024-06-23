const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll=document.querySelector(".clear");
const messageSpan=document.querySelector(".message-box span");
const searchForm=document.querySelector(".search");

function updateMessage(){
    const textLength=tasks.children.length;
    messageSpan.textContent=`You have ${textLength} pending tasks`;
}



addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the task value
    const value = addForm.task.value;

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.innerHTML  += `
        <span>${value}</span>
        <i class="bi bi-trash-fill delete"></i>
    `;
    
    // Append the task item to the task list
    tasks.appendChild(taskItem);
   

    // Clear the input field
    addForm.task.value = "";
    updateMessage();
});

//deleting elememnts

tasks.addEventListener("click",event=>{
      if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
        updateMessage();
      }
});



 // clearing all elements
clearAll.addEventListener("click",event=>{
    const taskItems=tasks.querySelectorAll("li");
    taskItems.forEach(item=>{
        item.remove();
        updateMessage();
    })

              
});


function filterTask(term){
    Array.from(tasks.children).filter(task=>{
       return !task.textContent.toLowerCase().includes(term); 
    }).forEach(task=>{
        task.classList.add("hide");
    });
    Array.from(tasks.children).filter(task=>{
      return  task.textContent.toLowerCase().includes(term);  
    }).forEach(task=>{
         task.classList.remove("hide");
     });
}



searchForm.addEventListener("keyup",event=>{
    const term=searchForm.task.value.trim().toLowerCase();
    filterTask(term);
});


searchForm.addEventListener("click",event=>{
   if(event.target.classList.contains("reset")){
    searchForm.reset();
    const term=searchForm.task.value.trim();
    filterTask(term);
   } 
})








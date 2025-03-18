document.addEventListener("DOMContentLoaded", () => {
    const newTask = document.getElementById("add-new-task");
    const addBtn = document.getElementById("task-button");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = newTask.value.trim();
        if (taskText === "") return;	
        const li = document.createElement("li");
        li.textContent = taskText;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => li.remove());
        
        li.addEventListener("click", () => li.classList.toggle("completed"));
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        newTask.value = "";
    }

    addBtn.addEventListener("click", addTask);
    newTask.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });
});

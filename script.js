const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    const task = checkbox.nextElementSibling;
    if (checkbox.checked) {
        task.classList.add("completed");
    } else {
        task.classList.remove("completed");
    }
}

function editTask(button) {
    const task = button.previousElementSibling.previousElementSibling;
    const newText = prompt("Edit Task", task.textContent);
    if (newText !== null && newText.trim() !== "") {
        task.textContent = newText.trim();
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}


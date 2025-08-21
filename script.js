
let taskList = document.getElementById("taskList");
let input = document.getElementById("taskInput");
let addBtn = document.querySelector("button"); // pehla button

let editMode = false;
let currentTask = null;

function addTask() {
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  if (editMode) {
    // Agar edit mode on hai to update karega
    currentTask.querySelector("span").textContent = input.value;
    editMode = false;
    addBtn.textContent = "Add"; // button wapas Add ho jayega
    input.value = "";
  } else {
    // Normal add mode
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = input.value;

    let btns = document.createElement("div");
    btns.className = "btns";

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      input.value = span.textContent; // text input me aa jayega
      addBtn.textContent = "Update";  // button change
      editMode = true;
      currentTask = li; // jisme edit kar rahe hain usko hold karo
    };

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    btns.appendChild(editBtn);
    btns.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btns);

    taskList.appendChild(li);

    input.value = "";
  }
}


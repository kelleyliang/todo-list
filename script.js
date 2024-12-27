const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("you are not doing anything?");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("subject").value = "Other";
    saveData();
}

// In the container where we have stored the task
listContainer.addEventListener("click", function(e) {

    // Checked where we clicked

    // Change between checked and unchecked if target element
    // is a list element
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    // Task deleted
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
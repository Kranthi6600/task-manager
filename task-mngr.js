const darkMode = document.getElementById("dark-mode");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
}

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode","enabled");
    }else {
        localStorage.setItem("darkMode", "disabled");
    }
});

const input = document.querySelector(".input");
console.log(input.value);

const addBtn = document.getElementById("addTask");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const taskList = document.querySelector("#taskList");

const taskText = input.value.trim();
if (taskText === "") return;

const taskItem = document.createElement("div");
taskItem.className = "taskItem";
taskItem.textContent = taskText;
taskItem.classList.add("task-item");


input.value = "";

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className = "deleteBtn";
deleteBtn.style.marginLeft = "10px";

deleteBtn.addEventListener("click", () => {
    taskItem.remove();
});

taskItem.appendChild(deleteBtn)
taskList.appendChild(taskItem);


gsap.from(taskItem, {
    opacity : 0,
    y : 30,
    duration : 0.5,
    ease : "power3.out"

});

});

gsap.from("h1", {
    y : -30,
    duration : 1,
    opacity : 0,
    ease : "bounce"
});

gsap.from("p", {
    y : 30,
    duration : 1,
    opacity : 0,
    delay : 0.5,
    ease : "power4.out"
});


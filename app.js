const buttonAdd = document.querySelector("button");
const input = document.querySelector("input");
const main = document.querySelector(".main");
const taskCounter = document.querySelector(".task-counter");
const clearAllButton = document.querySelector(".clear-all");

buttonAdd.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  let task = document.createElement("div");
  task.classList.add("taskCss");
  const newLi = document.createElement("li");
  newLi.innerText = `${input.value}`;
  task.appendChild(newLi);
  let clearButton = document.createElement("button");
  clearButton.classList.add("remove");
  task.appendChild(clearButton);
  clearButton.innerText = "REMOVE TASK";
  clearButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.remove();
    updateTaskCounter();
  });

  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;

  main.appendChild(task);
  updateTaskCounter();
  input.value = "";
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const updateTaskCounter = () => {
  const totalTasks = document.querySelectorAll(".taskCss").length;
  taskCounter.innerText = `Total Tasks: ${totalTasks}`;
};

clearAllButton.addEventListener("click", () => {
  const tasks = document.querySelectorAll('.taskCss');
  tasks.forEach(task => task.remove());
  updateTaskCounter();
});

window.addEventListener("DOMContentLoaded", () => {
  // Load tasks from local storage if available
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    main.innerHTML = savedTasks;
    updateTaskCounter();
  }
});

window.addEventListener("beforeunload", () => {
  // Save tasks to local storage before leaving the page
  localStorage.setItem("tasks", main.innerHTML);
});

const pro = prompt("Enter your todo, type 'yes' to continue");
const promptInp = pro;
if (promptInp === "yes") {
  alert("Continue");
} else {
  alert("Wrong expectation");
}
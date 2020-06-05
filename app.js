const form = document.querySelector("form");
const list = document.querySelector(".list_wrapper");
const input = document.querySelector("#input");
const button = document.querySelector(".submit");
const error = document.querySelector(".error");


button.addEventListener("click", (x) => {
  if (input.value != "" ) {
    const li = document.createElement("li");
    li.classList.add("todo");
    li.innerHTML = `<i class="fas fa-circle"></i> ${input.value} <i class="fas fa-minus"></i>`;
    addStorage(input.value);
    list.appendChild(li);
    input.value = "";
    error.textContent = "";
    

  } else if (input.value == "") {
    error.textContent = "Nothing to do?";
    input.value = "";
    errorVanish();
  }
  // } else if (!checklis()) {
  //   input.value = "";
  //   error.textContent = "Too many things to do.";
  //   errorVanish();
  // }
  x.preventDefault();
});

list.addEventListener("click", (x) => {
  if (x.target.classList.contains("fa-minus")) {
    x.target.parentNode.remove();
    removeTasks(x.target.parentNode)

  }

  if (x.target.classList.contains("fa-circle")) {
    x.target.parentNode.classList.toggle("inactive");
  }
});

// function checklis() {
//   const lis = document.querySelectorAll(".todo");
//   if (lis.length < 9) {
//     return true;
//   }
// }

form.addEventListener("click", (x) => {
  x.preventDefault();
});

function errorVanish() {
  setTimeout(() => {
    error.textContent = "";
  }, 2000);
}

document.body.addEventListener("click", (e) => {
  if (e.target === document.querySelector("body")) {
    input.value = "";
  }
});

function addStorage (task) {
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks () {
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(element => {
    const li = document.createElement("li");
    li.classList.add("todo");
    li.innerHTML = `<i class="fas fa-circle"></i> ${element} <i class="fas fa-minus"></i>`;
    list.appendChild(li);
  });
}

function removeTasks (taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent = task){
      tasks.splice(index, 1);
    }
  });
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.addEventListener ('DOMContentLoaded', getTasks);
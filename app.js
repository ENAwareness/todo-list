import { createTodo } from "./todoFactory.js";
import { createProject, addTodoToProject } from "./projectManager.js";
import { saveToLocalStorage } from "./storage.js";

let projects = [createProject("Default")];
let currentProject = projects[0];

const projectList = document.getElementById("project-list");
const todoList = document.getElementById("todo-list");
const addProjectForm = document.getElementById("add-project-form");
const addTodoForm = document.getElementById("add-todo-list");
const projectSelect = document.getElementById("new-todo-project");

function renderProjects() {
  projectList.innerHTML = "";
  projectSelect.innerHTML = "";
  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.name;
    li.addEventListener("click", () => {
      currentProject = project;
      renderTodos();
    });
    projectList.appendChild(li);

    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = project.name;
    projectSelect.appendChild(option);
  });
  saveToLocalStorage("projects", projects);
}

function renderTodos() {
  todoList.innerHTML = "";
  currentProject.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item", todo.priority);
    li.innerHTML = `
            <div class="todo-header">
                <h3>${todo.title}</h3>
                <p>Due: ${todo.dueDate}</p>
            </div>
            <div class="todo-details">
                <p>${todo.description}</p>
                <button class="toggle-complete">${todo.completed ? "Mark Incomplete" : "Mark Complete"}</button>
                <button class="delete-todo">Delete</button>
            </div>
        `;
    li.querySelector(".todo-header").addEventListener("click", () => {
      li.querySelector(".todo-details").style.display =
        li.querySelector(".todo-details").style.display === "none" ? "block" : "none";
    });
    li.querySelector(".toggle-complete").addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTodos();
    });
    li.querySelector(".delete-todo").addEventListener("click", () => {
      currentProject.todos = currentProject.todos.filter((t) => t !== todo);
      renderTodos();
    });
    todoList.appendChild(li);
  });
  saveToLocalStorage("projects", projects);
}

addProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = document.getElementById("new-project-name").value;
  projects.push(createProject(projectName));
  renderProjects();
  addProjectForm.reset();
});

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("new-todo-title").value;
  const description = document.getElementById("new-todo-description").value;
  const dueDate = document.getElementById("new-todo-due-date").value;
  const priority = document.getElementById("new-todo-priority").value;
  const projectId = document.getElementById("new-todo-project").value;
  const todo = createTodo(title, description, dueDate, priority, projectId);
  const project = projects.find((p) => p.id === projectId);
  addTodoToProject(project, todo);
  if (project === currentProject) {
    renderTodos();
  }
  addTodoForm.reset();
});

renderProjects();
renderTodos();

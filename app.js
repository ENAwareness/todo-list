import { createTodo } from "./todoFactory";
import { createProject, addTodoToProject } from "./projectManager";
import { saveToLocalStorage } from "./storage";

let projects = [createProject("Default")];
let currentProject = projects[0];

const projectList = document.getElementById("project-list");
const todoList = document.getElementById("todo-list");
const addProjectForm = document.getElementById("add-project-form");
const addTodoForm = document.getElementById("add-todo-form");
const projectSelect = document.getElementById("new-todo-project");

function renderProjects() {
    projectList.innerHTML = '';
    projectSelect.innerHTML = '';
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.addEventListener('click', () => {
            createProject = project;
            renderTodos();
        })
        projectList.appendChild(li);

        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        projectSelect.appendChild(option);
    });
    saveToLocalStorage('projects', projects);
}

function renderTodos() {}

addProjectForm.addEventListener("submit", (e) => {});

addTodoForm.addEventListener("submit", (e) => {});

renderProjects();
renderTodos();

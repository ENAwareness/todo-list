import { createTodo } from "./todoFactory";
import { createProject, addTodoToProject } from "./projectManager";

let projects = [createProject("Default")];
let currentProject = projects[0];

const projectList = document.getElementById("project-list");
const todoList = document.getElementById("todo-list");
const addProjectForm = document.getElementById("add-project-form");
const addTodoForm = document.getElementById("add-todo-form");
const projectSelect = document.getElementById("new-todo-project");

function renderProjects() {}

function renderTodos() {}

addProjectForm.addEventListener("submit", (e) => {});

addTodoForm.addEventListener("submit", (e) => {});

renderProjects();
renderTodos();

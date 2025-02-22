export const createProject = (name) => {
  return {
    id: Date.now().toString(),
    name,
    todos: [],
  };
};

export const addTodoToProject = (project, todo) => {
  project.todos.push(todo);
};

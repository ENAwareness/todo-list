export const createTodo = (title, description, dueDate, priority, projectId) => {
  return {
    title,
    description,
    dueDate,
    priority,
    completed: false,
    projectId,
  };
};

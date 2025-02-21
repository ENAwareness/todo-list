export const createTodo = (title, description, dueData, priority, projectId) => {
  return {
    title,
    description,
    dueData,
    priority,
    completed: false,
    projectId,
  };
};

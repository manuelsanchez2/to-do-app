export const getTodos = async () => {
  const response = await fetch("http://localhost:3333/to-do-list");

  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

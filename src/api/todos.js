export const getTodos = async () => {
  const response = await fetch("http://localhost:3333/todos");

  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

export const createTask = async () => {
  const response = await fetch("http://localhost:3333/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "HOLA", date: "Ahora" }),
  });

  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { useFetch } from "./hooks/useFetch";

function App() {
  // URL da API
  const api = "http://localhost:3000/tasks";
  const { data, httpConfig } = useFetch(api);

  const submitNewTask = async (title) => {
    httpConfig("POST", { title });
    console.log(data);
    
  };

  return (
    <div className="App">
      {/* Nome do aplicativo */}
      <h4 className="header">To-Do List</h4>
      {/* Adiciona uma nova tarefa */}
      <AddTask api={api} submitNewTask={submitNewTask} />
      {/* Exibe as tarefas */}
      {Array.isArray(data) &&
        data.map((task) => <Task key={task.id} title={task.title} />)}
    </div>
  );
}

export default App;

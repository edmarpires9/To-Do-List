import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { useFetch } from "./hooks/useFetch";

function App() {
  // URL da API
  const api = "http://localhost:3000/tasks";
  //GET
  const { data, httpConfig } = useFetch(api);
  //POST
  const submitNewTask = async (title) => {
    httpConfig("POST", { title });
  };
  //DELETE
  const deleteTask = async (id) => {
    httpConfig('DELETE', {}, id)    
  }
  //UPDATE
  const updateTask = async (newTitle, id) => {        
    httpConfig("PATCH", {title: newTitle}, id)
  }

  return (
    <div className="App">
      {/* Nome do aplicativo */}
      <h4 className="header">To-Do List</h4>
      {/* Adiciona uma nova tarefa */}
      <AddTask api={api} submitNewTask={submitNewTask} />
      {/* Exibe as tarefas */}
      {Array.isArray(data) &&
        data.map((task) => <Task key={task.id} id={task.id} title={task.title} updateTask={updateTask} deleteTask={deleteTask}/>)}
    </div>
  );
}

export default App;

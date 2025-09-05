import "./App.css";
import Task from "./components/Task";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data } = useFetch('http://localhost:3000/tasks'); 

  return (
    <div className="App">
      <div className="header">
        <h4>To-Do List</h4>
      </div>
      <div>
        <form className="add-task" action="" method="post">
          <input className="input" type="text" placeholder="Type something" />
          <button className="button button-blue" type="submit">
            +
          </button>
        </form>
      </div>
      {data && data.map((task) => (
        <Task key={task.id} title={task.title}/>
      ))}
    </div>
  );
}

export default App;

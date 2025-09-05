import "./App.css";
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
      <div className="task">
        <p className="task-name">I will wake up ate 8 in the morning</p>
        <div className="row">
          <button className="button button-small-blue" type="submit">
            #
          </button>
          <button className="button button-small-red" type="submit">
            -
          </button>
        </div>
      </div>
      <div className="task">
        <p className="task-name">i will pratice html for 1 hour</p>
        <div className="row">
          <button className="button button-small-blue" type="submit">
            #
          </button>
          <button className="button button-small-red" type="submit">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

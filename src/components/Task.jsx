import { useState } from "react";

const Task = ({ id, title, updateTask, deleteTask }) => {
  const [inputValue, setInputValue] = useState(title);

  const [titleToUpdate, setTitleToUpdate] = useState('');
  const showUpadateInput = (title, id) => {
    setTitleToUpdate(title);
    // updateTask(title, id);
  };
  return (
    <div>
      <div className="task">
        {!titleToUpdate ? (
          <p className="task-name">{title}</p>
        ) : (
          <div>
            <input
              className="input"
              type="text"
              placeholder="Type something"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        )}
        {!titleToUpdate ? (
          <div className="row">
            <button
              className="button button-small-blue"
              type="submit"
              onClick={() => {
                showUpadateInput(title, id);
              }}
            >
              #
            </button>
            <button
              className="button button-small-red"
              type="submit"
              onClick={() => {
                deleteTask(id);
              }}
            >
              -
            </button>
          </div>
        ) : (
          <div className="row">
            <button
              className="button button-small-green"
              type="submit"
              onClick={() => {
                updateTask(inputValue, id);
                showUpadateInput(null);
              }}
            >
              OK
            </button>
            <button
              className="button button-small-red"
              type="submit"
              onClick={() => {
                deleteTask(id);
              }}
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;

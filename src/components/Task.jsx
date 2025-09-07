const Task = ({id, title, deleteTask}) => {
  return (
    <div>
      <div className="task">
        <p className="task-name">{title}</p>
        <div className="row">
          <button className="button button-small-blue" type="submit">
            #
          </button>
          <button className="button button-small-red" type="submit" onClick={() => {deleteTask(id)}}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

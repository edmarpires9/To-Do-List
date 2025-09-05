const Task = (props) => {
  return (
    <div>
      <div className="task">
        <p className="task-name">{props.title}</p>
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
};

export default Task;

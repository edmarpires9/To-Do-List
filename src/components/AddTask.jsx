import { useState } from "react";

const AddTask = ({submitNewTask}) => {
  //Armazena o valor do input
  const [inputValue, setInputValue] = useState("");
  // Envia os dados da tarefa para o banco de dados
  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewTask(inputValue)
    setInputValue(""); // limpa input
  };

  return (
    <div>
      <div>
        <form className="add-task" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Type something"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="button button-blue" type="submit">
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;

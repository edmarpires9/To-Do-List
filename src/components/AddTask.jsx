import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { BeakerIcon } from "@heroicons/react/24/solid";


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
        <form className="flex mt-1" onSubmit={handleSubmit}>
          <input
            className="w-80 border p-2"
            type="text"
            placeholder="Nome da tarefa"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="mx-4" type="submit">
            <PlusCircleIcon className="h-10 w-10 text-purple-500 cursor-pointer"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;

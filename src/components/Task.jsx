import { useState } from "react";
import {
  CheckCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const Task = ({ id, title, updateTask, deleteTask }) => {
  const [inputValue, setInputValue] = useState(title);

  const [titleToUpdate, setTitleToUpdate] = useState("");
  const showUpadateInput = (title, id) => {
    setTitleToUpdate(title);
    if (title) {
      updateTask(title, id);
    }
  };
  return (
    <div>
      <div className="flex justify-between w-96 p-3">
        {!titleToUpdate ? (
          <p className="text-gray-400">{title}</p>
        ) : (
          <div>
            <input
              className="border py-1"
              type="text"
              placeholder=""
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        )}
        {!titleToUpdate ? (
          <div className="w-16 flex justify-around">
            <button
              className="button button-small-blue"
              type="submit"
              onClick={() => {
                showUpadateInput(title, id);
              }}
            >
              <PencilSquareIcon className="h-5 w-5 text-blue-500" />
            </button>
            <button
              className="button button-small-red"
              type="submit"
              onClick={() => {
                deleteTask(id);
              }}
            >
              <TrashIcon className="h-5 w-5 text-red-500" />
            </button>
          </div>
        ) : (
          <div>
            <button
              className="button button-small-green"
              type="submit"
              onClick={() => {
                updateTask(inputValue, id);
                showUpadateInput(null);
              }}
            >
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;

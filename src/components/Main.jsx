import React from "react";

const Main = ({ todos, onDelete, editHandle, toggleChecked }) => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gray-900 rounded-b-md w-full max-w-screen-md min-h-[80vh] md:min-h-[60vh] mx-auto p-4">
      {todos.length === 0 ? (
        <div className="text-gray-400 text-center text-xl font-medium py-10">
          No tasks to show. Add a task to get started!
        </div>
      ) : (
        todos.map((todo, index) => (
          <div
            key={index}
            className="todos px-3 py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          >
            <label className="flex flex-wrap bg-gray-800 px-3 py-2 rounded-md items-center gap-3 w-full">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleChecked(index)}
                className="accent-green-500 w-5 h-5 cursor-pointer"
              />
              <div className="break-words whitespace-normal overflow-hidden w-96 flex justify-between flex-wrap">
                <span
                  className={`text-gray-200 text-lg px-2 py-1 rounded-md max-w-full ${todo.checked ? "line-through text-gray-500" : ""
                    }`}
                >
                  {todo.text}
                </span>
                <span className="break-words whitespace-normal overflow-hidden w-full flex flex-col md:flex-row justify-between text-gray-500 text-sm font-light italic">
                  {today}
                </span>
              </div>
            </label>
            <div className="buttons flex flex-wrap md:flex-nowrap gap-2 px-2">
              <button
                onClick={() => editHandle(index)}
                className="edit active:scale-95 bg-purple-800 text-white font-medium px-4 py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete this task?")
                  ) {
                    onDelete(index);
                  }
                }}
                className="delete active:scale-95 bg-red-500 text-white font-medium px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Main;
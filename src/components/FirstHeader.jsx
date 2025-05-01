import React, { useState } from "react";

const FirstHeader = ({ onAdd }) => {

  const [inputVal, setInputVal] = useState("");

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onAdd(inputVal);
      setInputVal("");
    }
  };

  return (
    <div className="bg-gray-900 py-3 text-white w-full max-w-screen-md flex flex-col md:flex-row items-start md:items-center justify-between px-4 gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-[65%]"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="bg-white text-black md:h-10  w-full sm:w-auto flex-1 rounded-sm outline-none px-2 font-medium"
          placeholder="Add a task..."
        />
        <button
          type="submit"
          className="bg-blue-700 font-medium hover:cursor-pointer active:scale-95 px-4 py-2 flex items-center justify-center rounded-sm"
        >
          Add
        </button>
      </form>
      <div className="date flex flex-col md:items-end w-full md:w-[35%]">
        <h1 className="font-semibold text-3xl md:text-4xl">Today</h1>
        <h2 className="mt-1 text-md text-gray-400">{today}</h2>
      </div>
    </div>
  );
};

export default FirstHeader;

import { useState } from "react";

const TodoCreate = ({ create }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitle("");
    } else {
      create(title);
      setTitle("");
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-md flex items-center gap-4 overflow-hidden my-8 dark:bg-gray-800 transition duration-300   "
    >
      <span className="border-2 p-3 h-3 w-3 rounded-full dark:border-gray-600 transition duration-300 "></span>
      <input
        className="w-full  text-gray-500 outline-none dark:bg-gray-800 transition duration-300 "
        type="text"
        placeholder="Create new Todo"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoCreate;


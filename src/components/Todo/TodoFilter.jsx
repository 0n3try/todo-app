const TodoFilter = ({ filterTodo }) => {
  return (
    <section className="p-4 mt-8 text-gray-400 bg-white rounded-md flex gap-4 justify-center font-semibold dark:bg-gray-800 transition duration-300 ">
      <p onClick={() => filterTodo("all")} className="hover:text-blue-700">
        All
      </p>
      <p onClick={() => filterTodo("active")} className="hover:text-blue-700">
        Active
      </p>
      <p
        onClick={() => filterTodo("completed")}
        className="hover:text-blue-700"
      >
        Completed
      </p>
    </section>
  );
};

export default TodoFilter;


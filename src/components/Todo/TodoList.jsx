import TodoItem from "./TodoItem";

const TodoList = ({ todos, remove, update }) => {
  return (
    <div className="container mx-auto rounded-t-lg bg-white dark:bg-gray-800 transition duration-300 ">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todos={todo} remove={remove} update={update} />
      ))}
    </div>
  );
};

export default TodoList;


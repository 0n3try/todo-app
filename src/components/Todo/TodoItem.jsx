import IconCross from "../Icons/IconCross";
import IconCheck from "../Icons/IconCheck";

const TodoItem = ({ todos, remove, update }) => {
  const { id, title, completed } = todos;
  return (
    <article className=" p-4 flex  gap-4 border-b dark:border-b-gray-700 transition duration-300 ">
      <button
        onClick={() => update(id)}
        className={`w-7 h-7 rounded-full flex-none dark:border-gray-600 transition duration-300 
        ${
          completed
            ? "bg-gradient-to-br from-sky-500  via-purple-500  flex justify-center items-center"
            : "inline-block border-2"
        }`}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow ${
          completed
            ? "line-through text-gray-400 dark:text-gray-600"
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        {title}
      </p>
      <button onClick={() => remove(id)} className="flex-none">
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;


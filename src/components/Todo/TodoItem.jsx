import IconCross from "../Icons/IconCross";
import IconCheck from '../Icons/IconCheck';

const TodoItem = ({todos, remove, update}) => { 
  const {id, title, completed} = todos;
  return(
    <article className="bg-white p-4 flex rounded-md gap-4 border-b">
      <button onClick={() => update(id)}
        className={`w-7 h-7 rounded-full flex-none 
        ${completed
            ? 'bg-gradient-to-br from-sky-500  via-purple-500  flex justify-center items-center' 
            : "inline-block border-2" }`}>
          {
            completed && <IconCheck/>
          }
        </button>
      <p className={`grow ${completed ? "line-through text-gray-400" : 'text-gray-600'}`}>{title}</p>
      <button onClick={() => remove(id)} className="flex-none">
        <IconCross />
      </button>
    </article>
  )
 }

 export default TodoItem;
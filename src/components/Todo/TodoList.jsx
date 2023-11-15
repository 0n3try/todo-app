import TodoItem from "./TodoItem";

const TodoList = ({todos, remove, update}) => { 
  return(
    <div className="container mx-auto  ">
      {
        todos.map((todo) => <TodoItem key={todo.id} todos={todo} remove={remove} update={update}/> )
      }
      
    </div>
  )
 }

 export default TodoList;
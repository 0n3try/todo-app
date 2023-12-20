import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, remove, update }) => {
  return (
    <Droppable droppableId="value">
      {(provider) => (
        <div
          ref={provider.innerRef}
          {...provider.droppableProps}
          className="container mx-auto rounded-t-lg bg-white dark:bg-gray-800 transition duration-300 "
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(provider) => (
                <TodoItem
                  ref={provider.innerRef}
                  {...provider.dragHandleProps}
                  {...provider.draggableProps}
                  todos={todo}
                  remove={remove}
                  update={update}
                />
              )}
            </Draggable>
          ))}
          {provider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;

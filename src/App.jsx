import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TodoComputed from "./components/Todo/TodoComputed";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoFilter from "./components/Todo/TodoFilter";
import TodoList from "./components/Todo/TodoList";

const initialValue = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodo] = useState(initialValue);

  const create = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodo([...todos, newTodo]);
  };

  const update = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const remove = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const computed = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodo(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const filterTodo = (todofil) => setFilter(todofil);

  const changeFilter = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  };

  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain md:bg-cover min-h-screen bg-gray-200
      dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-gray-900 transition duration-300  "
    >
      <Header />
      <main className=" container p-4 mx-auto">
        <TodoCreate create={create} />

        <DragDropContext>
          <TodoList todos={changeFilter()} update={update} remove={remove} />
        </DragDropContext>

        <TodoComputed computed={computed} clearCompleted={clearCompleted} />

        <TodoFilter changeFilter={changeFilter} filterTodo={filterTodo} />
      </main>

      <footer className="font-semibold text-center text-gray-400 container px-4 mt-8">
        Drag and drop to reoder list
      </footer>
    </div>
  );
};

export default App;

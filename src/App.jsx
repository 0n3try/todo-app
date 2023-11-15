import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/Todo/TodoComputed";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoFilter from "./components/Todo/TodoFilter";
import TodoList from "./components/Todo/TodoList";

const initialValue = [
  {
    id:1,
    title:'Finish Todo app',
    completed: true,
  },
  {
    id:2,
    title:'Do my homework',
    completed: false,
  },
  {
    id:3,
    title:'Finish Todo app',
    completed: false,
  },
  {
    id:4,
    title:'Finish Todo app',
    completed: false,
  },
]

const App = () => {  

  const [todos, setTodo] = useState(initialValue);

  const create = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    }

    setTodo([...todos, newTodo])
  }

  const update = (id) => {
    setTodo(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed } : todo))
  }

  const remove = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id))
  }

  const computed = todos.filter(todo => !todo.completed).length;

  const clearCompleted = () => {
    setTodo(todos.filter((todo)=> !todo.completed))
  }

  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-200">
      <Header/>
      <main className=" container p-4 bg-gra">
        <TodoCreate create={create}/>

        <TodoList todos={todos} update={update} remove={remove} />

        <TodoComputed computed={computed} clearCompleted={clearCompleted} />

        <TodoFilter/>
      </main>

      <footer className="font-semibold text-center text-gray-400 container px-4 mt-8">
        Drag and drop to reoder list
      </footer>
    </div>
  )
}

export default App;
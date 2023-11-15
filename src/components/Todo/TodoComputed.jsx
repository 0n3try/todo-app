const TodoComputed = ({computed, clearCompleted}) => { 
  return(
    <section className="container flex justify-between p-4 bg-white rounded-b-lg text-gray-400 font-semibold ">
      <p>{computed} items left</p>
      <button onClick={() => clearCompleted()} > Clear Completed</button>
    </section>
  )
 }
 export default TodoComputed;
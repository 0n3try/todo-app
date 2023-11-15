const TodoFilter = () => { 
  return(
    <section className="p-4 mt-8 text-gray-400 bg-white rounded-md flex gap-4 justify-center font-semibold">
      <p className="hover:text-blue-700">All</p>
      <p className="hover:text-blue-700">Active</p>
      <p className="hover:text-blue-700">Completed</p>
    </section>
  )
 }

 export default TodoFilter;
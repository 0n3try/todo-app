import IconMoon from './Icons/IconMoon.jsx';

const Header = () => { 
  return(
    <div className="container mx-auto p-4 flex justify-between">
      <h1 className="font-semibold text-white text-2xl tracking-[10px] uppercase">Todo</h1>
      <button>
        <IconMoon />
      </button>
    </div>
  )
}

export default Header;
import { useEffect, useState } from "react";
import IconMoon from "./Icons/IconMoon.jsx";
import IconSun from "./Icons/IconSun.jsx";

const initialValueDark = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [dark, setDark] = useState(initialValueDark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="container mx-auto p-4 flex justify-between">
      <h1 className="font-semibold text-white text-3xl tracking-[0.3rem] uppercase">
        Todo
      </h1>
      <button
        className="transition-all duration-300"
        onClick={() => setDark(!dark)}
      >
        {dark ? <IconSun /> : <IconMoon />}
      </button>
    </div>
  );
};

export default Header;


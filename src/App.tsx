import Navbar from "./pageComponents/Navbar";
import { useState, useEffect } from "react";
import Sidebar from "./pageComponents/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="w-full h-dvh pt-6 bg-page dark:bg-black">
      <div className="md:hidden">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="hidden md:block">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;

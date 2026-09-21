import Navbar from "./pageComponents/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="w-full h-dvh pt-6 bg-page dark:bg-black">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;

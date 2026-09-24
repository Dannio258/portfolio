import Navbar from "./pageComponents/Navbar";
import { useState, useEffect } from "react";
import Sidebar from "./pageComponents/Sidebar";
import Footer from "./pageComponents/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="w-full min-h-dvh pt-6 md:pb-6 bg-page flex flex-col dark:bg-black font-verdana">
      <div className="md:hidden">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="hidden md:block">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <main className="flex-1"></main>

      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./pageComponents/Navbar";
import { useState, useEffect } from "react";
import Sidebar from "./pageComponents/Sidebar";
import Footer from "./pageComponents/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="bg-page font-verdana flex min-h-dvh w-full flex-col pt-6 md:pb-6 dark:bg-black">
      <div className="md:hidden">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="hidden md:block">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <main className="flex-1 mx-auto my-10 w-[90%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

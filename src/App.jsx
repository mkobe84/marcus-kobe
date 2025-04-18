import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const App = () => {
  const [header, setHeader] = useState("home");
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Router>
      <div
        className={`${
          theme === "dark" ? "bg-[#292929] text-white" : "text-black"
        } min-h-screen transition-all duration-300 px-8`}
      >
        <Navbar setHeader={setHeader} theme={theme} toggleTheme={toggleTheme} />
        <div className="mx-auto flex max-w-2xl flex-col font-doto ">
          <main className="grow">
            <Routes>
              <Route path="/marcus-kobe" element={<Home theme={theme} />} />
              <Route
                path="/marcus-kobe/projects"
                element={<Projects theme={theme} />}
              />
              <Route
                path="/marcus-kobe/contact"
                element={<Contact theme={theme} />}
              />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./Context/ThemeContext";
import Main from "./Pages/Main";
import CustomCursor from "./Components/Cursor/CustomCursor";

function RoutesComponent() {
  const { theme } = useContext(ThemeContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Give the app time to load all components
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Disable copy, cut, and right-click
  useEffect(() => {
    const preventCopy = (e) => e.preventDefault();
    const preventContextMenu = (e) => e.preventDefault();

    document.addEventListener("copy", preventCopy);
    document.addEventListener("cut", preventCopy);
    document.addEventListener("contextmenu", preventContextMenu);

    return () => {
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("cut", preventCopy);
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`} data-theme={theme}>
      {/* Noise texture overlay for modern aesthetic */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor for desktop */}
      <CustomCursor />

      <div className="app-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;

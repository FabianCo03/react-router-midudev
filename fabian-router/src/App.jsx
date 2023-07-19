import { useEffect, useState } from "react";
import "./App.css";
import { EVENTS } from "./consts";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  // evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Estás en Home</h1>
      <p>Página de ejemplo para react router</p>
      <button onClick={() => navigate("/about")} href="/about">
        Sobre mí
      </button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hola! me llamo Fabián y estoy creando mi primer React Router</p>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1424599144627380226/Ty7fEdbn_400x400.jpg"
          alt="Foto perfil Twitter FabianCo03"
        />
      </div>
      <button onClick={() => navigate("/")} href="/">
        Ir al Home
      </button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <>
      <main>
        {currentPath === "/" && <HomePage />}
        {currentPath === "/about" && <AboutPage />}
      </main>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { EVENTS } from "./consts";

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>PAGE NOT FOUND 404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname); // '/' '/about'

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange); // actualiza contenido nuevo
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  const Page = routes.find(({ path }) => path === currentPath)?.Component;
  return Page ? <Page /> : <DefaultComponent />;
}

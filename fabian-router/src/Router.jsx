import { useState, useEffect, Children } from "react";
import { EVENTS } from "./consts";
import { match } from "path-to-regexp";

export function Router({
  children,
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

  let routeParams = {};

  // add routes from children <Route/> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren);

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;

    // hemos usado path-to-regexp
    // para poder detectar rutas dinámicas como por ejemplo
    // /search/:query <- query es una ruta dinámica
    const matcheURL = match(path, { decode: decodeURIComponent });
    const matched = matcheURL(currentPath);

    if (!matched) return false;

    // guardar los parámetros de la URL que eran dinámicos
    // y que hemos extraido con path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la URL es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params; // { query: 'javascript` }
    return true;
    // ?. si el find devuelve 'null', no sigue evaluando lo de la derecha
  })?.Component;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />;
}

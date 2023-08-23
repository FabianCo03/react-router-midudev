import { Route } from "./components/Route";
import { Router } from "./Router";
import { lazy, Suspense } from "react";
import Page404 from "./pages/404";
import SearchPage from "./SearchPage";
// Cargará el JS que necesitemos, es un impacto muy positivo
//LazyLoad
const LazyAbout = lazy(() => import("./pages/About.jsx")); // import dinámico
const LazyMyProjects = lazy(() => import("./pages/MyProjects")); // import dinámico
const LazyUniversity = lazy(() => import("./pages/University")); // import dinámico

const appRoutes = [
  {
    path: "/search/:query",
    Component: ({ routeParams }) => (
      <SearchPage routeParams={routeParams}></SearchPage>
    ),
  },
];

function App() {
  return (
    <div>
      <main>
        <Suspense fallback={null} />
        {/* <Suspense fallback={<div>Loading. . .</div>} /> */}
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyAbout} />
          <Route path="/projects" Component={LazyMyProjects} />
          <Route path="/university" Component={LazyUniversity} />
        </Router>
      </main>
    </div>
  );
}

export default App;

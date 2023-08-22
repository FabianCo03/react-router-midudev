import { Route } from "./components/Route";
import { Router } from "./Router";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Page404 from "./pages/404";
import SearchPage from "./SearchPage";
import University from "./pages/University";

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
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={About} />
          <Route path="/projects" Component={MyProjects} />
          <Route path="/university" Component={University} />
        </Router>
      </main>
    </div>
  );
}

export default App;

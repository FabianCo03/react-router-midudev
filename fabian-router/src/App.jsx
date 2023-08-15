import About from "./pages/About";
import { Router } from "./Router";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import Page404 from "./pages/404";
import SideBar from "./components/SideBar";

const appRoutes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/projects",
    Component: MyProjects,
  },
  {
    path: "/search/:query",
    Component: ({ routeParams }) => (
      <div className="h-screen flex flex-col justify-start items-center bg-gray-600 font-semibold text-gray-200">
        <h1>Has buscado {routeParams.query}</h1>
      </div>
    ),
  },
];

function App() {
  return (
    <div>
      <SideBar />
      <main>
        <Router routes={appRoutes} defaultComponent={Page404}></Router>
      </main>
    </div>
  );
}

export default App;

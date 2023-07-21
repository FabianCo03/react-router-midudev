import "./styles/App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { Router } from "./Router";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  // {
  //   path: "/fabio",
  //   Component: () => <h1>RUTA FABIOOO</h1>,
  // },
];

function App() {
  return (
    <>
      <main>
        <Router routes={appRoutes}></Router>
      </main>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { Link } from "./Link";
import SideBar from "./components/SideBar";

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `${routeParams.query}`;
  }, []);
  return (
    <>
      <SideBar />
      <div className="flex flex-col justify-start items-center font-semibold mt-40">
        <h1>Ha cambiado el título de la pestaña por lo que has buscado 🙀</h1>
      </div>
    </>
  );
}

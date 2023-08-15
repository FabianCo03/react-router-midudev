import { Link } from "../Link";
const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-800 text-white w-52 py-6 px-4">
      <div className="flex items-center justify-center mb-4">
        <Link to="/" className="cursor-pointer">
          <img src="./IconFabian.png" className="w-32 h-32" alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Link
          to="/"
          className="text-center py-2 w-full text-lg font-medium hover:bg-[#61677A]"
        >
          Ir a Home
        </Link>
        <Link
          to="/about"
          className="text-center py-2 w-full text-lg font-medium hover:bg-[#61677A]"
        >
          Ir a sobre mí
        </Link>
        <Link
          to="/projects"
          className="text-center py-2 w-full text-lg font-medium hover:bg-[#61677A]"
        >
          Ir a mis proyectos
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

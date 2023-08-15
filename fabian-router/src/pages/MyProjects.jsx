export default function MyProjects() {
  return (
    <div className="top-0 right-0 w-92 text-center h-screen p-4 bg-gray-600 text-gray-50">
      <h1 className="text-3xl">Proyectos</h1>
      <div className="flex justify-center items-center mt-20">
        <div className="flex space-x-5">
          <a
            href="https://fabianco03.github.io/react-game-triqui/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-32 h-32 rounded-3xl bg-gray-800 text-white hover:scale-110 transition-transform duration-300 font-semibold border border-gray-400 hover:border-green-400 hover:bg-gray-400 hover:text-gray-950"
          >
            Jugar Triqui
          </a>
          <a
            href="https://fabianco03.github.io/intro-reactJS/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-32 h-32 rounded-3xl bg-gray-800 text-white hover:scale-110 transition-transform duration-300 font-semibold border border-gray-400 hover:border-green-400 hover:bg-gray-400 hover:text-gray-950"
          >
            TODO list
          </a>
        </div>
      </div>
    </div>
  );
}

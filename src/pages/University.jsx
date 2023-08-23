import SideBar from "../components/SideBar";

import React from "react";
const University = () => {
  const videoId = "7nE4p6LaHXA";
  return (
    <>
      <SideBar />
      <div className="flex justify-center items-center h-screen bg-gray-400 ml-52">
        <div className="w-92">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2 mt-20">Tabla</h2>
            <table className="w-full text-center border">
              <thead className="bg-gray-400">
                <tr>
                  <th className="p-2 border border-gray-900 bg-gray-300">
                    Nombre
                  </th>
                  <th className="p-2 border border-gray-900 bg-gray-300">
                    Carrera
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-900 bg-gray-300">
                    Estudiante 1
                  </td>
                  <td className="p-2 border border-gray-900 bg-gray-300">
                    Ingeniería
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-900 bg-gray-300">
                    Estudiante 2
                  </td>
                  <td className="p-2 border border-gray-900 bg-gray-300">
                    Medicina
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-center">Vídeo</h2>
            <div className="flex justify-center items-center">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="video"
                allowFullScreen
                style={{ height: "600px", width: "600px" }}
              ></iframe>
            </div>
            <h2 className="text-xl text-center font-semibold mt-5">Audio</h2>
            <audio controls className="w-full">
              <source src="/audioPrueba.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </>
  );
};

export default University;

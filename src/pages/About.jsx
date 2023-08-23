import ButtonsSocialMedia from "../components/ButtonsSocialMedia";
import SideBar from "../components/SideBar";
import { socialMediaList } from "../consts";

export default function About() {
  console.log("Hola");
  return (
    <>
      <SideBar />
      <div className="top-0 right-0 w-92 text-center h-screen p-4 bg-gray-600 text-gray-50">
        <h1 className="text-3xl">Yo</h1>
        <footer>
          <ButtonsSocialMedia socialMediaList={socialMediaList} />
        </footer>
      </div>
    </>
  );
}

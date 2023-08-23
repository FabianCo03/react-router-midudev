import ButtonsSocialMedia from "../components/ButtonsSocialMedia";
import SideBar from "../components/SideBar";
import { socialMediaList } from "../utils/consts";

const i18n = {
  en: {
    title: "Sobre mí",
    description: "Hola, mi nombre es Fabián",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function About({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");
  return (
    <>
      <SideBar />
      <div className="top-0 right-0 w-92 text-center h-screen p-4 bg-gray-600 text-gray-50">
        <h1 className="text-3xl">{i18n.title}</h1>
        <p>{i18n.description}</p>
        <footer>
          <ButtonsSocialMedia socialMediaList={socialMediaList} />
        </footer>
      </div>
    </>
  );
}

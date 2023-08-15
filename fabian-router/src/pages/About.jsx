import ButtonsSocialMedia from "../components/ButtonsSocialMedia";
export default function About() {
  const socialMediaList = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fabi%C3%A1n-camilo-orjuela-moncada-0742241b5/",
      target: "_blank",
      image: "https://cdn-icons-png.flaticon.com/512/49/49408.png",
    },
    {
      name: "GitHub",
      href: "https://github.com/FabianCo03",
      target: "_blank",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/FabianCo03",
      target: "_blank",
      image:
        "https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fabianco03/",
      target: "_blank",
      image: "https://cdn-icons-png.flaticon.com/512/1384/1384015.png",
    },
  ];

  return (
    <div className="top-0 right-0 w-92 text-center h-screen p-4 bg-gray-600 text-gray-50">
      <h1 className="text-3xl">Me</h1>
      <footer>
        <ButtonsSocialMedia socialMediaList={socialMediaList} />
      </footer>
    </div>
  );
}

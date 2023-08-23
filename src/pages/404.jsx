import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-start items-center">
        <img
          src="https://media4.giphy.com/media/hS42TuYYnANLFR9IRQ/giphy.gif?cid=6c09b952iel8cszvzlhw04zimjsvzd9k3re58sfpv6msg0kx&ep=v1_stickers_related&rid=giphy.gif&ct=ts"
          alt="gif error 404"
        />
        <div className="w-18">
          <Link to={"/"} className="hover:bg-gray-400 hover:text-gray-800">
            Página principal
          </Link>
        </div>
      </div>
    </>
  );
}

const ButtonsSocialMedia = ({ socialMediaList }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 flex justify-center">
      <div className="flex items-center">
        <p className="font-semibold mr-5 text-gray-50">¡Sígueme!</p>
        {socialMediaList.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.href}
            target={socialMedia.target}
            rel="noopener noreferrer"
            className="mr-6 p-2 rounded-full text-gray-200 hover:bg-gray-100 hover:text-black transition-transform duration-300 hover:scale-110 border border-gray-500 hover:border-gray-100"
          >
            {socialMedia.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ButtonsSocialMedia;

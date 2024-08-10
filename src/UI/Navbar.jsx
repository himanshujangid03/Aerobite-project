import logoTextDark from "../assets/logo-text-dark.png";
import menuIcon from "../assets/menu-icon.svg";

function Navbar() {
  return (
    <div className="w-full z-50 flex justify-between px-7 lg:px-14 py-8 sticky top-0 bg-white bg-opacity-50 backdrop-blur-md">
      <a href="/">
        <img
          src={logoTextDark}
          width={207}
          height={40}
          className=" cursor-pointer w-24 h-auto lg:w-[207px]"
          alt="logo"
        />
      </a>

      <div className="hidden text-2xl lg:flex flex-row gap-24 cursor-pointer w-[60rem] justify-end p-2">
        <a className=" navlink-item w-min relative text-blueDark font-semibold">Home</a>
        <a className=" navlink-item w-min relative hover:text-blueDark">About</a>
        <a className=" navlink-item w-min relative hover:text-blueDark">Products</a>
        <a className=" navlink-item w-min relative hover:text-blueDark">Contact</a>
      </div>
      <img
        src={menuIcon}
        width={50}
        height={10}
        alt=" menu-icon"
        className="cursor-pointer block lg:hidden"
      />
    </div>
  );
}

export default Navbar;

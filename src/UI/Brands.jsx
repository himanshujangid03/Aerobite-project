import uberEats from "../assets/Uber-Eats.png";
import dominosLogo from "../assets/Dominos-logo.png";
import fedX from "../assets/fedx.png";

export default function Brands() {
  return (
    <div className=" flex flex-col gap-16 my-32">
      <p className=" text-4xl lg:text-6xl font-medium text-center">Trusted by Industry Leaders</p>
      <div className="px-16 flex flex-col lg:grid grid-cols-3 place-items-center ">
        <img src={uberEats} alt="uber-logo" className="  lg:w-64" />
        <img src={dominosLogo} alt="dominos-logo" className="  lg:w-64" />
        <img src={fedX} alt="fedx-logo" className="  lg:w-64" />
      </div>
    </div>
  );
}

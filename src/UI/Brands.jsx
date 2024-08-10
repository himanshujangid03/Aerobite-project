import uberEats from "../assets/Uber-Eats.png";
import dominosLogo from "../assets/Dominos-logo.png";
import fedX from "../assets/fedx.png";

export default function Brands() {
  return (
    <div className=" flex flex-col gap-16 my-32">
      <p className=" text-[72px] font-medium text-center">Trusted by Industry Leaders</p>
      <div className="px-32 grid grid-cols-3 place-items-center">
        <img src={uberEats} alt="uber-logo" className=" w-64" />
        <img src={dominosLogo} alt="dominos-logo" className=" w-64" />
        <img src={fedX} alt="fedx-logo" className=" w-64" />
      </div>
    </div>
  );
}

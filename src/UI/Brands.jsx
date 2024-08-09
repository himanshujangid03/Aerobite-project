import uberEats from "../assets/Uber-Eats.png";
import dominosLogo from "../assets/Dominos-logo.png";
import fedX from "../assets/fedx.png";

export default function Brands() {
  return (
    <div className=" flex flex-col gap-16 my-[72px]">
      <p className=" text-[72px] font-medium text-center">Trusted by Industry Leaders</p>
      <div className="px-32 grid grid-cols-3 place-items-center">
        <img src={uberEats} alt="uber-logo" className=" w-96" />
        <img src={dominosLogo} alt="dominos-logo" className=" w-96" />
        <img src={fedX} alt="fedx-logo" className=" w-96" />
      </div>
    </div>
  );
}

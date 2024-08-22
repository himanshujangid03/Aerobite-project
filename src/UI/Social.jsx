import icon1 from "../assets/facebook.svg";
import icon2 from "../assets/linkedin.svg";
import icon3 from "../assets/instagram.svg";

export default function Social() {
  return (
    <>
      <div className="flex gap-3 mt-5">
        <img src={icon1} height={60} width={60} />
        <img src={icon2} height={60} width={60} />
        <img src={icon3} height={60} width={60} />
      </div>
    </>
  );
}

import foodDelivery from "../assets/food-delivery.png";

function FoodDelivery() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between">
      <div className=" flex flex-col gap-8 ">
        <h2 className=" text-[#00A9FF] font-medium text-5xl lg:text-6xl leading-[120.5%]">
          Express Food Delivery
        </h2>
        <p className="text-white font-light text-4xl max-w-4/5 ">
          Our primary service is rapid food delivery, utilizing drones to bring
          your favorite meals to your doorstep in under 5 minutes. <br />
          <br />
          Whether it&apos;s a quick lunch or a late-night snack, Aerobite
          ensures you get your food fast and fresh.
        </p>
      </div>
      <img src={foodDelivery} width={803} height={859} alt="food delivery" className="" />
    </div>
  );
}

export default FoodDelivery;
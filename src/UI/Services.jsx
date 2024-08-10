import ContactlessDelivery from "./ContactlessDelivery";
import FoodDelivery from "./FoodDelivery";
import GroceryDelivery from "./GroceryDelivery";
import ServiceHeading from "./ServiceHeading";

function Services() {
  return (
    <div className="h-max px-32 pt-32 pb-28 bg-black  rounded-[64px] flex flex-col gap-[246px]">
      <ServiceHeading />
      <div>
        <FoodDelivery />
        <GroceryDelivery />
        <ContactlessDelivery />
      </div>
    </div>
  );
}

export default Services;
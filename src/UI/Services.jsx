import ContactlessDelivery from "./ContactlessDelivery";
import FoodDelivery from "./FoodDelivery";
import GroceryDelivery from "./GroceryDelivery";
import ServiceHeading from "./ServiceHeading";

function Services() {
  return (
    <div className="h-max px-8 lg:px-12 py-14 bg-black  rounded-[1.5rem] flex flex-col gap-16">
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
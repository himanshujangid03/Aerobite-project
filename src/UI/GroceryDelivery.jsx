import groceryDelivery from "../assets/grocery-delivery.png";

function GroceryDelivery() {
  return (
    <>
      <div className="w-full  flex flex-col lg:flex-row justify-between">
        <div className=" flex flex-col gap-8 h-fit">
          <h2 className=" text-[#80B25B] font-medium text-5xl lg:text-6xl leading-[120.5%]">
            Grocery Delivery
          </h2>
          <p className="text-white font-light text-4xl ">
            Need groceries in a pinch? Aerobite drones can deliver a wide range
            of grocery items from local stores straight to your home. Enjoy the
            convenience of having your essentials delivered quickly and
            efficiently.
          </p>
        </div>
        <img
          src={groceryDelivery}
          width={803}
          height={859}
          alt="food delivery"
        />
      </div>
    </>
  );
}

export default GroceryDelivery;
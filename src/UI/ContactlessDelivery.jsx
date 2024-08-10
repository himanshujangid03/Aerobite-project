import contactlessDeliveryImage from "../assets/contactless-delivery.png";

function ContactlessDelivery() {
  return (
    <>
      <div className="w-full  flex flex-col lg:flex-row justify-between">
        <div className=" flex flex-col gap-[32px] h-fit">
          <h2 className=" text-[#AABBC6] font-medium text-5xl lg:text-6xl leading-[120.5%]">
            Contactless Delivery
          </h2>
          <p className="text-white font-light text-2xl lg:text-4xl ">
            Prioritizing safety and hygiene, our drones provide contactless
            delivery, minimizing human interaction. This service is perfect for
            maintaining social distancing and ensuring a safe delivery
            experience.
          </p>
        </div>
        <img
          src={contactlessDeliveryImage}
          width={803}
          height={859}
          alt="food delivery"
        />
      </div>
    </>
  );
}

export default ContactlessDelivery;
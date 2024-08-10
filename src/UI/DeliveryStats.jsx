export default function DeliveryStats() {
  return (
    <>
      <div className=" w-4/5 m-auto bg-blueDark grid grid-cols-3 px-10 place-items-center py-16 rounded-[2rem] mt-16 text-white">
        <div className=" flex flex-col items-start">
          <p className=" text-2xl">Miles Flown</p>
          <span className="text-7xl font-bold">250,000</span>
        </div>
        <div className=" flex flex-col items-start">
          <p className=" text-2xl">Deliveries Made</p>
          <span className="text-7xl font-bold">12,500</span>
        </div>
        <div className=" flex flex-col items-start">
          <p className=" text-2xl">Items Delivered</p>
          <span className="text-7xl font-bold">37,800</span>
        </div>
      </div>
    </>
  );
}

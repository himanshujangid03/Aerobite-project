export default function DeliveryStats() {
  return (
    <>
      <div className=" w-4/5 m-auto bg-blueDark grid grid-cols-3 px-10 place-items-center py-16 rounded-3xl my-16 text-white">
        <div>
          <p className=" text-3xl">Miles Flown</p>
          <span className="text-[72px]">250,000</span>
        </div>
        <div>
          <p className=" text-3xl">Deliveries Made</p>
          <span className="text-[72px]">12,500</span>
        </div>
        <div>
          <p className=" text-3xl">Items Delivered</p>
          <span className="text-[72px]">37,800</span>
        </div>
      </div>
    </>
  );
}

import emailIcon from "../assets/email icon.svg";

function EmailSubscription() {
  return (
    <div className=" px-6 py-16 lg:p-36  bg-sky-100  ">
      <div className=" flex flex-col lg:flex-row items-end justify-between">
        <div>
          <h1 className="text-[64px] leading-[104.5%] font-medium tracking-tight">
            Subscribe for Newsletter.
          </h1>
          <p className=" text-2xl lg:text-3xl mt-8">
            Recieve daily updates and
            <br /> much more.
          </p>
        </div>

        <div className=" p-4 hidden lg:flex  rounded-full bg-blueDark items-center gap-4 mt-12">
          <input
            type="text"
            className=" outline-none text-white bg-transparent text-lg lg:text-2xl py-2 px-2 lg:px-8"
            placeholder="Please enter your email address"
          />
          <button className=" py-4 px-4 lg:px-10 font-medium self-start text-white  bg-blueLight text-lg lg:text-xl rounded-full flex items-center gap-4 hover:bg-sky-400 transition-all duration-300">
            SUBSCRIBE
            <img
              src={emailIcon}
              width={24}
              height={24}
              alt="mail subscription icon"
            />
          </button>
        </div>
        <div className=" w-full lg:hidden flex flex-col gap-3">
        <div className=" p-4  flex w-full  rounded-2xl bg-blueDark items-center gap-4 mt-12">
          <input
            type="text"
            className=" outline-none text-white bg-transparent text-lg lg:text-2xl py-2 px-2 lg:px-8"
            placeholder="Please enter your email address"
          />
        </div>
          <button className=" py-4 px-4 lg:px-10 font-medium self-start text-white  bg-blueLight text-lg lg:text-xl rounded-2xl flex items-center gap-4 hover:bg-sky-400 transition-all duration-300">
            SUBSCRIBE
            <img
              src={emailIcon}
              width={24}
              height={24}
              alt="mail subscription icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailSubscription;

import emailIcon from "../assets/email icon.svg";

function EmailSubscription() {
  return (
    <div className=" p-36  bg-sky-100  ">
      <div className=" flex flex-row items-end justify-between">
        <div>
          <h1 className="text-[64px] leading-[104.5%] font-medium tracking-tight">
            Subscribe for Newsletter.
          </h1>
          <p className=" text-3xl mt-8">
            Recieve daily updates and
            <br /> much more.
          </p>
        </div>

        <div className=" p-4 w-max rounded-full bg-blueDark flex items-center gap-4 mt-12">
          <input
            type="text"
            className=" outline-none h-full text-white bg-transparent w-max text-2xl py-2 px-8"
            placeholder="Please enter your email address"
          />
          <button className=" py-4 px-10 font-medium self-start text-white  bg-blueLight text-xl rounded-full flex items-center gap-4 hover:bg-sky-400 transition-all duration-300">
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

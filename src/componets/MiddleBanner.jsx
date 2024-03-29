const MiddleBanner = () => {
  return (
    <div className="min-h-screen  flex bg-[#201460] ">
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 justify-items-be">
        <div>
          <img
            className=" min-h-screen object-cover"
            src="./images/middlebanner.avif"
            alt="middle"
          />
        </div>
        <div className="flex flex-col items-center ">
          <ul className="h-[802] mt-[350px] ">
            <li className="whitespace-pre-wrap font-['LilitaOne-Regular'] text-white text-[38px] font-normal ">
              Get Involved
            </li>
            <li className="whitespace-pre-wrap mt-2 text-[17px] text-white ">
              {`We build awareness and support for the social & environmental issues that we feel strongly about. 
Find out how you can help.`}
            </li>
            <button className="border-2 bg-[#FFBC0E] rounded-3xl px-6 py-3 font-black mt-6 border-none hover:bg-yellow-400 duration-500">
              Learn more About Our Values
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MiddleBanner;

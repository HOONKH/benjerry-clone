const TopCard = () => {
  return (
    <section className="mt-[40px] min-w-screen min-h-screen container mx-auto">
      <div className=" h-[48px] text-[38px] -ml-[110px] mb-6 font-['LilitaOne-Regular'] ">
        Where to Buy
      </div>
      <div className="grid grid-cols-2 justify-items-start gap-16 ">
        <div className="w-[875px] h-[583px] rounded-xl -ml-[110px] bg-green-400 ">
          <img
            className="w-[875px] h-[583px] rounded-xl"
            src="./images/benjerry.left.avif"
            alt="left"
          />
        </div>
        <div className="w-[875px] h-[583px] rounded-xl bg-green-400">
          <img
            className=" h-[583px] rounded-xl"
            src="./images/benjerry.right.avif"
            alt="right"
          />
        </div>
        <ul className="-ml-[110px] h-[156px] -mt-10">
          <li className=" font-black text-[32px] font-['LilitaOne-Regular']">
            Get Ice Cream
          </li>
          <li className="text-[20px] font-normal">
            Find your closest retailer or delivery partner today.
          </li>
          <button className="font-black rounded-full mt-[16px] border-2 border-none bg-[#FFBC0E] py-[16px] px-[32px]">
            Get Ice Cream
          </button>
        </ul>
        <ul className=" h-[156px] -mt-10 ">
          <li className="font-black text-[32px] font-['LilitaOne-Regular']">
            Shops& Catering
          </li>
          <li className="text-[20px] font-normal">
            Find your favorit flavors at a Scoop Shop near you
          </li>
          <button className="font-black rounded-full mt-[16px] border-2 border-none bg-[#FFBC0E] py-[16px] px-[32px]">
            Find Shops&Catering
          </button>
        </ul>
      </div>
    </section>
  );
};
export default TopCard;

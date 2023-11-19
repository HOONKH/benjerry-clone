const StickFooter = () => {
  return (
    <footer className="bg-white min-w-screen h-[136px] px-[56px] py-[24px] sticky bottom-0 shadow-3xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img
            className="w-[88px] h-[88px] rounded-full"
            src="./images/footerice.avif"
            alt="footerice"
          />
          <ul className="ml-8">
            <li className="font-['LilitaOne-Regular'] text-[28px] ">
              Ben&Jerry's NEW Instant Delivery!
            </li>
            <li className="text-[20px]">Go ahead, give it a swirl</li>
          </ul>
        </div>
        <div>
          <button className="font-black rounded-full mt-[16px] border-2 border-none text-[20px] bg-[#FFBC0E] py-[16px] px-[32px]">
            Order Now
          </button>
        </div>
      </div>
    </footer>
  );
};
export default StickFooter;

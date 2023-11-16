import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Banner from "./componets/Banner";
import StickFooter from "./componets/StickFooter";

const App = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <Banner />
      <section className=" w-[2543px] h-[1165px] mt-[24px] px-[16px] py-[44px] mx-auto">
        <div className=" w-[2445px] h-[48px] mt-[40px] mx-auto text-[38px] font-['LilitaOne-Regular'] ">
          Where to Buy
        </div>
        <div className="grid grid-cols-2 justify-items-start gap-2 mx-auto w-[2445px]">
          <div className="w-[1195px] h-[797px] rounded-xl bg-green-400 relative">
            <img
              className="w-[1195px] h-[797px] rounded-xl"
              src="./images/benjerry.left.avif"
              alt="left"
            />
          </div>
          <div className="w-[1195px] h-[797px] rounded-xl bg-green-400">
            <img
              className="w-[1195px] h-[797px] rounded-xl"
              src="./images/benjerry.right.avif"
              alt="right"
            />
          </div>
          <ul className="w-[1195px] h-[156px]  ">
            <li className="font-black text-[32px] font-['LilitaOne-Regular']">
              Get Ice Cream
            </li>
            <li className="text-[20px] font-normal">
              Find your closest retailer or delivery partner today.
            </li>
            <button className="font-black rounded-full mt-[16px] border-2 border-none bg-[#FFBC0E] py-[16px] px-[32px]">
              Get Ice Cream
            </button>
          </ul>
          <ul className="w-[1195px] h-[156px]  ">
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
      <StickFooter />
    </div>
  );
};

export default App;

{
  /* <BrowserRouter>
    <Routes>
      <Route></Route>
      <Route></Route>
    </Routes>
  </BrowserRouter>; */
}

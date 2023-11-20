import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Banner from "./componets/Banner";
import StickFooter from "./componets/StickFooter";
import TopCard from "./componets/TopCard";
import MiddleBanner from "./componets/MiddleBanner";
import MiddleCard from "./componets/MiddleCard";
import TopFooter from "./componets/TopFooter";
// w-[2543px] h-[1165px]
const App = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <Banner />
      <TopCard />
      <MiddleBanner />
      <MiddleCard />
      <TopFooter />

      <img src="./images/woody.svg" alt="woody" />

      <ul className="px-[46px] py-[30px] bg-[#3F833F]">
        <div className="grid grid-cols-3 ">
          <div className="w-[602px] h-[368px] bg-red-100">
            <li className="foottitle">It's Like Dessert For Your Inbox</li>
            <li className="footdesc">
              Sign Up For Our Email Newsletter & Get The Inside Scoop!
            </li>
            <input type="text" />
            <input type="value" />
          </div>
          <div className="w-[602px] h-[368px] bg-blue-100"></div>
          <div className="w-[602px] h-[368px] bg-yellow-100"></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </ul>
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

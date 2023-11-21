import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Banner from "./componets/Banner";
import StickFooter from "./componets/StickFooter";
import TopCard from "./componets/TopCard";
import MiddleBanner from "./componets/MiddleBanner";
import MiddleCard from "./componets/MiddleCard";
import TopFooter from "./componets/TopFooter";

import { useEffect, useState } from "react";

import Footer from "./componets/Footer";
// w-[2543px] h-[1165px]
const App = () => {
  const [isHidden, setIsHidden] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 1000) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);
    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <div className=" min-h-screen">
      <Header isHidden={isHidden} />
      <Banner />
      <TopCard />
      <MiddleBanner />
      <MiddleCard />
      <TopFooter />

      <Footer />
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

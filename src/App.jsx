import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Banner from "./componets/Banner";
import StickFooter from "./componets/StickFooter";
import TopCard from "./componets/TopCard";
import MiddleBanner from "./componets/MiddleBanner";
import MiddleCard from "./componets/MiddleCard";
// w-[2543px] h-[1165px]
const App = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <Banner />
      <TopCard />
      <MiddleBanner />
      <MiddleCard />
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

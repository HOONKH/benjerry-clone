const Banner = () => {
  return (
    <main className="min-h-screen relative flex ">
      <img
        className=" absolute min-h-screen object-cover -z-10"
        src="./images/benjerry.main.jpg"
        alt="main"
      />
      <ul className="h-[802] mt-[300px] ml-[65px]">
        <li className="whitespace-pre-wrap font-['LilitaOne-Regular'] text-[50px] ">{`NEW Creamier-Than-Ever Non-Dairy Recipe is 
Coming Soon!`}</li>
        <li className="whitespace-pre-wrap mt-2 text-[17px] ">
          {`Soon all your favorite Non-Dairy flavors will be made using a creamy and decadent new oat milk recipe! Look for new Chocolate Chip
CookieDough Non-Dairy in freezers near you now.`}
        </li>
        <button className="border-2 bg-white rounded-3xl px-6 py-3 font-black mt-6 border-none">
          Learn more
        </button>
      </ul>
    </main>
  );
};
export default Banner;

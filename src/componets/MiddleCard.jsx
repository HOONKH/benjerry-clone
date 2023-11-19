const MiddleCard = () => {
  return (
    <div className="h-[1113px] mx-auto min-w-screen">
      <div>
        <h3 className="mt-[64px] px-[48px] mx-aut text-[38px] mb-3 font-['LilitaOne-Regular']">
          Top Stories
        </h3>
      </div>
      <div className="grid grid-cols-3 px-[48px] mx-auto -gap-2 ">
        <div>
          <img
            className="h-[538px] w-[538px] rounded-lg"
            src="./images/middlecard1.jpg"
            alt="middle1"
          />
          <ul>
            <li className="date mt-3 mb-3">NOVEMBER 9, 2023</li>
            <li className="desc mb-5 font-medium text-[28px] whitespace-pre-wrap">
              {`RECIPE: Chocolate Peanut Butter Ice Cream 
Slices`}
            </li>
            <li className="text-[20px] font-light">
              A slice of heaven for peanut butter lovers! Whip up this recipe
              for Chocolate Peanut Butter Ice Cream Slices and impress your
              whole crew.
            </li>
            <button className="mt-5 text-[16px]">Read More</button>
          </ul>
        </div>
        <div>
          <img
            className="h-[538px] w-[538px] rounded-lg"
            src="./images/middlecard2.jpg"
            alt="middle2"
          />
          <ul>
            <li className="date mt-3 mb-3">OCTOBER 2, 2023</li>
            <li className="desc mb-5 text-[28px] whitespace-pre-wrap">
              {`Do A Waffle Lotta Good With Every Waffle 
Cone!`}
            </li>
            <li className="text-[20px] font-light">
              Your waffle cone just got even sweeter! From Oct. 3 to 17, we’re
              donating $1 for every waffle cone purchased in Scoop Shops to
              Advancement Project, a national civil rights organization working
              to progress human rights and build power in local communities.
            </li>
            <button className="mt-5 text-[16px]">Read More</button>
          </ul>
        </div>
        <div>
          <img
            className="h-[538px] w-[538px] rounded-lg"
            src="./images/middlecard3.jpg"
            alt="middle3"
          />
          <ul>
            <li className="date mt-3 mb-3">OCTOBER 2, 2023</li>
            <li className="desc mb-5 text-[28px] whitespace-pre-wrap">
              {`Our Best Non-Dairy Recipe Yet! A Creamy
and Decadent NEW Oat Milk Recipe is 
Coming Soon to Your Freezer!`}
            </li>
            <li className="text-[20px] font-light">
              Oat milk isn’t just for lattes anymore — soon all your favorite
              Ben & Jerry’s Non-Dairy flavors will be made using a creamy,
              decadent oat milk recipe! Look for new Chocolate Chip Cookie Dough
              Non-Dairy in freezers near you now.
            </li>
            <button className="mt-5 text-[16px]">Read More</button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MiddleCard;

const TopFooter = () => {
  return (
    <div className="min-w-screen h-[784px] px-[46px] py-[30px]  bg-[#C4E7F4]">
      <div className="my-[80px]">
        <h3 className="desc text-[42px]">
          We love making ice cream - but using our business to make the world a
          better place gives our work its meaning
        </h3>
      </div>
      <div className=" grid grid-cols-3 mt-5">
        <ul className=" w-[602px] h-[358px]">
          <img src="./images/footer-card-1.svg" alt="footer1" />
          <li className="mt-8 desc">Thoughtful Ingredients</li>
          <li className="text-[#141414] text-[20px] font-normal">
            Our ingredients support positive change and make our ice cream taste
            sensational!
          </li>
          <button className="mt-5 text-[20px]">Product Sourcing</button>
        </ul>
        <ul className=" w-[602px] h-[358px]">
          <img src="./images/footer-card-2.svg" alt="footer2" />
          <li className="mt-8 desc">Shared Success</li>
          <li className="text-[#141414] text-[20px] font-normal">
            We aim to create prosperity for everyone that's connected to our
            business.
          </li>
          <button className="mt-5 text-[20px]">Our Mission&Values</button>
        </ul>
        <ul className=" w-[602px] h-[358px]">
          <img src="./images/footer-card-3.svg" alt="footer3" />
          <li className="mt-8 desc">Making a Difference</li>
          <li className="text-[#141414] text-[20px] font-normal">
            We build awareness and support for the activism causes we feel
            strongly about.
          </li>
          <button className="mt-5 text-[20px]">Issues We Care About</button>
        </ul>
      </div>
    </div>
  );
};
export default TopFooter;

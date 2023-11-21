import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-white h-[112px] flex items-center justify-start">
      <img
        className="w-[168px] ml-12 "
        src="./images/benjerry.logo.avif"
        alt="logo"
      />
      <div className="flex ">
        <ul className="flex gap-16 ml-12">
          <li className="font-['LilitaOne-Regular'] text-[22px]">
            Ice Cream Flavors
          </li>
          <li className="font-['LilitaOne-Regular'] text-[22px]">
            Where to Buy
          </li>
          <li className="font-['LilitaOne-Regular'] text-[22px]">
            Shop&Catering
          </li>
          <li className="font-['LilitaOne-Regular'] text-[22px]">Activism</li>
          <li className="font-['LilitaOne-Regular'] text-[22px]">About Us</li>
          <li className="font-['LilitaOne-Regular'] text-[22px]">What's New</li>
          <li className="font-['LilitaOne-Regular'] text-[22px]">Contact Us</li>
        </ul>
        <ul className="flex flex-row-reverse w-[980px] items-start">
          <button className="text-[36px]">
            <IoIosSearch />
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

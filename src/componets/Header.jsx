import { useEffect } from "react";
import { IoIosSearch, IoMdMenu, IoIosArrowDown } from "react-icons/io";

const Header = ({ isHidden }) => {
  return (
    <>
      <div
        className={`bg-white h-[112px] flex items-center justify-start mx-auto max-w-screen sticky top-0 z-10 duration-100 ${
          isHidden && "opacity-0 duration-1000"
        }`}
      >
        <img
          className="w-[168px] ml-12"
          src="./images/benjerry.logo.avif"
          alt="logo"
        />
        <div className="flex justify-between w-[2114px]">
          <ul className="flex gap-16 m-12 items-center">
            <li className="font-['LilitaOne-Regular'] text-[22px] flex items-center">
              Ice Cream Flavors
              <div className="mt-2">
                <button>
                  <IoIosArrowDown />
                </button>
              </div>
            </li>
            <li className="font-['LilitaOne-Regular'] text-[22px] flex items-center">
              Where to Buy
              <div className="mt-2">
                <button>
                  <IoIosArrowDown />
                </button>
              </div>
            </li>
            <li className="font-['LilitaOne-Regular'] text-[22px] flex items-center">
              Shop&Catering
              <div className="mt-2">
                <button>
                  <IoIosArrowDown />
                </button>
              </div>
            </li>
            <li className="font-['LilitaOne-Regular'] text-[22px] flex items-center">
              Activism
              <div className="mt-2">
                <button>
                  <IoIosArrowDown />
                </button>
              </div>
            </li>
            <li className="font-['LilitaOne-Regular'] text-[22px] flex items-center ">
              About Us
              <div className="mt-2">
                <button>
                  <IoIosArrowDown />
                </button>
              </div>
            </li>
            <li className="font-['LilitaOne-Regular'] text-[22px]">
              What's New
            </li>
            <li className="font-['LilitaOne-Regular'] text-[22px]">
              Contact Us
            </li>
          </ul>
          <ul className="mr-7 w-18 gap-5 px-6 flex items-center">
            <div>
              <button className="text-[36px] ">
                <IoIosSearch />
              </button>
            </div>
            <div>
              <button>
                <IoMdMenu className="text-[36px] font-light flex lg:block" />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;

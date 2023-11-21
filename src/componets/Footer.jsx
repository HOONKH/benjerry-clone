import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <ul className="px-[46px] pt-[40px] pb-[50px] bg-[#3F833F] min-w-screen mx-auto  ">
      <div className="grid grid-cols-3 mt-10">
        <div className="w-[602px] h-[368px] flex flex-col items-start gap-2 ">
          <li className="foottitle text-[30px]">
            It's Like Dessert For Your Inbox
          </li>
          <li className="footdesc text-[19px]">
            Sign Up For Our Email Newsletter & Get The Inside Scoop!
          </li>
          <div className="flex items-center">
            <input
              className="rounded-l-lg border w-[470px] h-[58px]"
              type="text"
              placeholder="Enter your email address"
            />
            <button
              className="rounded-r-lg border h-[61px] w-[49px] bg-[#FFBC0E] border-none text-3xl"
              type="submit"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="w-[602px] h-[368px] flex flex-col items-start gap-2">
          <li className="foottitle text-[30px]">Connect With Us</li>
          <button className="footdesc">Send Us Feedback</button>
          <button className="footdesc">Unsubscribe</button>
          <div className="mt-6">
            <li className="foottitle text-[30px]">Follow Us</li>
            <span className="flex gap-3 mt-5">
              <img
                className="w-[48px] y-[48px]"
                src="./images/facebook.svg"
                alt="facebook"
              />

              <img
                className="w-[48px] y-[48px]"
                src="./images/instagram.svg"
                alt="instgram"
              />

              <img
                className="w-[48px] y-[48px]"
                src="./images/icon-circle-white-snapchat.svg"
                alt="snapchat"
              />

              <img
                className="w-[48px] y-[48px]"
                src="./images/twitter.svg"
                alt="twitter"
              />

              <img
                className="w-[48px] y-[48px]"
                src="./images/tiktok.svg"
                alt="tiktok"
              />
            </span>
          </div>
        </div>
        <div className="w-[602px] h-[368px] flex flex-col items-start gap-2">
          <li className="foottitle text-[30px]">More Info</li>
          <button className="footdesc">What's New</button>
          <button className="footdesc">About Us</button>
          <button className="footdesc">How We Do Business</button>
          <button className="footdesc">Factory Tours</button>
          <button className="footdesc">Press</button>
          <button className="footdesc">Jobs</button>
        </div>
      </div>
      <div className="flex items-center mb-3">
        <div className=" w-[451px] h-[80px] flex">
          <img
            className="w-[28px] h-[18px]"
            src="./images/flag_US.avif"
            alt="US"
          />
          <IoIosArrowDown className="text-white" />
        </div>
        <div className="w-[1355px] h-[80px]  mb-5 flex flex-col justify-start ">
          <div>
            <button className="footdesc">Accessiblitity</button>
            <button className="footdesc ml-5">Contact Us</button>
            <button className="footdesc ml-5">Franchise</button>
            <button className="footdesc ml-5">Press</button>
            <button className="footdesc ml-5">Jobs</button>
            <button className="footdesc ml-5">Terms of Use</button>
            <button className="footdesc ml-5">Privacy Notice</button>
            <button className="footdesc ml-5">Sitemap</button>
          </div>
          <div>
            <button className="footdesc">
              Do Not Sell or Share My Personal Information
            </button>

            <button className="footdesc ml-7 ">
              AdChoices - Do Not Sell or Share
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[1783px] h-[18px] text-[#FFFFFF] text-[13px] ">
        <li>
          ©2023 Ben & Jerry's Homemade, Inc. This website is directed only to
          the U.S. consumers for products and services of Ben & Jerry's
          Homemade, Inc. This website is not directed to consumers outside of
          the U.S.
        </li>
      </div>
    </ul>
  );
};
export default Footer;

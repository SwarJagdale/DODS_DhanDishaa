import styles from "../style";
import hero from "../assets/hero.png";
import { discount } from "../assets";
import { useState } from "react"; // Import useState hook
import GetStarted from "./GetStarted";
import Billing from "./Billing";
import Stats from "./Stats";
import Business from "./Business";
import CardDeal from "./CardDeal";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Hero = ({ darkMode }) => { // Accept darkMode as a prop
  return (
    <>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mx-10">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2 text-white`}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full mx-10">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className=" text-gradient">Generation</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-poppins mx-10 font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full">
            Finance Buddy.
          </h1>
          <p className="font-poppins mx-10 font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Our team of experts uses a methodology to identify the systems that are
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={hero} alt="billing" className="w-[100%] h-[95%] relative z-[5] rounded-tl-3xl rounded-bl-3xl" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <br />
      <br />
      <Footer />
      {/* <Testimonials/> */}
    </>
  );
};

export default Hero;

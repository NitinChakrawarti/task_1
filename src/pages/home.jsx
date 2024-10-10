import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { Banner } from "../components/Banner";
import MerchantCrousel from "../components/crousel.jsx"
import Faq from "../components/faq.jsx"
import Review from "../components/review.jsx"
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import playstore from "../assets/playstorepng-removebg-preview.png"
import applestore from "../assets/applestorepng-removebg-preview.png"

const images = [
  "https://marketplace.canva.com/EAGGN4jLiEU/1/0/1600w/canva-black-and-cream-illustrative-hair-salon-logo-vkZoxxgOYCk.jpg",

  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/45-Hair-Salon-Logos-for-a-Fabulous-Brand-Identity/refined-salon-by-skippadouza-brandcrowd.png",

  "https://www.shutterstock.com/image-vector/luxury-elegant-illustration-logo-design-260nw-2015399750.jpg"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

const Home = () => {

  return (
    <>
      <div className="bg-bg_light mt-1">
        <div className="hero_section pt-[140px] text-primary flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-bold text-center font-primary">
            YOUR NEXT
            <span className=" w-[195px] px-4 inline-block text-start font-extrabold">
              {/* {service} */}
              <Typewriter
                options={{
                  strings: ['SALON', 'SPA', 'BEAUTY'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            SESSION
            <br></br>
            IS JUST A TAP AWAY
          </h1>
          <p className="text-[15px] font-bold text-center pt-3 opacity-50 text-wrap w-[35%]">Pre-Book all your beauty needs (Haircut, Massage & More)
            Anytime , anywhere with grabky
          </p>
          <button className="h-[83px] w-[286px] bg-secondary text-[30px] font-bold mt-10 shadow-[0_10px_0px_rgba(0,0,0,1)] rounded-full">
            BOOK NOW
          </button>
        </div>

        <div className="services flex flex-col md:flex-row justify-center gap-[50px] mt-[150.0px] items-center ">
          <div className="card  h-[358px] w-[291px] hover:shadow-[8px_7px_0px_rgba(255,237,0,.52)] shadow-[0_4px_4px_rgba(0,0,0,.25)] bg-white  rounded-[30px]"></div>
          <div className="card  h-[358px] w-[291px] hover:shadow-[8px_7px_0px_rgba(255,237,0,.52)] shadow-[0_4px_4px_rgba(0,0,0,.25)] bg-white  rounded-[30px]"></div>
          <div className="card  h-[358px] w-[291px] hover:shadow-[8px_7px_0px_rgba(255,237,0,.52)] shadow-[0_4px_4px_rgba(0,0,0,.25)] bg-white  rounded-[30px]"></div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[150px]">
          <h1 className="text-[30px] font-[650] text-center ">Easy Step to transform your look</h1>
          <div className=" w-full  mt-20">
            <div className="py-2 flex flex-col-reverse md:flex-row justify-center gap-[80px] items-start ">
              <div className="flex flex-col justify-start gap-0">
                <div className=" h-[451px] w-[30vmax] md:w-[476px] flex flex-col justify-between">
                  <div className="h-[122px] w-[45vmax]  md:w-[476px] bg-white box_shadow rounded-xl p-8 ">
                    <h1 className="text-[27px] font-semibold">Select Services</h1>
                    <p className="text-[12px] font-semibold opacity-30">Choose from a wide range of salon services personalized
                      for you.
                    </p>
                  </div>
                  <div className="h-[122px] w-[45vmax]  md:w-[476px] bg-white box_shadow rounded-xl p-8 ">
                    <h1 className="text-[27px] font-semibold">Select Salon</h1>
                    <p className="text-[12px] font-semibold opacity-30">explore top rated salons in your area with just a tap
                    </p>
                  </div>
                  <div className="h-[122px] w-[45vmax]  md:w-[476px] bg-white box_shadow rounded-xl p-8 ">
                    <h1 className="text-[27px] font-semibold">Booking Confirmed</h1>
                    <p className="text-[12px] font-semibold opacity-30">confirm your booking instantly with grabky
                    </p>
                  </div>
                </div>
                <div className=" w-[30vmax] md:w-[476px] pt-4 flex md:flex-row flex-col justify-start items-center">
                  <img className="w-[233px]" src={playstore} />
                  <img className="h-[120px]" src={applestore} />
                </div>
              </div>
              <div className="h-[451px] w-[40vmax] md:w-[401px] ml-6 md:ml-0 rounded-[30px] box_shadow">
                <div className="shadow-md bg-white w-full h-full rounded-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[130px] w-[30vmax] md:w-[65vmax]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center">
          <h1 className="text-[20px] font-bold pb-[50px] ">Trusted by top salons</h1>
          <Banner images={images} speed={6000} />
        </div>
        <div className="mt-[120px] flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-[650] text-center">Grow Your Business with Grabky</h1>
          <p className="text-[15px] font-semibold w-[90%] md:w-[40%] text-center pt-[10px]">"Unlock salon success effortlessly with Grabky. Streamline operations, attract more clients, and boost your business forward. Register today to elevate your salon's performance."</p>

          <div className=" w-full  mt-20">
            <div className="py-2 flex flex-col-reverse md:flex-row-reverse justify-center gap-[80px] items-start ">
              <div className="flex flex-col justify-start gap-0">
                <div className=" h-[451px] w-[30vmax] md:w-[476px] flex flex-col justify-between">
                  <div className="h-[122px] w-[45vmax]  md:w-[476px] bg-white box_shadow rounded-xl p-8 ">
                    <h1 className="text-[27px] font-semibold">Select Services</h1>
                    <p className="text-[12px] font-semibold opacity-30">Choose from a wide range of salon services personalized
                      for you.</p>
                  </div>
                  <div className="h-[122px] w-[45vmax]  md:w-[476px] bg-white box_shadow rounded-xl p-8 ">
                    <h1 className="text-[27px] font-semibold">Select Salon</h1>
                    <p className="text-[12px] font-semibold opacity-30">explore top rated salons in your area with just a tap
                    </p>
                  </div>
                  <div className="h-[122px] w-[45vmax]  md:w-[476px] bg-white box_shadow rounded-xl p-8 ">
                    <h1 className="text-[27px] font-semibold">Booking Confirmed</h1>
                    <p className="text-[12px] font-semibold opacity-30">confirm your booking instantly with grabky
                    </p>
                  </div>
                </div>
                <div className=" w-[] md:w-[28vmax] mt-14 flex md:flex-row flex-col justify-start gap-14 items-center">
                  <div className="w-[241px] h-[70px] bg-secondary flex justify-center items-center text-[20px] shadow-[6px_10px_0px_rgba(0,0,0,1)] rounded-full font-bold">Register Today</div>
                  <p className='text-[20px] opacity-50 font-medium md:flex hidden '>Learn More </p>
                </div>
              </div>
              <div className="h-[451px] w-[40vmax] md:w-[401px] ml-6 md:ml-0 rounded-[30px] box_shadow">
                <div className="shadow-md bg-white w-full h-full rounded-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[150px] w-[30vmax] md:w-[50vmax]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <h1 className="text-[20px] font-bold  text-center ">Our Happy Merchant’s</h1>
          <div className='pt-[30px] '>
            <MerchantCrousel />
          </div>
        </div>
        <div className="mt-[150px] flex flex-col justify-center">
          <h1 className="text-[30px] font-bold  text-center ">FAQ'S</h1>
          <div className='pt-[30px] ml-auto mr-auto left-1/2 right-1/2 '>
            <Faq />
          </div>
        </div>

        <div className="mt-[130px] w-[30vmax] md:w-[65vmax]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <h1 className="text-[30px] font-bold  text-center ">Customer Reviews</h1>
          <Review />
        </div>
        <div className="mt-[130px] w-[35vmax] sm:w-[65vmax]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <h1 className="text-[30px] font-bold  text-center ">Still have questions?</h1>
          <p className='text-[12px] text-primary font-medium'> Feel free to reach out to us</p>
          <button className="h-[24px] w-[90px] py-4 bg-secondary rounded-[4px] text-[15px]  flex justify-center items-center  font-medium mt-2"> Contact</button>
        </div>


        <div className="mt-[150px] w-[30vmax] md:w-[100vmax] hidden md:flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <div className="bg-secondary shadow-[0_4px_4px_rgba(0,0,0,.25)] w-[950px] h-[83px]  rounded-[13px] flex justify-between items-center px-6  ">
            <div className="w-[20vmax] text-[20px] font-bold">
              For better experience
              Download grabky app
            </div>
            <div className=" flex md:flex-row flex-col justify-start items-center">
              <img className="w-[233px]" src={playstore} />
              <img className="h-[120px]" src={applestore} />
            </div>
          </div>
        </div>

        <div className="mt-[130px] w-[30vmax] md:w-[65vmax]  flex justify-between flex-col md:flex-row ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <div className="flex flex-col justify-start">
            <h1 className="text-[54px] font-extrabold text-start">Grabky</h1>
            <div className="flex gap-8">
              <div className="text-start">
                <p className="text-[16px] font-bold mt-4 opacity-70">About Us</p>
                <p className="text-[16px] font-bold mt-4 opacity-70">Terms & Conditions</p>
                <p className="text-[16px] font-bold mt-4 opacity-70">Cookie Policy</p>
                <p className="text-[16px] font-bold mt-4 opacity-70">Find a salon</p>
              </div>
              <div className="text-start">
                <p className="text-[16px] font-bold mt-4 opacity-70">Contact</p>
                <p className="text-[16px] font-bold mt-4 opacity-70">Blog</p>
                <p className="text-[16px] font-bold mt-4 opacity-70">FAQ'S</p>
              </div>
            </div>
          </div>
          <div className="">
            <button className="h-[68px] w-[215px] py-4 bg-secondary rounded-[12px] text-[24px]  flex justify-center items-center  font-bold mt-2 shadow-[0_4px_4px_rgba(0,0,0,.25)] "> Partner Up</button>

            <div className=" mt-12">
              <p className="text-[16px] font-bold mt-4 text-start opacity-70">Social</p>

              <div className="flex gap-4 mt-4">
                <FaInstagram
                  size="1.5rem"
                />
                <RiWhatsappFill size="1.5rem" />
                <FaLinkedin size="1.5rem" />
                <FaFacebook size="1.5rem" />
                <FaTwitter size="1.5rem" />

              </div>
            </div>
          </div>
        </div>
        <div className="h-[160px]"></div>
      </div>
    </>
  )
}

export default Home

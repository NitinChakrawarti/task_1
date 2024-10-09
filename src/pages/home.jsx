import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { Banner } from "../components/Banner";
import MerchantCrousel from "../components/crousel.jsx"
import Faq from "../components/faq.jsx"
import Review from "../components/review.jsx"

const images = [
  "https://marketplace.canva.com/EAGGN4jLiEU/1/0/1600w/canva-black-and-cream-illustrative-hair-salon-logo-vkZoxxgOYCk.jpg",

  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/45-Hair-Salon-Logos-for-a-Fabulous-Brand-Identity/refined-salon-by-skippadouza-brandcrowd.png",
  "src/assets/tony guuy.jpg",
  "src/assets/lakme-vector-logo.png",
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
          <div className="card h-[358px] w-[291px] shadow-[0_4px_4px_rgba(0,0,0,.25)] bg-white  rounded-[30px]"></div>
          <div className="card h-[358px] w-[291px] shadow-[0_4px_4px_rgba(0,0,0,.25)] bg-white  rounded-[30px]"></div>
          <div className="card h-[358px] w-[291px] shadow-[0_4px_4px_rgba(0,0,0,.25)] bg-white  rounded-[30px]"></div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[150px]">
          <h1 className="text-[30px] font-[650]">Easy Step to transform your look</h1>
          <div className=" w-full  mt-20">
            <div className="py-2 flex justify-center gap-[80px] items-start ">
              <div className="flex flex-col justify-start gap-0">
                <div className=" h-[451px] w-[476px] flex flex-col justify-between">
                  <div className="h-[122px] w-[476px] bg-white box_shadow rounded-xl "></div>
                  <div className="h-[122px] w-[476px] bg-white box_shadow rounded-xl "></div>
                  <div className="h-[122px] w-[476px] bg-white box_shadow rounded-xl "></div>
                </div>
                <div className=" w-[476px] pt-4 flex md:flex-row flex-col justify-start items-center">
                  <img className="w-[233px]" src="src/assets/playstorepng-removebg-preview.png " />
                  <img className="h-[120px]" src="src/assets/applestorepng-removebg-preview.png" />
                </div>
              </div>
              <div className="h-[451px] w-[401px] rounded-[30px] box_shadow">
                <div className="shadow-md bg-white w-full h-full rounded-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[130px] w-[950px]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center">
          <h1 className="text-[20px] font-bold pb-[50px] ">Trusted by top salons</h1>
          <Banner images={images} speed={6000} />
        </div>
        <div className="mt-[120px] flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-[650] text-center">Grow Your Business with Grabky</h1>
          <p className="text-[15px] font-semibold w-[40%] text-center pt-[10px]">"Unlock salon success effortlessly with Grabky. Streamline operations, attract more clients, and boost your business forward. Register today to elevate your salon's performance."</p>

          <div className=" w-full  mt-20">
            <div className="py-2 flex flex-row-reverse justify-center gap-[80px] items-start ">
              <div className="flex flex-col justify-start gap-0">
                <div className=" h-[451px] w-[476px] flex flex-col justify-between">
                  <div className="h-[122px] w-[476px] bg-white box_shadow rounded-xl "></div>
                  <div className="h-[122px] w-[476px] bg-white box_shadow rounded-xl "></div>
                  <div className="h-[122px] w-[476px] bg-white box_shadow rounded-xl "></div>
                </div>
                <div className=" w-[476px] mt-14 flex md:flex-row flex-col justify-start gap-14 items-center">
                  <div className="w-[241px] h-[70px] bg-secondary flex justify-center items-center text-[20px] shadow-[6px_10px_0px_rgba(0,0,0,1)] rounded-full font-bold">Register Today</div>
                  <p className='text-[20px] opacity-50 font-medium '>Learn More </p>
                </div>
              </div>
              <div className="h-[451px] w-[401px] rounded-[30px] box_shadow">
                <div className="shadow-md bg-white w-full h-full rounded-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[150px]">
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
        {/* <div className="mt-[130px] w-[950px]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center">
          <h1 className="text-[30px] font-bold  text-center ">Customer Reviews</h1>

          <Review />

        </div> */}

        <div className="mt-[130px] w-[950px]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <h1 className="text-[30px] font-bold  text-center ">Customer Reviews</h1>
          <Review />
        </div>
        <div className="mt-[130px] w-[950px]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <h1 className="text-[30px] font-bold  text-center ">Still have questions?</h1>
          <p className='text-[12px] text-primary font-medium'> Feel free to reach out to us</p>
          <button className="h-[24px] w-[90px] py-4 bg-secondary rounded-[4px] text-[15px]  flex justify-center items-center  font-medium mt-2"> Contact</button>
        </div>


        <div className="mt-[150px] w-[950px]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <div className="bg-secondary shadow-[0_4px_4px_rgba(0,0,0,.25)] w-[950px] h-[83px]  rounded-[13px] flex justify-between items-center px-6  ">
            <div className="w-[240px] text-[20px] font-bold">
              For better experience
              Download grabky app
            </div>
            <div className=" flex md:flex-row flex-col justify-start items-center">
              <img className="w-[233px]" src="src/assets/playstorepng-removebg-preview.png " />
              <img className="h-[120px]" src="src/assets/applestorepng-removebg-preview.png" />
            </div>
          </div>
        </div>

        <div className="mt-[130px] w-[950px]  flex justify-center flex-col items-center ml-auto mr-auto left-[50%] right-[50%] text-center overflow-hidden">
          <h1 className="text-[30px] font-bold  text-center ">Customer Reviews</h1>
          <Review />
        </div>
      </div>
    </>
  )
}

export default Home

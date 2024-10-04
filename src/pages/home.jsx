import React, { useEffect, useState } from 'react'
// import { Carousel } from 'react-responsive-carousel';
const services = ['SALON', 'SPA', 'BEAUTY'];
const Home = () => {
  const [service, setService] = useState("SALON");
  let indeX = 0;
  useEffect(() => {
    setInterval(() => {
      suffle(services[indeX]);
      indeX = indeX + 1;
      if (indeX == "3") {
        indeX = 0;
      }
    }, 2000);
  })
  function suffle(val) {
    setService(val)
  };

  return (
    <>
      <div className="bg-bg_light mt-1">
        <div className="hero_section pt-[140px] text-primary flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-bold text-center font-primary">
            YOUR NEXT
            <span className=" w-[195px] px-4 inline-block text-start font-extrabold"> {service}</span>
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
      </div>
    </>
  )
}

export default Home

import React, { useState } from 'react';


function MerchantCrousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const merchants = [
        {
            review: "Grabky has truly changed the game for my salon. It's like having a reliable partner in my business journey.",
            name: "Diya Singh",
            designation: "Unisex Owner",
            merchantshop: "Starlon Unisex Salon"
        },
        {
            review: "Grabky has truly changed the game for my salon. It's like having a reliable partner in my business journey",
            name: "Diya Singh",
            designation: "Unisex Owner",
            merchantshop: "Starlon Unisex Salon"
        },
        {
            review: "Grabky has truly changed the game for my salon. It's like having a reliable partner in my business journey",
            name: "Diya Singh",
            designation: "Unisex Owner",
            merchantshop: "Starlon Unisex Salon"
        },
        {
            review: "Grabky has truly changed the game for my salon. It's like having a reliable partner in my business journey",
            name: "Diya Singh",
            designation: "Unisex Owner",
            merchantshop: "Starlon Unisex Salon"
        },
        {
            review: "Grabky has truly changed the game for my salon. It's like having a reliable partner in my business journey",
            name: "Diya Singh",
            designation: "Unisex Owner",
            merchantshop: "Starlon Unisex Salon"
        }
    ];

    const move_to_next = () => {
        setCurrentIndex((currentIndex) => (currentIndex > 0 ? currentIndex - 1 : merchants.length - 1));
    };

    setInterval(move_to_next, 5000)



    // const move_to_next = () => {
    //     setCurrentIndex((currentIndex) => (currentIndex < merchants.length - 1 ? currentIndex + 1 : 0));

    // };

    // setInterval(move_to_next , 5000 )

    return (
        <div className="relative ">

            <div className="-z-0 relative overflow-hidden w-full md:w-5/6 rounded-3xl  md:left-32 ">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {merchants.map((merchant, index) => (
                        <div key={index} className="flex-none w-full flex flex-col md:flex-col items-center justify-center ml-auto mr-auto left-[50%] right-[50%] ">
                            <div className='text-center font-bold flex justify-center items-center w-[50%] '>
                                <p className="text-[15px]"> {merchant.review} </p>
                            </div>
                            <div className="flex w-[25%] justify-between pt-6">
                                <div className="">
                                    <p className='text-[15px] font-medium text-justify'>
                                        {merchant.name}
                                    </p>
                                    <p className='text-[15px] font-regular'>
                                        {merchant.designation}
                                    </p>
                                </div>
                                <div className="text-[15px] font-medium">
                                    {merchant.merchantshop}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}


export default MerchantCrousel;
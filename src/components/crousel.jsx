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

    return (
    
        <div className='overflow-hidden relative'>
            <div className="flex ">
                <section className=" auto_scroll_brand_section h-[131px]  mt-10" style={{ "--speed": `${10000}ms` }} >
                    {merchants.map((merchant, index) => (
                        <div key={index} className="flex-none w-full flex flex-col md:flex-col items-center justify-center ml-12 ">
                            <div className='text-center font-bold flex justify-center items-center w-[60%]'>
                                <p className="text-[15px]"> {merchant.review} </p>
                            </div>
                            <div className="flex gap-8 justify-between pt-6">
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
                </section>
            </div>
        </div>



    )
}


export default MerchantCrousel;
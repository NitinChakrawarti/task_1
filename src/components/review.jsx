import React from 'react'
const Review = () => {



    const merchants = [
        {
            review: "Grabky has truly changed the game for my salon.",
            name: "Diya Singh",

        },
        {
            review: "Grabky has truly changed the game for my salon",
            name: "Diya Singh",

        },
        {
            review: "Grabky has truly changed the game for my salon",
            name: "Diya Singh",

        },
        {
            review: "Grabky has truly changed the game for my salon",
            name: "Diya Singh",

        },
        {
            review: "Grabky has truly changed the game for my salon. ",
            name: "Diya Singh",

        }
    ];

    return (

        <div className='overflow-hidden relative'>
            <div className="flex ">
                <section className=" auto_scroll_brand_section h-[131px]  mt-10" style={{ "--speed": `${8000}ms` }} >
                    {merchants.map((merchant, index) => (
                        <div key={index} className="w-[461px] h-[122px] box_shadow bg-white rounded-[13px] mr-20">
                            <div className='text-center font-medium flex justify-center items-center pt-6'>
                                <p className="text-[16px] "> {merchant.review} </p>
                            </div>
                            <div className="flex flex-col pr-6 text-end pt-2">
                                <p className='text-secondary text-[25px]'>&#9733; &#9733; &#9733; &#9733;&#9734;</p>
                                <p className='text-[15px] font-medium'>
                                    {merchant.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className=" auto_scroll_brand_section h-[131px]  mt-10" style={{ "--speed": `${8000}ms` }} >
                    {merchants.map((merchant, index) => (
                        <div key={index} className="w-[461px] h-[122px] box_shadow bg-white rounded-[13px] mr-20">
                            <div className='text-center font-medium flex justify-center items-center pt-6'>
                                <p className="text-[16px] "> {merchant.review} </p>
                            </div>
                            <div className="flex flex-col pr-6 text-end pt-2">
                                <p className='text-secondary text-[25px]'>&#9733; &#9733; &#9733; &#9733;&#9734;</p>
                                <p className='text-[15px] font-medium'>
                                    {merchant.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className=" auto_scroll_brand_section h-[131px]  mt-10" style={{ "--speed": `${8000}ms` }} >
                    {merchants.map((merchant, index) => (
                        <div key={index} className="w-[461px] h-[122px] box_shadow bg-white rounded-[13px] mr-20">
                            <div className='text-center font-medium flex justify-center items-center pt-6'>
                                <p className="text-[16px] "> {merchant.review} </p>
                            </div>
                            <div className="flex flex-col pr-6 text-end pt-2">
                                <p className='text-secondary text-[25px]'>&#9733; &#9733; &#9733; &#9733;&#9734;</p>
                                <p className='text-[15px] font-medium'>
                                    {merchant.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                

            </div>
        </div>



    )
}

export default Review





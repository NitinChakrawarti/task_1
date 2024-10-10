import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const Faq = () => {


    const exapandDropdown = () => {
        document.querySelector('#down').classList.toggle('hidden')
        document.querySelector('#up').classList.toggle('hidden')
        document.querySelector('.description').classList.toggle('hidden')
    }
    const shrinkdown = () => {
        document.querySelector('#down').classList.toggle('hidden')
        document.querySelector('#up').classList.toggle('hidden')
        document.querySelector('.description').classList.toggle('hidden')
    }
    const exapandDropdown2 = () => {
        document.querySelector('#down2').classList.toggle('hidden')
        document.querySelector('#up2').classList.toggle('hidden')
        document.querySelector('.description2').classList.toggle('hidden')
    }
    const shrinkdown2 = () => {
        document.querySelector('#down2').classList.toggle('hidden')
        document.querySelector('#up2').classList.toggle('hidden')
        document.querySelector('.description2').classList.toggle('hidden')
    }
    const exapandDropdown3 = () => {
        document.querySelector('#down3').classList.toggle('hidden')
        document.querySelector('#up3').classList.toggle('hidden')
        document.querySelector('.description3').classList.toggle('hidden')
    }
    const shrinkdown3 = () => {
        document.querySelector('#down3').classList.toggle('hidden')
        document.querySelector('#up3').classList.toggle('hidden')
        document.querySelector('.description3').classList.toggle('hidden')
    }
    const exapandDropdown4 = () => {
        document.querySelector('#down4').classList.toggle('hidden')
        document.querySelector('#up4').classList.toggle('hidden')
        document.querySelector('.description4').classList.toggle('hidden')
    }
    const shrinkdown4 = () => {
        document.querySelector('#down4').classList.toggle('hidden')
        document.querySelector('#up4').classList.toggle('hidden')
        document.querySelector('.description4').classList.toggle('hidden')
    }

    return (
        <div className='ml-auto mr-auto left-1/2 right-1/2 flex'>
            <div className=" w-[40vmax] md:w-[70vmax] h-auto bg-white box_shadow mt-10 pt-4 md:pt-10 border-[1px] border-primary/20 rounded-[14px] " >
                {/* <div className='flex justify-center items-center h-[100px] mb-10'>
                    <h1 className='text-[25px] font-bold'>Frequently Asked Questions</h1>
                </div> */}
                <div className='flex flex-col px-6 md:px-40 py-5'>
                    <div className='flex flex-row  justify-between ' onMouseEnter={exapandDropdown} onMouseLeave={shrinkdown}  >
                        <h1 className='text-[23px] font-medium'>How does it works ?</h1>
                        <div>
                            <MdKeyboardArrowDown size="30px" className='hidden' id='down' />
                            <MdKeyboardArrowUp size="30px"  id='up' />
                        </div>
                    </div>
                    <div className="">
                        <p className='text-[20px] pt-4 hidden description'>Grabky is a platform that helps you to manage your salon business. It helps you to manage your appointments, staff, inventory, and customer data.</p>
                    </div>
                </div>
                <div className='flex flex-col px-6 md:px-40 py-5'>
                    <div className='flex flex-row  justify-between ' onMouseEnter={exapandDropdown2} onMouseLeave={shrinkdown2}  >
                        <h1 className='text-[23px] font-medium'>How does it works ?</h1>
                        <div>
                            <MdKeyboardArrowDown size="30px" className='hidden' id='down2' />
                            <MdKeyboardArrowUp size="30px"  id='up2' />
                        </div>
                    </div>
                    <div className="">
                        <p className='text-[20px] pt-4 hidden description2'>Grabky is a platform that helps you to manage your salon business. It helps you to manage your appointments, staff, inventory, and customer data.</p>
                    </div>
                </div>
                <div className='flex flex-col px-6 md:px-40 py-5'>
                    <div className='flex flex-row  justify-between ' onMouseEnter={exapandDropdown3} onMouseLeave={shrinkdown3}  >
                        <h1 className='text-[23px] font-medium'>How does it works ?</h1>
                        <div>
                            <MdKeyboardArrowDown size="30px" className='hidden' id='down3' />
                            <MdKeyboardArrowUp size="30px"  id='up3' />
                        </div>
                    </div>
                    <div className="">
                        <p className='text-[20px] pt-4 hidden description3'>Grabky is a platform that helps you to manage your salon business. It helps you to manage your appointments, staff, inventory, and customer data.</p>
                    </div>
                </div>
                <div className='flex flex-col px-6 md:px-40 py-5'>
                    <div className='flex flex-row  justify-between ' onMouseEnter={exapandDropdown4} onMouseLeave={shrinkdown4}  >
                        <h1 className='text-[23px] font-medium'>How does it works ?</h1>
                        <div>
                            <MdKeyboardArrowDown size="30px" className='hidden' id='down4' />
                            <MdKeyboardArrowUp size="30px"  id='up4' />
                        </div>
                    </div>
                    <div className="">
                        <p className='text-[20px] pt-4 hidden description4'>Grabky is a platform that helps you to manage your salon business. It helps you to manage your appointments, staff, inventory, and customer data.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;

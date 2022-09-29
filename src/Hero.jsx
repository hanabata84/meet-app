import React from 'react'
import logo from './assets/meet-logo.svg'
import navBtn from './assets/nav-btn.svg'
import pip1 from './assets/people-1.png'
import pip2 from './assets/people-2.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div>
            <div className='2xl:ml-[740px] lg:ml-[330px] flex items-center justify-center w-[390px]'>
                <img className='lg:w-[150px] lg:h-[48px] w-[113px] h-[36px] mt-[50px]' src={logo} alt="/" />
            </div>
            <div className='2xl:flex-nowrap 2xl:w-[1920px] 2xl:h-[478px] lg:flex-wrap lg:w-[1040px] lg:h-[1035px] lg:mt-[89px] lg:mb-0 lg:flex lg:justify-between w-[390px] mt-[44px] mb-[62px] grid grid-cols-2 gap-4 gap-y-[60px] lg:gap-y-[0px]'>
                <img className='2xl:pb-[55px]' src={pip1} alt="/" />
                <img className='2xl:pt-[55px] 2xl:order-3' src={pip2} alt="/" />

                <div className='2xl:mt-0 2xl:w-[753px] 2xl:order-2 2xl:ml-0 2xl:justify-center lg:mt-[127px] lg:ml-[265px] lg:w-[538px] w-[390px] flex flex-col items-center'>
                    <h1 className='2xl:mt-[74px] 2xl:w-[585px] 2xl:text-[86px] lg:text-[65px] lg:leading-[75px] lg:w-[442px] text-[40px] text-darkPurple text-center font-extrabold font-heading leading-[45px] w-[272px]'>Group Chat for Everyone</h1>
                    <p className='2xl:my-[50px] 2xl:text-2xl lg:text-xl lg:mt-[35px] lg:mb-[45] lg:mx-[0px] text-center lg:leading-8 text-primaryGray font-semibold leading-7 mt-[25px] mb-[40px] mx-[22px]'>
                        Meet makes it easy to connect with others
                        face-to-face virtually and collaborate across
                        any device.
                    </p>

                    <div className='2xl:mb-0 lg:w-[474px] lg:justify-between lg:flex-row flex lg:mb-[133px] flex-col items-center'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='lg:w-[264px] lg:h-[70px] lg:text-xl w-[200px] h-[55px] bg-primaryBlue text-white rounded-[50px] font-heading font-bold hover:border hover:border-primaryBlue hover:bg-transparent hover:text-primaryBlue'
                            onClick={() => null}
                        >
                            Download <span className=' text-lightBlue'>v1.3</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='lg:w-[188px] lg:h-[70px] lg:text-xl lg:m-0 w-[147px] h-[55px] bg-primaryPurple text-white rounded-[50px] font-heading font-bold mt-[18px] mb-[70px] hover:border hover:border-primaryPurple hover:bg-transparent hover:text-primaryPurple'
                            onClick={() => null}
                        >
                            What is it?
                        </motion.button>
                    </div>
                </div>
            </div>
            <img
                className='2xl:mt-[130px] 2xl:ml-[900px] lg:ml-[480px] lg:h-[220px] lg:w-[82px] h-[160px] w-[60px] ml-[170px]'
                src={navBtn} alt="/"
            />

        </div>
    )
}

export default Hero
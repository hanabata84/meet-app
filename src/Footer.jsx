import React from 'react'
import { motion } from 'framer-motion'
import navBtn from './assets/nav-btn2.svg'

const Footer = () => {
    return (
        <div className='lg:mt-[180px] relative flex flex-col items-center mt-[120px]'>
            <img className='lg:top-[-180px] lg:h-[220px] lg:w-[82px] absolute h-[160px] w-[60px] top-[-130px]' src={navBtn} alt="/" />
            <div className='2xl:h-[521px] 2xl:w-[1920px] 2xl:bg-[top_-150px_left_-10px] lg:h-[628px] lg:w-[1024px] lg:bg-[top_left_-350px] h-[488px] w-[390px] bg-bgFooter bg-[top_left_-350px] bg-cover bg-no-repeat'  >
                <div className='2xl:flex-row 2xl:justify-between 2xl:px-[180px] 2xl:h-[521px] 2xl:w-[1920px] lg:h-[628px] lg:w-[1024px] flex flex-col items-center px-[35px] h-[488px] w-[390px] bg-blueOverlay'>
                    <h2 className='2xl:pt-[20px] 2xl:pb-0 2xl:text-left lg:pb-[50px] lg:leading-[65px] lg:w-[499px] lg:text-[56px] font-heading text-white text-[35px] leading-[43px] font-bold text-center pt-[124px] pb-[30px]'>Experience more together</h2>
                    <p className='2xl:text-2xl 2xl:pl-[132px] 2xl:pr-[100px] 2xl:text-left 2xl:mb-0 lg:mb-[50px] lg:w-[724px] lg:leading-[32px] lg:text-lg font-bold leading-[25px] text-white text-center mb-[35px]'>
                        Stay connected with reliable HD
                        meetings and unlimited one-on-one
                        and group video sessions.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='2xl:mb-[20px] lg:w-[270px] lg:h-[78px] lg:text-xl w-[200px] h-[58px] bg-primaryPurple text-white rounded-[50px] font-bold font-heading'>Download <span className=' text-lightPink'>v1.3</span></motion.button>
                </div>
            </div>

        </div>
    )
}

export default Footer
import React from 'react'
import card1 from './assets/card-1.png'
import card2 from './assets/card-2.png'
import card3 from './assets/card-3.png'
import card4 from './assets/card-4.png'

const Card = () => {
    const style = {
        mainCont: `2xl:mt-[99px] 2xl:w-[1542px]
            lg:w-[930px] lg:p-0 lg:mt-[78px]
            px-[30px] w-[390px] flex flex-col items-center mt-[72px]`,
        cardCont: `lg:grid-cols-4 lg:gap-4 grid grid-cols-2 gap-6`,
        text: `2xl:text-[28px] 2xl:font-extrabold lg:text-[22px]
            font-heading text-primaryBlue tracking-[0.15em] text-lg font-bold mt-[75px] mb-[27px]`,
        heading: `2xl:w-[631px] 2xl:text-[56px]
            lg:w-[586px] lg:text-[52px] lg:leading-[63px]
            font-heading text-darkPurple font-bold text-[32px] leading-[39px] text-center`,
        mainText: `2xl:text-2xl
            lg:w-[812px] lg:leading-[32px] lg:mb-[119px] lg:text-xl
            text-center text-primaryGray font-semibold leading-7 mt-[27px] mb-[85px]`
    }
    return (
        <div className={style.mainCont}>
            <div className={style.cardCont}>
                <img className='rounded-[15px]' src={card1} alt="/" />
                <img className='rounded-[15px]' src={card2} alt="/" />
                <img className='rounded-[15px]' src={card3} alt="/" />
                <img className='rounded-[15px]' src={card4} alt="/" />
            </div>
            <p className={style.text}>BUILT FOR MODERN USE</p>
            <h2 className={style.heading}>Smarter meetings, all in one place</h2>
            <p className={style.mainText}>
                Send messages, share files, show your
                screen, and record your meetings - all in one
                workspace. Control who can join with invite-
                only team access, data encryption, and data export.
            </p>
        </div>
    )
}

export default Card
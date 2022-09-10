import React from 'react';
import './Home.css';
import formImage from '../Assets/feedback-form-illustration.png';

const Home = () => {
    return (
        <div className='feedback__main w-full h-screen bg-center flex justify-center items-center'>
            <div className="container mx-auto">
                <div className="feedback__form w-[840px] mx-auto flex">
                    <div className="feedback__form__left w-[500px] px-14 py-11 bg-white">
                        <div className="feedback__form__left__main text-center">
                            <h1 className='heading text-[#2A385B] text-3xl leading-normal capitalize font-medium'>
                                Get Everything you need<br></br>
                                for creating wordpress<br></br>
                                website
                            </h1>
                            <img className='form__image my-6' src={formImage} alt="" />
                            <p className='feedback__form__bottom__text text-lg text-[#BBBEC8]'>
                                All-in-one Multifunctional subscribe <br></br>
                                service perfect for launching all kinds of <br></br>
                                wordpress projects
                            </p>
                        </div>
                    </div>
                    <div className="feedback__form__right w-[340px] p-12 py-11 bg-[#292E3F]">
                        <div className="form__title">
                             <p className='uppercase text-[#4BC7A7] text-2xl'>Subscribe and get your bonus!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
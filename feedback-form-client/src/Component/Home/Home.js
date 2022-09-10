import React from 'react';
import './Home.css';
import HomeLeft from './HomeLeft';


const Home = () => {
    return (
        <div className='feedback__main'>
            <div className="container">
                <div className="feedback__form">
                    <HomeLeft></HomeLeft>
                    <div className="feedback__form__right">
                        <div className="feedback__form__right__content">
                            <div className="form__title">
                                <p className='uppercase text-[#4BC7A7] text-2xl'>Subscribe and get your bonus!</p>
                            </div>
                            <form className='mt-10'>
                                <div className="form__input my-4">
                                    <input className='px-4 py-3 outline-0 w-full rounded bg-[#494D5C] text-[#999EAB]' placeholder='Email address' type="email" name="" id="" />
                                </div>
                                <div className="form__input my-4">
                                    <input className='px-4 py-3 outline-0 w-full rounded bg-[#494D5C] text-[#999EAB]' placeholder='First name' type="text" name="" id="" />
                                </div>
                                <div className="form__input my-4">
                                    <input className='px-4 py-3 outline-0 w-full rounded bg-[#494D5C] text-[#999EAB]' type="text" placeholder='Last name' name="" id="" />
                                </div>
                                <div className="form__input my-4">
                                    <input className='px-4 py-3 outline-0 w-full rounded bg-[#494D5C] text-[#999EAB]' type="text" placeholder='Address' name="" id="" />
                                </div>
                                <div className="form__input my-4">
                                    <button className='py-4 px-8'>Stay Updated</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
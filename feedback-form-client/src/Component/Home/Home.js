import React from 'react';
import './Home.css';
import HomeLeft from './HomeLeft';
import formImage from '../Assets/feedback__form__image__02.png';

const Home = () => {
    return (
        <div className='feedback__main'>
            <div className="container">
                <div className="feedback__form">
                    <div className="feedback__form__left">
                        <div className="feedback__form__left__main">
                            <h1 className='heading'>
                                Get Everything you need<br></br>
                                for creating wordpress<br></br>
                                website
                            </h1>
                            <img className='form__image' src={formImage} alt="" />
                            <p className='feedback__form__bottom__text'>
                                All-in-one Multifunctional subscribe <br></br>
                                service perfect for launching all kinds of <br></br>
                                wordpress projects
                            </p>
                        </div>
                    </div>
                    <div className="feedback__form__right">
                        <div className="feedback__form__right__content">
                            <div className="form__title">
                                <p>Subscribe and get your bonus!</p>
                            </div>
                            <form className='form__main'>
                                <div className="form__input">
                                    <input placeholder='Email address' type="email" name="" id="" />
                                </div>
                                <div className="form__input">
                                    <input placeholder='First name' type="text" name="" id="" />
                                </div>
                                <div className="form__input">
                                    <input type="text" placeholder='Last name' name="" id="" />
                                </div>
                                <div className="form__input">
                                    <input type="text" placeholder='Address' name="" id="" />
                                </div>
                                
                                <div className="form__input">
                                    <button className='update__button'>Stay Updated</button>
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
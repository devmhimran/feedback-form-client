import React from 'react';
import formImage from '../Assets/feedback__form__image__02.png';

const HomeLeft = () => {
    return (
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
    );
};

export default HomeLeft;
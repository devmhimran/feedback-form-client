import React from 'react';
import './Home.css';
import HomeLeft from './HomeLeft';
import toast, { Toaster } from 'react-hot-toast';
import { RiLock2Fill } from 'react-icons/ri';

const Home = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const address = e.target.address.value;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const d = new Date();
        
        const formData = {
            email,
            firstName,
            lastName,
            address,
            date: d.toLocaleDateString("en-US", options)
        };

        fetch('https://feedback-form-server-clone.vercel.app/feedback-form', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Successfully Added!')
                } else {
                    toast.error("Something went wrong!")
                }
            })
            e.target.reset();
    }
    return (
        <div className='feedback__main'>
            <div className="container">
                <div className="feedback__form">
                    <HomeLeft></HomeLeft>
                    <div className="feedback__form__right">
                        <div className="feedback__form__right__content">
                            <div className="form__title">
                                <p>Subscribe and get your bonus!</p>
                            </div>
                            <form className='form__main' onSubmit={handleForm}>
                                <div className="form__input">
                                    <input placeholder='Email address' type="email" name="email" required/>                                 
                                </div>
                                <div className="form__input">
                                    <input placeholder='First name' type="text" name="firstName" required/>
                                </div>
                                <div className="form__input">
                                    <input type="text" placeholder='Last name' name="lastName" required/>
                                </div>
                                <div className="form__input">
                                    <input type="text" placeholder='Address' name="address" required/>
                                </div>
                                <div className="form__input">
                                    <button type='submit' name='updateBtn' className='update__button'>Stay Updated</button>
                                </div>
                            </form>
                            <div className="form__footer">
                                <div className="footer__icon">
                                   <RiLock2Fill></RiLock2Fill>
                                </div>
                                <div className="footer__text">
                                    your information will never be shared with any third party
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Home;
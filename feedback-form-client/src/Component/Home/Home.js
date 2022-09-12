import React from 'react';
import './Home.css';
import HomeLeft from './HomeLeft';
import formImage from '../Assets/feedback__form__image__02.png';

const Home = () => {
    const handleForm = (e)=>{
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
        }
        fetch('http://localhost:5000/feedback-form', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        // fetch('http://localhost:5000/feedback-form', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // }).then(res => res.json())
        // .then(body => console.log(body))
        console.log(formData)
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
                                    <input placeholder='Email address' type="email" name="email" />
                                </div>
                                <div className="form__input">
                                    <input placeholder='First name' type="text" name="firstName" />
                                </div>
                                <div className="form__input">
                                    <input type="text" placeholder='Last name' name="lastName" />
                                </div>
                                <div className="form__input">
                                    <input type="text" placeholder='Address' name="address" />
                                </div>
                                
                                <div className="form__input">
                                    <button type='submit' name='updateBtn' className='update__button'>Stay Updated</button>
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
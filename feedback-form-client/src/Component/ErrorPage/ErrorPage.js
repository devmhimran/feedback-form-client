import React from 'react';
import './ErrorPage.css';
import error from '../Assets/error.gif';

const ErrorPage = () => {
    return (
        <div>
            <div className="error__animation">
                <img src={error} alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;
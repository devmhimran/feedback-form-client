import React, { useEffect, useState } from 'react';
import './FormAllData.css';

const FormAllData = () => {
    const [formData, setFormData] = useState([]);
    useEffect(() => {
        fetch('https://feedback-form-server.vercel.app/form-all-data')
            .then(res => res.json())
            .then(data => setFormData(data))
    }, [])

    console.log(formData)
    return (
        <div className='container form__all__data'>
            <h1 className='form__all__data__heading'>Form All Data</h1>
            <table className='table__main'>
                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Date</th>
                </tr>
                {
                    formData.map(allData => 
                        <tr>
                            <td>{allData.email}</td>
                            <td>{allData.firstName}</td>
                            <td>{allData.lastName}</td>
                            <td>{allData.address}</td>
                            <td>{allData.date}</td>
                        </tr>)
                }
            </table>
        </div>
    );
};

export default FormAllData;
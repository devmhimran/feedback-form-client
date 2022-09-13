import React, { useEffect, useState } from 'react';

const FormAllData = () => {
    const [formData, setFormData] = useState([]);
    useEffect(()=>{
        fetch('https://feedback-form-server.vercel.app/form-all-data')
        .then(res => res.json())
        .then(data => setFormData(data))
    },[])

    console.log(formData)
    return (
        <div>
            
        </div>
    );
};

export default FormAllData;
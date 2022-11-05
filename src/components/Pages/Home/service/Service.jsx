import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleService from './SingleService';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className=' text-custom-orange'>Service</h2>
                <h2 className=" text-dark-01 text-2xl font-bold">Our Service Area</h2>
                <p className='text-dark-03'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    service.map(sv => <SingleService key={sv._id} service={sv}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;
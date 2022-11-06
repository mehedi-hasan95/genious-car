import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id, title, img, price} = service;
    return (
        <div className='border rounded-xl p-5'>
            <img src={img} alt="" />
            <div>
                <h2 className="text-2xl text-dark-02 font-bold">
                    {title}
                </h2>
                <div className='flex justify-between'>
                    <h4 className='text-xl text-custom-orange font-semibold'>Price: ${price}</h4>
                    <Link to={`/services/${_id}`} className='text-2xl text-custom-orange'>Get Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
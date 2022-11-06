import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {price, title, img, description, _id} = useLoaderData();
    return (
        <div className='container mx-auto'>
            <img src={img} alt="" />
            <h2 className='text-2xl font-bold text-dark-02'>{title}</h2>
            <p>{description}</p>
            <h3 className='text-xl text-custom-orange'>Total Price: {price}</h3>
            <Link to={`/checkout/${_id}`} className='bg-custom-orange text-white font-semibold px-3 py-2 rounded-md inline-block mt-5'>Buy Now</Link>
        </div>
    );
};

export default ServiceDetails;
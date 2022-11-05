import React from 'react';

const SingleService = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className='border rounded-xl p-5'>
            <img src={img} alt="" />
            <div>
                <h2 className="text-2xl text-dark-02 font-bold">
                    {title}
                </h2>
                <div className='flex justify-between'>
                    <h4 className='text-xl text-custom-orange font-semibold'>Price: ${price}</h4>
                    <button className='text-2xl text-custom-orange'>Get Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
import React from 'react';
import errorImage from '../../../assets/images/error/Frame.png'

const Error = () => {
    return (
        <div className='container mx-auto justify-center items-center flex'>
            <img src={errorImage} alt="" />
        </div>
    );
};

export default Error;
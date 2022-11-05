import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg';
import img2 from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='relative  mb-[150px] lg:mb-40'>
                <img className='w-[400px]' src={img1} alt="" />
                <img className='w-[400px] absolute top-1/2 left-1/3' src={img2} alt="" />
            </div>
            <div>
                <h4 className='text-custom-orange text-lg'>About Us</h4>
                <h2 className=' text-dark-01 text-4xl font-bold'>We are qualified & of experience in this field</h2>
                <p className=" text-dark-03">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className=" text-dark-03">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button type="button" className="px-8 py-3 font-semibold border-0 rounded bg-custom-orange text-lg text-white">Discover More</button>
            </div>
        </div>
    );
};

export default About;
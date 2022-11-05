import React from 'react';
import About from './About';
import Hero from './Hero';
import Service from './service/Service';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;
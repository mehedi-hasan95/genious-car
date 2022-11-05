import React from 'react';
import './HeroItems.css'

const HeroItems = ({ slide }) => {
    const { image, prev, next, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="img-gradient relative">
                <img src={image} className="w-full  rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-16 top-1/4 text-3xl md:text-4xl lg:text-6xl font-bold text-white">
                <h2>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h2>
            </div>
            <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-16 top-2/4 text-lg text-white">
                <p>There are many variations of passages of  available, but <br />
                    the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-16 top-3/4">
                <button type="button" className="px-8 py-3 font-semibold border-0 rounded bg-custom-orange text-lg text-white">Discover More</button>
                <button type="button" className="px-8 py-3 font-semibold border rounded border-dark-02 text-lg text-white">Latest Project</button>
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default HeroItems;
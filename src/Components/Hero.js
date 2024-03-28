import React from 'react';

function Hero(props) {
    return (
        <div className={"text-white"}>
            <div className={"max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"}>
                <p className={"uppercase text-[#00df9a] font-bold p-2"}>Grow With Data Analytics</p>
                <h1 className={"md:text-7xl sm:text-6xl font-bold md:py-6"}>Grow with data.</h1>
                <div>
                    <p className={"md:text-5xl sm:text-4xl text-xl font-bold"}>Fast, Flexible Financing For</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;

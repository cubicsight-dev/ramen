import React from 'react'

export const Hero = () => {
    return (
        <section id="hero" className="bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(./home/hero/bg.jpg)'}}>
            <div className="py-10 min-h-screen flex flex-col-reverse sm:flex-row justify-center items-center gap-6 custom-container">
                <div className="w-full sm:w-1/2">
                    <h1 className="text-3xl text-center font-semibold mb-8 md:text-5xl sm:text-left">We’re Crazy About <span className="text-red-700">Ramen!</span></h1>
                    <p className="text-lg text-center mb-5 sm:text-left"><span className="font-semibold text-3xl">JINYA</span> is known for its slow-cooked approach to ramen, made from broths simmered for 20 hours in-house.</p>
                    <a href="#menu" className="border-red-700 border-2 border-solid rounded-md text-lg p-2 bg-transparent hover:bg-red-700 transition ease-in-out duration-300 delay-100  flex mx-auto sm:block sm:mx-0 w-max">View our menu</a>
                </div>
                <img src="./home/hero/ramen.png" alt="" className="w-1/2" />
            </div>
        </section>
    )
}

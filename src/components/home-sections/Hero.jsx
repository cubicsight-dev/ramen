import React from "react";

export const Hero = ({data:{main_desc = ''} = {}}) => {
  return (
    <section
      id="hero"
      className="bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(./home/hero/bg.jpg)" }}
    >
      <div className="custom-container flex min-h-screen flex-col-reverse items-center justify-center gap-6 py-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <h1 className="mb-8 text-center text-3xl font-semibold sm:text-left md:text-5xl">
            We’re Crazy About <span className="text-red-700">Ramen!</span>
          </h1>
          <p className="mb-5 text-center text-lg sm:text-left">
            {/* <span className="text-3xl font-semibold">JINYA</span> is known for
            its slow-cooked approach to ramen, made from broths simmered for 20
            hours in-house. */}
            {main_desc}
          </p>
          <a
            href="#menu"
            className="mx-auto flex w-max rounded-md border-2 border-solid border-red-700 bg-transparent p-2 text-lg transition delay-100  duration-300 ease-in-out hover:bg-red-700 sm:mx-0 sm:block"
          >
            View our menu
          </a>
        </div>
        <img src="./home/hero/ramen.png" alt="" className="w-1/2" />
      </div>
    </section>
  );
};

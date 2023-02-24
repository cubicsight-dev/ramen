export const HowWeDo = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(./home/how-we-do/how-we-do-bg.jpg)" }}
    >
      <div className="custom-container py-10">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="my-auto w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 h-max text-4xl">
              Fresh Ingredients,{" "}
              <span className="font-semibold italic text-red-700">
                Superior
              </span>{" "}
              Quality
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              corporis eveniet, itaque aut eligendi quas?
            </p>
          </div>
          <img
            className="mx-auto w-10/12 border-t-8 border-solid border-red-700 md:w-1/2"
            src="./home/how-we-do/video-how-we-do.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

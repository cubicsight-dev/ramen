
export const HowWeDo = () => {
    return (
        <section id="about" className="bg-center bg-cover bg-fixed scroll-mt-20" style={{backgroundImage: 'url(./home/how-we-do/how-we-do-bg.jpg)'}}>
            <div className="py-10 custom-container">
                <div className="flex gap-5 flex-col md:flex-row">
                    <div className="w-full text-center md:text-left md:w-1/2 my-auto">
                        <h2 className="text-4xl h-max mb-4">Fresh Ingredients, <span className="text-red-700 font-semibold italic">Superior</span> Quality</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis eveniet, itaque aut eligendi quas?</p>
                    </div>
                    <img className="w-10/12 mx-auto md:w-1/2 border-solid border-t-8 border-red-700" src="./home/how-we-do/video-how-we-do.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

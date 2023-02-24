import { GoLocation } from 'react-icons/go'
import { FaRegClock } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'

export const Contact = () => {
    return (
        <section id="contact" className="bg-black">
            <div className="py-10 custom-container">
                <div className="flex items-center flex-col-reverse gap-5 md:gap-0 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-center text-4xl mb-6 md:text-left"><span className="text-red-700 font-bold">Hurry!</span>, visit us now</h1>
                        <ul className="my-auto">
                            <li className="flex gap-3 mb-4">
                                <GoLocation className="text-2xl"/>
                                <p className="w-3/4">Corniche Rd Radisson Blu Hotel & Resort, Abu Dhabi, UAE</p>
                            </li>
                            <li className="flex gap-3 mb-4 items-center">
                                <FaRegClock className="text-2xl"/>
                                <div>
                                    <p>Monday - Friday 11am to 11:30pm</p>
                                    <p>Saturday - Sunday 12am to 12:30pm</p>
                                </div>
                            </li>
                            <li className="flex gap-3 mb-4">
                                <BsTelephone className="text-2xl"/>
                                <p> 000 000 0000</p>
                            </li>
                            <li className="flex gap-5 mt-10">
                                <a href="https://www.facebook.com" target="_blank">
                                    <img className="w-8" src="./social-media-icons/facebook.png" alt="https://www.facebook.com" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank">
                                    <img className="w-8" src="./social-media-icons/instagram.png" alt="https://www.instagram.com" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank">
                                    <img className="w-8" src="./social-media-icons/twitter.png" alt="https://www.twitter.com" />
                                </a>
                                <a href="https://www.youtube.com" target="_blank">
                                    <img className="w-8" src="./social-media-icons/youtube.png" alt="https://www.youtube.com" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-9/12 md:w-1/2">
                        <img className="w-3/4 mx-auto" src="./home/contact/contact-bg.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

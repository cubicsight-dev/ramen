import { GoLocation } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

export const Contact = () => {
  return (
    <section id="contact" className="bg-black">
      <div className="custom-container py-10">
        <div className="flex flex-col-reverse items-center gap-5 md:flex-row md:gap-0">
          <div className="w-full md:w-1/2">
            <h1 className="mb-6 text-center text-4xl md:text-left">
              <span className="font-bold text-red-700">Hurry!</span>, visit us
              now
            </h1>
            <ul className="my-auto">
              <li className="mb-4 flex gap-3">
                <GoLocation className="text-2xl" />
                <p className="w-3/4">
                  Corniche Rd Radisson Blu Hotel & Resort, Abu Dhabi, UAE
                </p>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <FaRegClock className="text-2xl" />
                <div>
                  <p>Monday - Friday 11am to 11:30pm</p>
                  <p>Saturday - Sunday 12am to 12:30pm</p>
                </div>
              </li>
              <li className="mb-4 flex gap-3">
                <BsTelephone className="text-2xl" />
                <p> 000 000 0000</p>
              </li>
              <li className="mt-10 flex gap-5">
                <a href="https://www.facebook.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/facebook.png"
                    alt="https://www.facebook.com"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/instagram.png"
                    alt="https://www.instagram.com"
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/twitter.png"
                    alt="https://www.twitter.com"
                  />
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/youtube.png"
                    alt="https://www.youtube.com"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-9/12 md:w-1/2">
            <img
              className="mx-auto w-3/4"
              src="./home/contact/contact-bg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

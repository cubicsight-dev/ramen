import { GoLocation } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { useGlobalData } from "@/context/context";

export const Contact = () => {
    const {globalData, setGlobalData} = useGlobalData()
    const { company = {}, cmsPath = ''} = globalData

    const {
        location = '', 
        mobile_number = '', 
        opening_hours = [],
        facebook_link = '',
        instagram_link = '',
        twitter_link = '',
        youtube_link = '',
        store_img = ''
    } = company

    let storeImg = store_img?.data?.attributes?.url ?? ''
    storeImg = `${cmsPath}${storeImg}`
    // console.log(storeImg)
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
                  {location}
                </p>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <FaRegClock className="text-2xl" />
                <div>
                    {opening_hours.map(({opening_hours}, key) => (<p key={key}>{opening_hours}</p>))}
                  {/* <p>Monday - Friday 11am to 11:30pm</p>
                  <p>Saturday - Sunday 12am to 12:30pm</p> */}
                </div>
              </li>
              <li className="mb-4 flex gap-3">
                <BsTelephone className="text-2xl" />
                <p>{mobile_number}</p>
              </li>
              <li className="mt-10 flex gap-5">
                <a href={facebook_link} target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/facebook.png"
                    alt={facebook_link}
                  />
                </a>
                <a href={instagram_link} target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/instagram.png"
                    alt={instagram_link}
                  />
                </a>
                <a href={twitter_link} target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/twitter.png"
                    alt={twitter_link}
                  />
                </a>
                <a href={youtube_link} target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/youtube.png"
                    alt={youtube_link}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-9/12 md:w-1/2">
            <img
              className="mx-auto w-3/4"
              src={storeImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

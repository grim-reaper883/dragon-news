import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2 rounded-lg">
      <p className="bg-red-600 text-white px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="">
        <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, magni!</Link>
        <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, magni!</Link>
        <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, magni!</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
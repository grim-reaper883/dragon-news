import { useState } from 'react';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    image_url,
    details,
    author,
    total_view,
    rating
  } = news;

  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => setShowFullText(!showFullText);

  return (
    <div className="card bg-base-100 shadow-md border rounded-lg">
      {/* Author Info */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{new Date(author.published_date).toDateString()}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <button><i className="ri-bookmark-line" /></button>
          <button><i className="ri-share-line" /></button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img src={image_url} alt="news" className="w-full rounded-md" />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {showFullText ? details : `${details.slice(0, 200)}...`}
        {details.length > 200 && (
          <span
            onClick={toggleReadMore}
            className="text-blue-500 font-semibold cursor-pointer ml-1"
          >
            {showFullText ? ' Show Less' : ' Read More'}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="font-medium">{rating.number}</span>
          <span className="text-gray-400">({rating.badge})</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

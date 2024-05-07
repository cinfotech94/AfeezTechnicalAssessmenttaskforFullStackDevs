import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const {
    title,
    year,
    rated,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    ratings,
    metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    type,
    dvd,
    boxOffice,
    production
  } = data;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50">
        <button className="absolute top-0 right-0 mt-2 mr-2" onClick={onClose}>
        <svg className="w-6 h-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="red">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="flex">
          <img src={poster} alt={title} className="w-48 h-auto mr-8" />
          <div>
            <p className="text-red-500"><span className="font-semibold text-black">Year:</span> {year}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Rated:</span> {rated}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Released:</span> {released}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Runtime:</span> {runtime}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Genre:</span> {genre}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Director:</span> {director}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Writer:</span> {writer}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Actors:</span> {actors}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Plot:</span> {plot}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Language:</span> {language}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Country:</span> {country}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Awards:</span> {awards}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Metascore:</span> {metascore}</p>
            <p className="text-red-500"><span className="font-semibold text-black">IMDb Rating:</span> {imdbRating}</p>
            <p className="text-red-500"><span className="font-semibold text-black">IMDb Votes:</span> {imdbVotes}</p>
            <p className="text-red-500"><span className="font-semibold text-black">IMDb ID:</span> {imdbID}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Type:</span> {type}</p>
            <p className="text-red-500"><span className="font-semibold text-black">DVD:</span> {dvd}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Box Office:</span> {boxOffice}</p>
            <p className="text-red-500"><span className="font-semibold text-black">Production:</span> {production}</p>
            {/* Ratings */}
            <div>
              <span className="font-semibold">Ratings:</span>
              {ratings.map((rating, index) => (
                <p key={index}>{rating.source}: {rating.value}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

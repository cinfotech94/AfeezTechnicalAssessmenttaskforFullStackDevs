import React, { useState } from 'react';
import Modal from './../components/Modal';

const SearchMusic = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [page, setPage] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [showSearchForm, setShowSearchForm] = useState(true);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const queryParams = new URLSearchParams({
      Title: title,
      Year: year,
      Type: type,
      Page: page
    });

    try {
      const response = await fetch(`https://localhost:7223/TechnicalAssesment/SearchMusicMovieSeries?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Search results:', data);
        setSearchResults(data);
        setShowSearchForm(false);
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleCloseResults = () => {
    setSearchResults(null);
    setShowSearchForm(true);
  };
  const handleClickItem = async (result) => {
    const url = `https://localhost:7223/TechnicalAssesment/GetMusicMovieSeries?Title=${result.title}&Year=${result.year}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setModalData(data);
        setIsModalOpen(true);
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again later.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-center">SEARCH PAGE</h1>
      </div>

      {showSearchForm && (
        <div>
          <p className="bg-gray-700 px-4 py-2 rounded">Search your Movie, Music and Series</p>

          <form className="mt-8 w-full max-w-xs" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="Title" className="block text-sm mb-2">* Title Of the Movie, Music and Series</label>
              <input
                type="text"
                id="Title"
                name="Title"
                placeholder="*Required Title Of the Movie, Music and Series"
                className="w-full px-4 py-2 rounded border border-gray-400"
                value={title}
                style={{ color: 'black' }}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Type" className="block text-sm mb-2">Available values: movie, series, episode</label>
              <select
                id="Type"
                name="Type"
                className="w-full px-4 py-2 rounded border border-gray-400"
                value={type}
                style={{ color: 'black' }}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">*Not Required</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
              </select>
            </div>


            <div className="mb-4">
              <label htmlFor="Year" className="block text-sm mb-2">Year Released</label>
              <input
                type="date"
                id="Year"
                name="Year"
                placeholder="Year Released"
                className="w-full px-4 py-2 rounded border border-gray-400"
                value={year}
                style={{ color: 'black' }}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Page" className="block text-sm mb-2">Page number to return</label>
              <input
                type="number"
                id="Page"
                name="Page"
                placeholder="Page number"
                className="w-full px-4 py-2 rounded border border-gray-400"
                value={page}
                style={{ color: 'black' }}
                onChange={(e) => setPage(e.target.value)}
                min={1}
                max={100}
              />?
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">Search</button>
          </form>
        </div>
      )}
 {searchResults && (
        <div className="mt-8 w-full max-w-xs">
          {searchResults.response === 'True' ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              <ul>
                {searchResults.search.map((result) => (
                  <li key={result.imdbID} className="mb-4">
                    <button className="focus:outline-none" onClick={() => handleClickItem(result)}>
                      <div className="flex items-center">
                        <img src={result.poster} alt={result.title} className="w-24 h-32 mr-4" />
                        <div>
                          <p className="text-lg font-semibold">{result.title}</p>
                          <p className="text-sm">{result.year}</p>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No results found.</p>
          )}
          <button onClick={handleCloseResults} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full mt-4">Close Results</button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
    </div>
  );
};

export default SearchMusic;
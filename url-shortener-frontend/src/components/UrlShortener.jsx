import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); // Obtener el token CSRF
      const response = await axios.post('http://localhost:8000/api/urls', 
        { original_url: originalUrl },
        { headers: { 'X-CSRF-TOKEN': token } }
      );
      setShortUrl(response.data.short_url);
      setError('');
    } catch (error) {
      console.error(error);
      setError('Failed to shorten URL');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter your URL"
          required
          className="w-6 h-2"
        />
        <button type="submit" className="w-4">Create</button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL: <a href={`http://localhost:8000/${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <p>By: Juan Acevedo</p>
    </div>
  );
};

export default UrlShortener;

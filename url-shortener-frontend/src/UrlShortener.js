import axios from 'axios';
import { useState } from 'react';

function UrlShortener() {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/urls', { url });
            setShortenedUrl(response.data.short_code);
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortenedUrl && <p>Shortened URL: {shortenedUrl}</p>}
        </div>
    );
}

export default UrlShortener;


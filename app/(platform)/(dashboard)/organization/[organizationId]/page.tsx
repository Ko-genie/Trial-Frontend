"use client";

import { useState } from 'react';

const OrganizationIdPage = () => {
    const [url, setUrl] = useState('');
    const [adCopy, setAdCopy] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Basic URL validation
        if (!url || !url.startsWith('http')) {
            setError('Please enter a valid URL.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/generateAd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to generate ad');
            }

            const data = await response.json();
            setAdCopy(data.adCopy);
            setImageUrl(data.imageUrl);
        } catch (err) {
            setError(err.message || 'An error occurred while generating the ad.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Organization Ad Generator</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter Product URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" style={{ marginLeft: '10px', padding: '10px 20px' }}>
                    {loading ? 'Generating...' : 'Generate Ads'}
                </button>
            </form>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {adCopy && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Ad Copy:</h2>
                    <p>{adCopy}</p>
                </div>
            )}

            {/* Uncomment this section if you want to display the generated image */}
            {/* {imageUrl && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Generated Image:</h2>
                    <img src={`http://localhost:8000/${imageUrl}`} alt="Generated Ad" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )} */}
        </div>
    );
};

export default OrganizationIdPage;

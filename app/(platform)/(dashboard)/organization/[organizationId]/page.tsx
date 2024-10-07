"use client";

import { useState, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useAdStore } from '@/store/useAdStore';  // Import the store

const OrganizationIdPage = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { organizationId } = useParams();
    const setAdData = useAdStore((state) => state.setAdData); // Get the setter from the store

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);
      
        console.log('URL Submitted:', url);
      
        if (!url || !url.startsWith('http')) {
          setError('Please enter a valid URL.');
          setLoading(false);
          return;
        }
      
        try {
          const response = await fetch('http://localhost:5001/createAd', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
          });
      
          const data = await response.json();
          console.log('Received Data from Backend:', data);
          
          // Set the ad data in the global store
          setAdData(data);

          // Navigate to the createAd page
          router.push(`/organization/${organizationId}/createAd`);
        } catch (err) {
          setError((err as Error).message || 'An error occurred while scraping and generating the ad.');
        } finally {
          setLoading(false);
        }
    };
      
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Generate AI-Powered Ads</h1>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter Product URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ padding: '10px', width: '300px' }}
                />
                <Button variant="primary" style={{ marginLeft: '10px', padding: '10px 20px' }}>
                    {loading ? 'Processing...' : 'Generate Ads'}
                </Button>
            </form>

            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default OrganizationIdPage;

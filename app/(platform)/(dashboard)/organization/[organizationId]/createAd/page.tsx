"use client";

import React, { useState, useEffect, ChangeEvent, CSSProperties } from 'react';
import { useAdStore } from '@/store/useAdStore';

const CreateAdPage = () => {
  const adDataFromStore = useAdStore((state) => state.adData); // Get data from store
  const [adData, setAdData] = useState({
    brandName: '',
    productName: '',
    productDescription: '',
    adCopy: ''
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (adDataFromStore) {
      setAdData(adDataFromStore); // Set initial ad data from the store
    }
  }, [adDataFromStore]);

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  if (!isMounted) return <div>Loading...</div>;

  // Dynamic styling based on adData changes
  const inputStyle = (value: string): CSSProperties => ({
    border: value ? '1px solid green' : '1px solid red', // Green if field has text, red otherwise
    padding: '10px',
    width: '100%',
    borderRadius: '4px',
    marginBottom: '10px'
  });

  const textAreaStyle: CSSProperties = {
    ...inputStyle(adData.productDescription), // Provide a default value for the text area style
    minHeight: '200px', // Increase height of text areas
    resize: 'none' as 'none' // Explicitly type the resize property
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Create Ad for Organization</h1>

      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>Brand Name:</label>
        <input
          type="text"
          name="brandName"
          value={adData.brandName}
          onChange={handleInputChange}
          style={inputStyle(adData.brandName)}  // Dynamic style
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>Product Name:</label>
        <input
          type="text"
          name="productName"
          value={adData.productName}
          onChange={handleInputChange}
          style={inputStyle(adData.productName)}  // Dynamic style
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>Product Description:</label>
        <textarea
          name="productDescription"
          value={adData.productDescription}
          onChange={handleInputChange}
          style={{ ...textAreaStyle, minHeight: '200px' }}  // Larger height for Product Description
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>Ad Copy:</label>
        <textarea
          name="adCopy"
          value={adData.adCopy}
          onChange={handleInputChange}
          style={{ ...textAreaStyle, minHeight: '200px' }}  // Larger height for Ad Copy
        />
      </div>
    </div>
  );
};

export default CreateAdPage;
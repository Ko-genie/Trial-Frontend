"use client";

import { useAdStore } from '@/store/useAdStore';  // Import the store

const CreateAdPage = () => {
  const adData = useAdStore((state) => state.adData);  // Get the ad data from the store

  if (!adData) return <div>Loading...</div>;  // Handle case where adData is not available

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create Ad for Organization</h1>
      <div>
        <label>Brand Name: </label>
        <input type="text" value={adData.brandName} readOnly />
      </div>
      <div>
        <label>Product Name: </label>
        <input type="text" value={adData.productName} readOnly />
      </div>
      <div>
        <label>Product Description: </label>
        <textarea value={adData.productDescription} readOnly />
      </div>
      <div>
        <label>Ad Copy: </label>
        <textarea value={adData.adCopy} readOnly />
      </div>
    </div>
  );
};

export default CreateAdPage;

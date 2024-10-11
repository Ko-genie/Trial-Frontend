"use client";

import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import { useAdStore } from "@/store/useAdStore";

const CreateAdPage = () => {
  const adDataFromStore = useAdStore((state) => state.adData); // Get data from store
  const [adData, setAdData] = useState({
    brandName: "",
    productName: "",
    productDescription: "",
    adCopy: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (adDataFromStore) {
      setAdData(adDataFromStore); // Set initial ad data from the store
    }
  }, [adDataFromStore]);

  // Handle input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAdData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!isMounted) return <div>Loading...</div>;

  // Dynamic styling for inputs and text areas
  const inputStyle: CSSProperties = {
    border: "2px solid #CBD5E1",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    marginBottom: "12px",
    backgroundColor: "#F8FAFC",
    fontSize: "16px",
    color: "#334155",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.2s ease",
  };

  const textAreaStyle: CSSProperties = {
    ...inputStyle,
    minHeight: "220px", // Larger height for text areas
    resize: "vertical",
  };

  return (
    <div
      style={{
        borderRadius: "16px",
        padding: "30px",
        maxWidth: "800px",
        width: "100%",
        margin: "40px auto",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 6px 30px rgba(0, 0, 0, 0.12)",
        fontFamily: "'Inter', sans-serif",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        position: "relative",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.15)";
        e.currentTarget.style.transform = "translateY(-5px)"; // Lift on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 30px rgba(0, 0, 0, 0.12)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "16px",
            // color: "#475569",
            // color: "rgb(102, 0, 255)",
            color: "gray",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Brand Name:
        </label>
        <input
          type="text"
          name="brandName"
          placeholder="Enter your brand name"
          value={adData.brandName}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "16px",
            // color: "#475569",
            // color: "rgb(102, 0, 255)",
            color: "gray",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Product Name:
        </label>
        <input
          type="text"
          name="productName"
          placeholder="Enter your product name"
          value={adData.productName}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "16px",
            // color: "#475569",
            // color: "rgb(102, 0, 255)",
            color: "gray",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Product Description:
        </label>
        <textarea
          name="productDescription"
          value={adData.productDescription}
          placeholder="Describe your product..."
          onChange={handleInputChange}
          style={textAreaStyle}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "16px",
            // color: "#475569",
            // color: "rgb(102, 0, 255)",
            color: "gray",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Your Ad Copy:
        </label>
        <textarea
          name="adCopy"
          value={adData.adCopy}
          placeholder="Edit your ad copy..."
          onChange={handleInputChange}
          style={textAreaStyle}
        />
      </div>
    </div>
  );
};

export default CreateAdPage;

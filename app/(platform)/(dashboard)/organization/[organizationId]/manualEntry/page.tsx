"use client";

import React, { useState, CSSProperties, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAdStore } from "@/store/useAdStore";
import { Button } from "@/components/ui/button";

const ManualEntryPage: React.FC = () => {
  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const setAdData = useAdStore((state) => state.setAdData);
  const params = useParams();
  const organizationId = params.organizationId;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    const adInputData = {
      brandName,
      productName,
      productDescription,
      targetAudience,
      uniqueSellingPoints,
    };
  
    try {
      const response = await fetch("http://localhost:5001/generateAdPrompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adInputData),
      });
  
      const data = await response.json();
      if (response.ok) {
        setAdData(data); // Update the store with the ad data for display on CreateAdPage
        router.push(`/organization/${organizationId}/createAd`);
      } else {
        throw new Error(data.error || "Failed to create ad based on input");
      }
    } catch (err) {
      setError("An error occurred while creating the ad.");
    } finally {
      setLoading(false);
    }
  };  

  const containerStyle: CSSProperties = {
    padding: "30px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle: CSSProperties = {
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
    display: "block",
  };

  const inputStyle: CSSProperties = {
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    marginBottom: "15px",
    fontSize: "16px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const textareaStyle: CSSProperties = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
  };

  const buttonStyle: CSSProperties = {
    padding: "12px 20px",
    background: "#DB4A2B",
    color: "white",
    borderRadius: "8px",
    fontWeight: "600",
    marginTop: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Enter Product Information</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Brand Name</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Enter brand name"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Product Description</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Describe the product in detail"
            style={textareaStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Target Audience</label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="E.g., Teenagers, Fitness Enthusiasts"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Unique Selling Points</label>
          <textarea
            value={uniqueSellingPoints}
            onChange={(e) => setUniqueSellingPoints(e.target.value)}
            placeholder="What makes this product stand out?"
            style={textareaStyle}
            required
          />
        </div>

        <Button disabled={loading} style={buttonStyle}>
          {loading ? "Submitting..." : "Create Ad"}
        </Button>
      </form>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
    </div>
  );
};

export default ManualEntryPage;

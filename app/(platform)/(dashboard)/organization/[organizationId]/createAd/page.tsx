"use client";

import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import { useAdStore } from "@/store/useAdStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPaperPlane, faBookmark } from "@fortawesome/free-solid-svg-icons";

const CreateAdPage = () => {
  const adDataFromStore = useAdStore((state) => state.adData); // Get data from store
  const [adData, setAdData] = useState({
    brandName: "",
    productName: "",
    productDescription: "",
    adCopy: "",
  });
  const [isMounted, setIsMounted] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Automatically generate ad copy based on product information
  const generateAdCopy = () => {
    if (adData.brandName && adData.productName && adData.productDescription) {
      return `Introducing ${adData.productName} from ${adData.brandName}! ${adData.productDescription}`;
    }
    return "Caption of the post goes here...";
  };

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
      [name]: value,
    }));
  };

  // Update the ad copy whenever product info changes
  useEffect(() => {
    const updatedAdCopy = generateAdCopy();
    setAdData((prevState) => ({
      ...prevState,
      adCopy: updatedAdCopy,
    }));
  }, [adData.brandName, adData.productName, adData.productDescription]);

  // Handle image upload and resize it to 16:9 aspect ratio (640x360)
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;
        img.onload = () => {
          // Create a canvas to resize the image
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          // Set canvas dimensions to 640x360 for 16:9 aspect ratio
          canvas.width = 640;
          canvas.height = 360;

          // Draw the image in the canvas with 640x360 dimensions
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Get the resized image as a data URL
          const resizedImageUrl = canvas.toDataURL('image/jpeg', 1.0); // High-quality image
          setImageUrl(resizedImageUrl); // Set the resized image URL
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image download
  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "instagram_post.jpg"; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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

  const containerStyle: CSSProperties = {
    borderRadius: "16px",
    padding: "30px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.12)",
    fontFamily: "'Inter', sans-serif",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    width: "50%", // Set the width to 50% for both containers
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    position: "relative",
    minHeight: "400px", // Ensure both containers have minimum height
  };

  const hoverEffect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.15)";
    e.currentTarget.style.transform = "translateY(-5px)";
  };

  const resetHoverEffect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.boxShadow = "0 6px 30px rgba(0, 0, 0, 0.12)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "40px auto", maxWidth: "1200px" }}>
      {/* Form Section */}
      <div
        style={containerStyle}
        onMouseOver={hoverEffect}
        onMouseOut={resetHoverEffect}
      >
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "16px", color: "gray", marginBottom: "8px", fontWeight: "600" }}>
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
          <label style={{ display: "block", fontSize: "16px", color: "gray", marginBottom: "8px", fontWeight: "600" }}>
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
          <label style={{ display: "block", fontSize: "16px", color: "gray", marginBottom: "8px", fontWeight: "600" }}>
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
          <label style={{ display: "block", fontSize: "16px", color: "gray", marginBottom: "8px", fontWeight: "600" }}>
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

      {/* Image Upload and Preview Section */}
      <div
        style={{
          ...containerStyle, // Use the same container style for both sections
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseOver={hoverEffect}
        onMouseOut={resetHoverEffect}
      >
        {/* Suggestion for Image Size */}
        <p style={{ fontSize: "14px", color: "gray", marginBottom: "10px" }}>
          Tip: For the best Instagram preview, use an image with a 16:9 aspect ratio (640x360 pixels).
        </p>

        {/* New Button to Re-upload */}
        <label
          htmlFor="file-upload"
          className="custom-file-upload"
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "600",
            marginBottom: "10px", // Adjusted margin for gap
          }}
        >
          Upload Image
        </label>
        <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />

        <h1 style={{ marginBottom: "5px", fontSize: "20px", fontWeight: "600" }}>Instagram Post Preview</h1> {/* Increased marginBottom to add more gap */}

        {/* Upload Button */}
        {!imageUrl && (
          <>
            <div className="post-image-container" style={{ textAlign: "center", marginBottom: "20px" }}>
              {/* Placeholder image */}
              <img
                src="https://placehold.co/640x360"
                alt="Placeholder"
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>
          </>
        )}

        {/* Instagram Post Clone */}
        {imageUrl && (
          <div className="instagram-post" style={{ marginTop: "20px", width: "100%" }}>
            {/* Post Header */}
            <div className="header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
              <img src="/insta-logo.jpg" style={{ width: "40px", borderRadius: "50%" }} alt="Profile" />
              <span className="username" style={{ fontWeight: "bold" }}>username</span>
              <span className="menu-icon">•••</span>
            </div>

            {/* Post Image */}
            <div className="post-image-container" style={{ textAlign: "center" }}>
              <img src={imageUrl} className="uploaded-image" alt="Uploaded" style={{ width: "100%", borderRadius: "12px" }} />
            </div>

            {/* Post Footer */}
            <div className="post-footer" style={{ padding: "10px" }}>
              <div className="icons" style={{ display: "flex", justifyContent: "space-between" }}>
                <FontAwesomeIcon icon={faHeart} className="icon heart-icon" style={{ color: "red" }} />
                <FontAwesomeIcon icon={faComment} className="icon black-icon" style={{ color: "black" }} />
                <FontAwesomeIcon icon={faPaperPlane} className="icon black-icon" style={{ color: "black" }} />
                <FontAwesomeIcon icon={faBookmark} className="icon black-icon save" style={{ color: "black" }} />
              </div>
              <span className="likes-count" style={{ fontWeight: "bold", marginTop: "8px", display: "block" }}>100 likes</span>

              {/* Ad Copy Caption */}
              <div className="description" style={{ marginTop: "8px" }}>
                <span className="username" style={{ fontWeight: "bold" }}>username</span>{" "}
                {adData.adCopy}
              </div>

              <div className="time-posted" style={{ marginTop: "8px", color: "gray" }}>2 hours ago</div>
            </div>

            {/* Download Button */}
            <button className="download-btn" onClick={handleDownload} style={{ marginTop: "12px", padding: "10px 20px", backgroundColor: "#4f46e5", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
              Download Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAdPage;
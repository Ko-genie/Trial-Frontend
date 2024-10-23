"use client";

import React, { useState, useEffect, ChangeEvent, CSSProperties } from "react";
import Image from "next/image";
import { useAdStore } from "@/store/useAdStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

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

  const [aspectRatio] = useState("16:9"); // Default aspect ratio for Instagram landscape posts

  useEffect(() => {
    setIsMounted(true);
    if (adDataFromStore) {
      setAdData(adDataFromStore); // Set initial ad data from the store
    }
  }, [adDataFromStore]);

  useEffect(() => {
    const generateAdCopy = () => {
      if (adData.brandName && adData.productName && adData.productDescription) {
        return `Introducing ${adData.productName} from ${adData.brandName}! ${adData.productDescription}`;
      }
      return "Caption of the post goes here...";
    };

    const updatedAdCopy = generateAdCopy();
    setAdData((prevState) => ({
      ...prevState,
      adCopy: updatedAdCopy,
    }));
  }, [adData.brandName, adData.productName, adData.productDescription]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAdData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Crop and resize image to match aspect ratio
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Image creation fixed to remove the TypeScript error.
        const img = new Image();
        img.width = 640;
        img.height = 360;
        img.src = e.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
    
          // Define aspect ratios: 1:1 (square), 4:5 (portrait), 16:9 (landscape)
          let targetWidth = 640;
          let targetHeight = 360; // Default for 16:9
    
          if (aspectRatio === "1:1") {
            targetWidth = 640;
            targetHeight = 640;
          } else if (aspectRatio === "4:5") {
            targetWidth = 640;
            targetHeight = 800;
          }
    
          canvas.width = targetWidth;
          canvas.height = targetHeight;
    
          // Calculate cropping area based on the image's original aspect ratio
          const imgAspectRatio = img.width / img.height;
          let sourceWidth = img.width;
          let sourceHeight = img.height;
    
          if (imgAspectRatio > targetWidth / targetHeight) {
            sourceWidth = img.height * (targetWidth / targetHeight);
          } else {
            sourceHeight = img.width / (targetWidth / targetHeight);
          }
    
          // Center the crop
          const startX = (img.width - sourceWidth) / 2;
          const startY = (img.height - sourceHeight) / 2;
    
          ctx?.drawImage(
            img,
            startX,
            startY,
            sourceWidth,
            sourceHeight,
            0,
            0,
            targetWidth,
            targetHeight
          );
    
          const resizedImageUrl = canvas.toDataURL("image/jpeg", 1.0); // High-quality image
          setImageUrl(resizedImageUrl); // Set the resized image URL
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "instagram_post.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isMounted) return <div>Loading...</div>;

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
    minHeight: "220px",
    resize: "vertical",
  };

  const containerStyle: CSSProperties = {
    borderRadius: "16px",
    padding: "30px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.12)",
    fontFamily: "'Inter', sans-serif",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    width: "50%",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    position: "relative",
    minHeight: "400px",
  };

  const hoverEffect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.15)";
    e.currentTarget.style.transform = "translateY(-5px)";
  };

  const resetHoverEffect = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.boxShadow = "0 6px 30px rgba(0, 0, 0, 0.12)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "40px auto",
        maxWidth: "1200px",
      }}
    >
      {/* Form Section */}
      <div
        style={containerStyle}
        onMouseOver={hoverEffect}
        onMouseOut={resetHoverEffect}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "16px",
              color: "#4f46e5",
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
              color: "#4f46e5",
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
              color: "#4f46e5",
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
              color: "#4f46e5",
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

      {/* Image Upload and Preview Section */}
      <div
        style={{
          ...containerStyle,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseOver={hoverEffect}
        onMouseOut={resetHoverEffect}
      >
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
          Tip: For the best Instagram preview, use an image with a 16:9 aspect
          ratio (640x360 pixels).
        </p>

        <label
          htmlFor="file-upload"
          className="custom-file-upload"
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            background: "rgb(102, 0, 255)",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />

        <h1
          style={{ marginBottom: "1px", fontSize: "20px", fontWeight: "600" }}
        >
          Instagram Post Preview
        </h1>

        {!imageUrl && (
          <div
            className="post-image-container"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Image
              src="https://placehold.co/640x360"
              alt="Placeholder"
              width={640}
              height={360}
              style={{ borderRadius: "12px" }}
            />
          </div>
        )}

        {imageUrl && (
          <div
            className="instagram-post"
            style={{
              marginTop: "50px",
              width: "100%",
              border: "2px solid #4f46e5",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "70px",
            }}
          >
            <div
              className="header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Image
                src="/insta-logo.jpg"
                alt="Profile"
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
              <span className="username" style={{ fontWeight: "bold" }}>
                Brand Name
              </span>
              <span className="menu-icon">•••</span>
            </div>

            <div
              className="post-image-container"
              style={{ textAlign: "center" }}
            >
              <Image
                src={imageUrl}
                alt="Uploaded"
                width={640}
                height={360}
                style={{ borderRadius: "12px" }}
              />
            </div>

            <div className="post-footer" style={{ padding: "10px" }}>
              <div
                className="icons"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="icon heart-icon"
                  style={{ color: "red" }}
                />
                <FontAwesomeIcon
                  icon={faComment}
                  className="icon black-icon"
                  style={{ color: "black" }}
                />
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="icon black-icon"
                  style={{ color: "black" }}
                />
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="icon black-icon save"
                  style={{ color: "black" }}
                />
              </div>
              <span
                className="likes-count"
                style={{
                  fontWeight: "bold",
                  marginTop: "8px",
                  display: "block",
                }}
              >
                100 likes
              </span>

              <div className="description" style={{ marginTop: "8px" }}>
                <span className="username" style={{ fontWeight: "bold" }}>
                  Brand Name
                </span>{" "}
                {adData.adCopy}
              </div>

              <div
                className="time-posted"
                style={{ marginTop: "8px", color: "#6b7280" }}
              >
                2 hours ago
              </div>
            </div>
          </div>
        )}

        {imageUrl && (
          <button
            className="download-btn"
            onClick={handleDownload}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "rgb(102, 0, 255)",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              textAlign: "center",
              display: "block",
            }}
          >
            Download Image
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateAdPage;

"use client";

import React, { useState, useEffect, CSSProperties, ChangeEvent } from "react";
import { useAdStore } from "@/store/useAdStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPaperPlane, faBookmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AdData {
  brandName?: string;
  productName?: string;
  productDescription?: string;
  adCopy?: string;
  images?: string[];
}

const CreateAdPage: React.FC = () => {
  const adData: AdData = useAdStore((state) => state.adData) || {};
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (adData?.images?.[0]) {
      setSelectedImage(adData.images[0]);
    }
  }, [adData]);

  const generateAdCopy = () => {
    if (adData.brandName && adData.productName && adData.productDescription) {
      return `Introducing ${adData.productName} from ${adData.brandName}! ${adData.productDescription}`;
    }
    return "Caption of the post goes here...";
  };

  useEffect(() => {
    const updatedAdCopy = generateAdCopy();
    useAdStore.setState((prevState) => ({
      ...prevState,
      adCopy: updatedAdCopy,
    }));
  }, [adData.brandName, adData.productName, adData.productDescription]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    useAdStore.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedUrl = reader.result as string;
        setSelectedImage(uploadedUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage;
      link.download = "instagram_post.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: "16px",
    color: "#DB4A2B",
    marginBottom: "8px",
    fontWeight: "600",
  };

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

  // Smaller textarea for Product Description
  const productDescriptionStyle: CSSProperties = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
    textAlign: "left",
  };

  // Larger textarea for Ad Copy
  const adCopyStyle: CSSProperties = {
    ...inputStyle,
    minHeight: "300px",
    padding: "16px",
    fontSize: "18px",
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

  const resetHoverEffect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
          <label style={labelStyle}>Brand Name:</label>
          <input
            type="text"
            name="brandName"
            placeholder="Enter your brand name"
            value={adData.brandName || ""}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Product Name:</label>
          <input
            type="text"
            name="productName"
            placeholder="Enter your product name"
            value={adData.productName || ""}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Product Description:</label>
          <textarea
            name="productDescription"
            value={adData.productDescription || ""}
            placeholder="Describe your product..."
            onChange={handleInputChange}
            style={productDescriptionStyle}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Ad Copy:</label>
          <textarea
            name="adCopy"
            value={adData.adCopy || ""}
            placeholder="Edit your ad copy..."
            onChange={handleInputChange}
            style={adCopyStyle}
          />
        </div>
      </div>

      {/* Image Upload and Gallery Container */}
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
          ratio
        </p>
        <label
          htmlFor="file-upload"
          className="custom-file-upload"
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            background: "#DB4A2B",
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

        <Button
          className="bg-[#DB4A2B] hover:bg-[#DB4A2B]/90"
          onClick={() => setShowGallery(true)}
          style={{ margin: "15px 0" }}
        >
          Choose Image From Website
        </Button>

        <h1
          style={{ marginBottom: "1px", fontSize: "20px", fontWeight: "600" }}
        >
          Instagram Post Preview
        </h1>

        {/* Gallery Modal */}
        {showGallery && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              background: "#FFF",
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "500px",
              width: "100%",
              textAlign: "center",
              overflowY: "auto",
              maxHeight: "80vh",
            }}>
              <h3>Select an Image</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginTop: "15px" }}>
                {adData.images?.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt="Scraped"
                    onClick={() => {
                      setSelectedImage(imgSrc);
                      setShowGallery(false);
                    }}
                    style={{
                      width: "100px",
                      height: "100px",
                      cursor: "pointer",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease",
                      border: selectedImage === imgSrc ? "3px solid #4f46e5" : "none",
                    }}
                  />
                ))}
              </div>
              <button onClick={() => setShowGallery(false)} style={{ marginTop: "20px", padding: "10px 20px", background: "#DB4A2B", color: "#FFF", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}>Close</button>
            </div>
          </div>
        )}

        {/* Selected Image Preview */}
        {selectedImage && (
          <div style={{ marginTop: "30px", textAlign: "center", border: "2px solid #4f46e5", borderRadius: "12px", overflow: "hidden", width: "100%", marginBottom: "70px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #e5e7eb" }}>
              
              <Image 
                src="/insta-logo.jpg" 
                alt="Profile" 
                width={40} 
                height={40} 
                style={{ borderRadius: "50%" }} 
              />

              <span 
              style={{ fontWeight: "bold" }}>{adData.brandName}
              </span>

              <span>
                •••
                </span>

            </div>

            {/* Selected Image - Proportional Scaling */}
            
            <img 
            src={selectedImage} 
            alt="Selected" 
            style={{ 
              width: "50%", 
              height: "50%", 
              borderRadius: "12px",
              maxHeight: "400px",
              display: "block",         // Center the image as a block-level element
              margin: "0 auto",         // Horizontal centering
            }} 
          />


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
                  textAlign: "left",
                }}
              >
                100 likes
              </span>

              <div className="description" style={{ marginTop: "8px", textAlign: "left" }}>
                <span className="username" style={{ fontWeight: "bold" }}>
                {adData.brandName}
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

        {selectedImage && (
          <Button 
            onClick={handleDownload} 
            style={{ 
              marginTop: "10px", 
              padding: "10px 20px", 
              background: "#DB4A2B", 
              color: "#fff", 
              borderRadius: "8px", 
              cursor: "pointer" }}
            >
              Download Image
            </Button>
        )}
      </div>
    </div>
  );
};

export default CreateAdPage;
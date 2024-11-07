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

  const buttonStyle: CSSProperties = {
    cursor: "pointer",
    padding: "10px 20px",
    width: "48%",
    height: "40px",
    background: "#DB4A2B",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        style={{
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
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "16px", color: "#DB4A2B", marginBottom: "8px", fontWeight: "600" }}>
            Brand Name:
          </label>
          <input
            type="text"
            name="brandName"
            placeholder="Enter your brand name"
            value={adData.brandName || ""}
            onChange={handleInputChange}
            style={{
              border: "2px solid #CBD5E1",
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              marginBottom: "12px",
              backgroundColor: "#F8FAFC",
              fontSize: "16px",
              color: "#334155",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "16px", color: "#DB4A2B", marginBottom: "8px", fontWeight: "600" }}>
            Product Name:
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Enter your product name"
            value={adData.productName || ""}
            onChange={handleInputChange}
            style={{
              border: "2px solid #CBD5E1",
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              marginBottom: "12px",
              backgroundColor: "#F8FAFC",
              fontSize: "16px",
              color: "#334155",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "16px", color: "#DB4A2B", marginBottom: "8px", fontWeight: "600" }}>
            Product Description:
          </label>
          <textarea
            name="productDescription"
            placeholder="Describe your product..."
            value={adData.productDescription || ""}
            onChange={handleInputChange}
            style={{
              border: "2px solid #CBD5E1",
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              marginBottom: "12px",
              backgroundColor: "#F8FAFC",
              fontSize: "16px",
              color: "#334155",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              minHeight: "100px",
              resize: "vertical",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "16px", color: "#DB4A2B", marginBottom: "8px", fontWeight: "600" }}>
            Ad Copy:
          </label>
          <textarea
            name="adCopy"
            placeholder="Edit your ad copy..."
            value={adData.adCopy || ""}
            onChange={handleInputChange}
            style={{
              border: "2px solid #CBD5E1",
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              marginBottom: "12px",
              backgroundColor: "#F8FAFC",
              fontSize: "16px",
              color: "#334155",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              minHeight: "200px", // Increased height
              resize: "vertical",
            }}
          />
        </div>
      </div>

      {/* Image Upload and Gallery Container */}
      <div
        style={{
          borderRadius: "16px",
          padding: "30px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 6px 30px rgba(0, 0, 0, 0.12)",
          fontFamily: "'Inter', sans-serif",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
          Tip: For the best Instagram preview, use an image with a 16:9 aspect ratio
        </p>

        <div style={{ display: "flex", gap: "4%", width: "100%", justifyContent: "center" }}>
          <label htmlFor="file-upload" style={buttonStyle}>
            Upload Image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />

          <Button onClick={() => setShowGallery(true)} style={buttonStyle}>
            Images from URL
          </Button>
        </div>

        <h1 style={{ marginBottom: "1px", fontSize: "20px", fontWeight: "600" }}>
          Instagram Post Preview
        </h1>

        {/* Gallery Modal */}
        {showGallery && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#FFF",
                padding: "20px",
                borderRadius: "12px",
                maxWidth: "500px",
                width: "100%",
                textAlign: "center",
                overflowY: "auto",
                maxHeight: "80vh",
              }}
            >
              <h3>Select an Image</h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
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
              <button onClick={() => setShowGallery(false)} style={buttonStyle}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Selected Image Preview */}
        {selectedImage && (
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
              border: "2px solid #4f46e5",
              borderRadius: "12px",
              overflow: "hidden",
              width: "100%",
              marginBottom: "70px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <Image src="/insta-logo.jpg" alt="Profile" width={40} height={40} style={{ borderRadius: "50%" }} />
              <span style={{ fontWeight: "bold" }}>{adData.brandName}</span>
              <span>•••</span>
            </div>

            <img
              src={selectedImage}
              alt="Selected"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                display: "block",
                margin: "0 auto",
              }}
            />

            <div className="post-footer" style={{ padding: "10px" }}>
              <div className="icons" style={{ display: "flex", justifyContent: "space-between" }}>
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faComment} style={{ color: "black" }} />
                <FontAwesomeIcon icon={faPaperPlane} style={{ color: "black" }} />
                <FontAwesomeIcon icon={faBookmark} style={{ color: "black" }} />
              </div>
              <span
                style={{
                  fontWeight: "bold",
                  marginTop: "8px",
                  display: "block",
                  textAlign: "left",
                }}
              >
                100 likes
              </span>

              <div style={{ marginTop: "8px", textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>{adData.brandName}</span> {adData.adCopy}
              </div>

              <div style={{ marginTop: "8px", color: "#6b7280" }}>2 hours ago</div>
            </div>
          </div>
        )}

        {selectedImage && (
          <Button onClick={handleDownload} style={buttonStyle}>
            Download Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateAdPage;
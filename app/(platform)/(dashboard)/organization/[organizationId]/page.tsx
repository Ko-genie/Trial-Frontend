"use client";

import { useState, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAdStore } from "@/store/useAdStore"; // Import the store

const OrganizationIdPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { organizationId } = useParams();
  const setAdData = useAdStore((state) => state.setAdData); // Get the setter from the store

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Trigger the loading state

    console.log("URL Submitted:", url);

    if (!url || !url.startsWith("http")) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/createAd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      console.log("Received Data from Backend:", data);

      // Set the ad data in the global store
      setAdData(data);

      // Navigate to the createAd page
      router.push(`/organization/${organizationId}/createAd`);
    } catch (err) {
      setError(
        (err as Error).message ||
          "An error occurred while scraping and generating the ad."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
        width: "100%",
        background: "rgb(243 244 246)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          fontSize: 35,
          fontFamily: "inherit",
          fontWeight: "400",
          textShadow: "inherit",
        }}
      >
        Generate AI-Powered Ads
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%", // Ensures form is responsive
        }}
      >
        <input
          type="text"
          placeholder="Enter Product URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            padding: "8px 20px",
            width: "100%", // Responsive width for mobile
            maxWidth: "300px", // Limit the width for larger screens
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border-color 0.3s ease",
            marginBottom: "10px",
          }}
        />
        <Button
          style={{
            padding: "8px 20px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            background: "rgb(102, 0, 255)",
            color: "white", // Ensure text color is visible
            marginTop: "10px",
            width: "10%",
            maxWidth: "300px",
            transition: "all 0.3s ease", // Smooth transition for hover effect
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgb(85, 0, 212)"; // Darker shade on hover
            e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"; // Stronger shadow
            e.currentTarget.style.transform = "translateY(-2px)"; // Slight lift on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgb(102, 0, 255)"; // Reset background
            e.currentTarget.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)"; // Reset shadow
            e.currentTarget.style.transform = "translateY(0)"; // Reset position
          }}
        >
          {loading ? "Just There..." : "Generate Ad"}
        </Button>
      </form>

      {loading && (
        <div className="overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">Generating Your Ad...</div>
        </div>
      )}

      {error && <div style={{ color: "red", marginTop: "20px" }}>{error}</div>}

      {/* Overlay and Loading Spinner CSS */}
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6); // Dark overlay
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999; // Ensure it covers everything
          flex-direction: column;
        }

        .loading-spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #6f42c1;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        .loading-text {
          color: #fff;
          margin-top: 15px;
          font-size: 20px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default OrganizationIdPage;
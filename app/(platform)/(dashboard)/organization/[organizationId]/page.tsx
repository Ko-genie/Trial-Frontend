"use client";

import { useState, useEffect, FormEvent, CSSProperties } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAdStore } from "@/store/useAdStore";

const advertisementFacts = [
  "Ad spending worldwide reached over $600 billion in 2023.",
  "Video ads increase engagement by 49% compared to static ads.",
  "Instagram ads can reach over 1.4 billion people globally.",
  // Additional facts here
];

const OrganizationIdPage = () => {
  const [url, setUrl] = useState("");
  const [gender, setGender] = useState("global");
  const [ageGroup, setAgeGroup] = useState("9-18");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentFact, setCurrentFact] = useState(0);
  const router = useRouter();
  const { organizationId } = useParams();
  const setAdData = useAdStore((state) => state.setAdData);

  useEffect(() => {
    if (loading) {
      const factInterval = setInterval(() => {
        setCurrentFact((prev) => (prev + 1) % advertisementFacts.length);
      }, 5000);
      return () => clearInterval(factInterval);
    }
  }, [loading]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!url || !url.startsWith("http")) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/createAd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, gender, ageGroup }),
      });

      const data = await response.json();
      if (response.ok) {
        setAdData(data);
        router.push(`/organization/${organizationId}/createAd`);
      } else {
        throw new Error(data.error || "Failed to generate ad");
      }
    } catch (err) {
      setError("An error occurred while generating the ad.");
    } finally {
      setLoading(false);
    }
  };

  const containerStyle: CSSProperties = {
    textAlign: "center",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "50vh",
    width: "100%",
    background: "rgb(243 244 246)",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const inputStyle: CSSProperties = {
    padding: "8px 20px",
    width: "100%",
    maxWidth: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  };

  const selectStyle: CSSProperties = {
    padding: "8px",
    borderRadius: "5px",
    margin: "0 5px",
  };

  const spinnerStyle: CSSProperties = {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #DB4A2B",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    margin: "0 auto",
  };

  const buttonStyle: CSSProperties = {
    padding: "8px 20px",
    background: "#DB4A2B",
    color: "white",
    marginTop: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: "20px", fontSize: 35 }}>Generate AI-Powered Ads</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <input
          type="text"
          placeholder="Enter Product URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={inputStyle}
          required
        />

        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
            <option value="global">Global</option>
          </select>

          <label>Age Group:</label>
          <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} style={selectStyle}>
            <option value="9-18">9-18</option>
            <option value="18-25">18-25</option>
            <option value="25-40">25-40</option>
            <option value="40-60">40-60</option>
            <option value="60+">60+</option>
          </select>
        </div>

        <Button disabled={loading} style={buttonStyle}>
          {loading ? "Generating Ad..." : "Generate Ad"}
        </Button>
      </form>

      {loading && (
        <div>
          <p>{advertisementFacts[currentFact]}</p>
          <div style={spinnerStyle} />
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OrganizationIdPage;

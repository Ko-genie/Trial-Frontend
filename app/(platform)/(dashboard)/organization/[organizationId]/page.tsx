"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAdStore } from "@/store/useAdStore"; // Import the store

// 25 unique facts about advertisements
const advertisementFacts = [
  "Ad spending worldwide reached over $600 billion in 2023.",
  "Video ads increase engagement by 49% compared to static ads.",
  "Instagram ads can reach over 1.4 billion people globally.",
  "Over 80% of people recall a video ad they watched in the past 30 days.",
  "Mobile advertising makes up more than 70% of digital ad spend.",
  "Companies that run ad campaigns on Instagram see a 10 times higher engagement rate.",
  "Around 33% of users find new products through social media ads.",
  "Carousel ads can drive 72% more clicks than single-image ads.",
  "Users are more likely to purchase after seeing retargeted ads.",
  "Native ads outperform traditional display ads by 53%.",
  "Social media ad spending is expected to reach $268 billion by 2024.",
  "People spend 3 hours daily on social media, making it a key platform for advertising.",
  "Colorful ads can increase brand recognition by up to 80%.",
  "Personalized ads lead to a 20% increase in sales.",
  "Interactive ads generate 3 times more engagement than static ads.",
  "Video content is 40 times more likely to be shared on social media than other content.",
  "Dynamic ads can boost click-through rates by up to 300%.",
  "Advertising on social media increases brand loyalty by 45%.",
  "Social media ads drive higher conversion rates compared to traditional online ads.",
  "Consumers spend more time engaging with ads that use a storytelling format.",
  "Around 70% of marketers use Instagram ads as part of their strategy.",
  "Users are 52% more likely to share video ads with their network.",
  "Facebook's ad reach exceeded 2.9 billion users in 2022.",
  "Brands using ads on Instagram Stories saw a 73% higher conversion rate.",
  "Effective ad copy can improve conversion rates by as much as 113%.",
];

const OrganizationIdPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentFact, setCurrentFact] = useState(0); // For showing random ad facts
  const router = useRouter();
  const { organizationId } = useParams();
  const setAdData = useAdStore((state) => state.setAdData); // Get the setter from the store

  useEffect(() => {
    if (loading) {
      const factInterval = setInterval(() => {
        setCurrentFact(Math.floor(Math.random() * advertisementFacts.length));
      }, 5000); // Change fact every 5 seconds
      return () => clearInterval(factInterval); // Clear interval on component unmount
    }
  }, [loading]);

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

      // Redirect to the createAd page once loading is done
      router.push(`/organization/${organizationId}/createAd`);
    } catch (err) {
      setError(
        (err as Error).message ||
          "An error occurred while scraping and generating the ad."
      );
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
        background: "rgb(243 244 246)", // Gray background
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

        {!loading ? (
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
            Generate Ad
          </Button>
        ) : (
          <>
            <p
              style={{
                marginBottom: "10px",
                color: "black",
                fontStyle: "italic",
              }}
            >
              {advertisementFacts[currentFact]}
            </p>

            <div
              style={{
                border: "4px solid #f3f3f3", // Light gray border
                borderTop: "4px solid #6200ea", // Purple color for the top border
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                animation: "spin 1s linear infinite", // Infinite spin animation
                margin: "0 auto", // Center the spinner
              }}
            />
          </>
        )}
      </form>

      {error && <div style={{ color: "red", marginTop: "20px" }}>{error}</div>}

      <style jsx>{`
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
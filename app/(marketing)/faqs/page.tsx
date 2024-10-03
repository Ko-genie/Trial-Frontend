// pages/faq.js
"use client"; // Mark this as a Client Component since it uses useState

import { useState } from "react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from 'next/image';

// Importing custom fonts
const headingFont = localFont({
    src: "../../../public/fonts/font.woff2"
});

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100", "200", "300", "400", "500", "600", "700", "800", "900"
    ],
});

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                onClick={toggleFAQ}
                aria-expanded={isOpen}
                aria-controls={`faq-${question}`}
            >
                <span className={cn("text-lg font-medium text-gray-800", textFont.className)}>
                    {question}
                </span>
                <svg
                    className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div id={`faq-${question}`} className="mt-4 text-gray-700">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "What is KOgenie?",
            answer: "KOgenie is an AI-powered ad creation platform that helps businesses create personalized and high-quality ads quickly and efficiently."
        },
        {
            question: "How does KOgenie work?",
            answer: "KOgenie leverages generative AI to automate the ad creation process. Users can input their requirements, and KOgenie generates tailored ads in minutes."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a free trial that allows you to explore our features and create your first ad campaign without any cost."
        },
        {
            question: "Can I integrate KOgenie with other platforms?",
            answer: "Absolutely! KOgenie integrates seamlessly with major advertising platforms like Google, Facebook, Instagram, and more, allowing you to manage your campaigns from a single dashboard."
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team via the Contact Us page on our website or email us directly at support@kogenie.com."
        },
        // Add more FAQs as needed
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 md:px-8">
            {/* Header Section */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-6 text-center">
                    <h1 className={cn("text-4xl font-bold text-gray-800", headingFont.className)}>
                        Frequently Asked Questions
                    </h1>
                    <p className={cn("text-lg text-gray-600 mt-4", textFont.className)}>
                        Find answers to the most common questions about KOgenie.
                    </p>
                </div>
            </header>

            {/* FAQ Section */}
            <main className="container mx-auto mt-12">
                <section className="bg-white rounded-lg shadow-lg p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </section>
            </main>

            {/* Back to Home Button */}
            <div className="text-center mt-12">
                <Button className="text-white bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-md shadow-lg" asChild>
                    <Link href="/">
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default FAQ;

// pages/privacy-policy.js
import { Medal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

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

const PrivacyPolicy = () => {
    return (
        <div >
            {/* Header Section */}
            <header className="flex items-center justify-center flex-col">
                <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className,
                )}>
                    <h1 className='text-3xl md:text-6xl text-center text-neutral-800
                mb-6'>
                        Privacy Policy
                    </h1>
                </div>
            </header>

            {/* Privacy Policy Content Section */}
            <main className="container mx-auto mt-12">
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Introduction
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        At KOgenie, we prioritize the privacy of our users. This Privacy Policy outlines the types of personal information 
                        we collect and how we use it. By using our website, you agree to the terms of this policy.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Information We Collect
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        KOgenie collects various types of personal information when you visit our website or interact with our services. 
                        This includes, but is not limited to, your name, email address, and browsing data.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        How We Use Information
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        The information we collect is used to enhance our services, improve user experience, and provide personalized content. 
                        We may also use your information to communicate with you regarding updates or promotional offers.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Sharing of Information
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        KOgenie does not sell, trade, or rent your personal information to third parties. We may share information with trusted 
                        partners who assist us in operating our website and conducting our business, as long as these parties agree to keep your information confidential.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Your Rights
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        You have the right to access, modify, or delete the personal information we hold about you. If you wish to exercise 
                        these rights, please contact us at support@kogenie.com.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Changes to This Policy
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        KOgenie reserves the right to update this Privacy Policy at any time. We will notify users of any significant changes 
                        by updating the date at the top of this page. Please check back periodically for updates.
                    </p>
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

export default PrivacyPolicy;

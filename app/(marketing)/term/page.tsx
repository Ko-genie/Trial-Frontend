// pages/terms-and-conditions.js
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

const TermsAndConditions = () => {
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
                        Terms and Conditions
                    </h1>
                </div>
            </header>

            {/* Terms and Conditions Content Section */}
            <main className="container mx-auto mt-12">
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Introduction
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        Welcome to KOgenie. By accessing our website, you agree to comply with and be bound by the following terms and conditions of use. 
                        Please review the following terms carefully.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Intellectual Property Rights
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        All content included on this site, such as text, graphics, logos, images, and software, is the property of KOgenie and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        User Responsibilities
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        You agree not to use our website for any unlawful purpose, or in any way that could damage our website or disrupt the use of the website by others. You agree to provide true, accurate, current, and complete information about yourself when requested by our website.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Limitation of Liability
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        In no event shall KOgenie be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of or inability to use our website, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Changes to These Terms
                    </h2>
                    <p className={cn("text-lg text-gray-700 leading-relaxed", textFont.className)}>
                        KOgenie reserves the right to modify these terms and conditions at any time. We will notify you of any changes by posting the new terms on this page. It is your responsibility to review these terms periodically for any changes.
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

export default TermsAndConditions;

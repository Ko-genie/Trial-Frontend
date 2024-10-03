// pages/about.js
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

const AboutPage = () => {
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
                        About KOgenie
                    </h1>
                </div>
            </header>

            {/* About Content Section */}
            <main className="container mx-auto mt-12">
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <div className={cn("text-center", textFont.className)}>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Who We Are
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            KOgenie is the leading provider of AI-based ad creation tools that help businesses scale faster and more efficiently. 
                            We specialize in leveraging generative AI to create personalized ads at the speed of light, allowing brands to connect 
                            with their audience in a more meaningful way.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                            Our team of AI enthusiasts and marketing professionals is committed to delivering cutting-edge technology that 
                            enhances creativity and drives growth. With KOgenie, creating high-quality ads has never been easier.
                        </p>
                    </div>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <div className={cn("text-center", textFont.className)}>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Our Vision
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our vision is to empower businesses with cutting-edge AI technology to enhance their advertising capabilities, 
                            helping them create tailored, data-driven ads that resonate with their audience.
                        </p>
                    </div>
                </section>

                <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <div className={cn("text-center", textFont.className)}>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            KOgenie E-Solutions offers a wide range of services including ad creation, A/B testing, and personalized ad campaigns powered by AI 
                            to help brands achieve their marketing goals faster and more efficiently.
                        </p>
                    </div>
                </section>
            </main>

            {/* CTA Button */}
            <div className="text-center mt-12">
                <Button className="text-white bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-md shadow-lg" asChild>
                    <Link href="/">
                        Back to Home
                    </Link>
                </Button>
            </div>

            {/* Footer */}
            {/* <footer className="bg-gray-800 text-white py-6 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} KOgenie E-Solutions. All rights reserved.</p>
                    <Link href="/">
                        <span className="text-blue-400 hover:underline mt-4 block">Back to Home</span>
                    </Link>
                </div>
            </footer> */}
        </div>
    );
};

export default AboutPage;

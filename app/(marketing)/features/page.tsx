// pages/features.js
import { Medal } from 'lucide-react';
import { Bot } from 'lucide-react';
import { TabletSmartphone } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Layers } from 'lucide-react';
import { PencilRuler } from 'lucide-react';
import { ChartColumn } from 'lucide-react';
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

const Features = () => {
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
                        KOgenie Features
                    </h1>
                </div>
            </header>

            {/* Features Section */}
            <main className="container mx-auto mt-12">
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-3xl font-bold text-gray-800 mb-8", headingFont.className)}>
                        Powerful Features to Supercharge Your Ad Campaigns
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                            <div className="text-purple-600 mb-4">
                                <Bot className="h-12 w-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">AI-Powered Ad Creation</h3>
                            <p className={cn("mt-4 text-gray-600", textFont.className)}>
                                Generate high-quality ads in minutes with the power of generative AI. Focus on creativity while we handle the heavy lifting.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                            <div className="text-purple-600 mb-4">
                                <TabletSmartphone className="h-12 w-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Automated A/B Testing</h3>
                            <p className={cn("mt-4 text-gray-600", textFont.className)}>
                                Optimize your campaigns by testing different versions of your ads with AI-driven A/B testing to find the most effective messaging.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                            <div className="text-purple-600 mb-4">
                                <UsersRound className="h-12 w-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Granular Audience Targeting</h3>
                            <p className={cn("mt-4 text-gray-600", textFont.className)}>
                                Reach the right audience with our advanced AI-driven targeting tools that analyze demographics, behavior, and more.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                            <div className="text-purple-600 mb-4">
                                <Layers className="h-12 w-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Multi-Platform Integration</h3>
                            <p className={cn("mt-4 text-gray-600", textFont.className)}>
                                Seamlessly integrate your ad campaigns across major platforms, including Google, Facebook, Instagram, and more.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                            <div className="text-purple-600 mb-4">
                                <ChartColumn className="h-12 w-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Real-Time Analytics</h3>
                            <p className={cn("mt-4 text-gray-600", textFont.className)}>
                                Get instant insights into your ad performance with real-time analytics and reporting, helping you make data-driven decisions.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                            <div className="text-purple-600 mb-4">
                                <PencilRuler className="h-12 w-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Ad Customization</h3>
                            <p className={cn("mt-4 text-gray-600", textFont.className)}>
                                Customize every aspect of your ads with our easy-to-use design tools. Tailor your message and visuals to suit your brand.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center text-white">
                    <h3 className="text-3xl font-bold">Ready to Boost Your Ads?</h3>
                    <p className={cn("mt-4 text-lg", textFont.className)}>
                        Sign up today and start creating high-performing ads with KOgenie's AI-powered platform.
                    </p>
                    <Button className="mt-6 text-white bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-lg shadow-lg" asChild>
                        <Link href="/sign-up">
                            Get Started for Free
                        </Link>
                    </Button>
                </section>
            </main>

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

export default Features;

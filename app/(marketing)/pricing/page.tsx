// pages/pricing.js
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

const Pricing = () => {
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
                        Pricing Plans
                    </h1>
                    <p className={cn("text-lg text-gray-600 mt-4", textFont.className)}>
                        Choose the right plan that fits your business needs.
                    </p>
                </div>
            </header>

            {/* Pricing Plans Section */}
            <main className="container mx-auto mt-12">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className={cn("text-2xl font-bold text-gray-800", headingFont.className)}>
                            Basic
                        </h3>
                        <p className={cn("text-gray-600 mt-2", textFont.className)}>
                            Ideal for small businesses.
                        </p>
                        <p className={cn("text-4xl font-bold text-gray-800 mt-4", headingFont.className)}>
                            $49<span className="text-xl text-gray-500">/month</span>
                        </p>
                        <ul className="text-left mt-6 space-y-2">
                            <li className={cn("text-gray-600", textFont.className)}>✔️ AI-powered ad creation</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ Up to 5 campaigns</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ Basic analytics</li>
                        </ul>
                        <Button className="text-white bg-purple-600 w-full mt-6">
                            <Link href="/sign-up">Get Started</Link>
                        </Button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className={cn("text-2xl font-bold text-gray-800", headingFont.className)}>
                            Pro
                        </h3>
                        <p className={cn("text-gray-600 mt-2", textFont.className)}>
                            Best for growing businesses.
                        </p>
                        <p className={cn("text-4xl font-bold text-gray-800 mt-4", headingFont.className)}>
                            $99<span className="text-xl text-gray-500">/month</span>
                        </p>
                        <ul className="text-left mt-6 space-y-2">
                            <li className={cn("text-gray-600", textFont.className)}>✔️ AI-powered ad creation</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ Unlimited campaigns</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ Advanced analytics</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ A/B testing tools</li>
                        </ul>
                        <Button className="text-white bg-purple-600 w-full mt-6">
                            <Link href="/sign-up">Get Started</Link>
                        </Button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className={cn("text-2xl font-bold text-gray-800", headingFont.className)}>
                            Enterprise
                        </h3>
                        <p className={cn("text-gray-600 mt-2", textFont.className)}>
                            Tailored for large businesses.
                        </p>
                        <p className={cn("text-4xl font-bold text-gray-800 mt-4", headingFont.className)}>
                            $199<span className="text-xl text-gray-500">/month</span>
                        </p>
                        <ul className="text-left mt-6 space-y-2">
                            <li className={cn("text-gray-600", textFont.className)}>✔️ AI-powered ad creation</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ Unlimited campaigns</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ Advanced analytics</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ A/B testing tools</li>
                            <li className={cn("text-gray-600", textFont.className)}>✔️ Dedicated account manager</li>
                        </ul>
                        <Button className="text-white bg-purple-600 w-full mt-6">
                            <Link href="/sign-up">Get Started</Link>
                        </Button>
                    </div>
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

export default Pricing;

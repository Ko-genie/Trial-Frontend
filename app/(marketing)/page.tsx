import { Medal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
  });

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    // "400",
    // "500",
    // "600",
    // "700",
    // "800",
    // "900"
  ],
});

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className,
                )}>
                {/* <div className="mb-4 flex items-center border shadow-sm p-4 
                bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    No 1 Ad Creator using Generative AI
                </div> */}
                <h1 className='text-3xl md:text-6xl text-center text-neutral-800
                mb-6'>
                    KOgenie - The Future of Advertising
                </h1>
                <div className='text-3l md:text-6l bg-gradient-to-r 
                from-purple-600 to-pink-600 text-white px-4 p-2 rounded-md 
                pb-4 w-fit'>
                    Get Started
                </div>
            </div>
            <div className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className,
            )}>
            KOgenie makes your ad in just 5 minutes so you can 
            launch ad campaigns swiftly, helping you get more 
            people to buy your product/service faster
            </div>
            <Button className='mt-6' size='lg'asChild>
                <Link href="/sign-up">
                    Get KOgenie for free
                </Link>
            </Button>

            {/* Features Section */}
            <section className="mt-12 py-12 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className={cn("text-3xl font-bold text-gray-800 mb-8", headingFont.className)}>
                        Why Choose KOgenie?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <h3 className={cn("text-2xl font-semibold text-gray-800 mb-4", headingFont.className)}>
                                AI-Powered Ad Creation
                            </h3>
                            <p className={cn("text-gray-600", textFont.className)}>
                                Generate high-quality ads in minutes with our AI-driven technology, tailored to your business needs.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <h3 className={cn("text-2xl font-semibold text-gray-800 mb-4", headingFont.className)}>
                                Advanced A/B Testing
                            </h3>
                            <p className={cn("text-gray-600", textFont.className)}>
                                Optimize ad performance with automated A/B testing and real-time analytics.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <h3 className={cn("text-2xl font-semibold text-gray-800 mb-4", headingFont.className)}>
                                Multi-Platform Integration
                            </h3>
                            <p className={cn("text-gray-600", textFont.className)}>
                                Run your ad campaigns seamlessly across Google, Facebook, Instagram, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className={cn("text-3xl font-bold text-gray-800 mb-8", headingFont.className)}>
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="p-6">
                            <Image src="/assets/images/background/test1.png" alt="Step 1" width={200} height={200} className="mx-auto" />
                            <h3 className={cn("text-2xl font-semibold text-gray-800 mt-4", headingFont.className)}>
                                Step 1: Input Your Product Info
                            </h3>
                            <p className={cn("text-gray-600 mt-2", textFont.className)}>
                                Start by providing details about your product or service. KOgenie's AI will use this information to generate personalized ads.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6">
                            <Image src="/assets/images/background/test2.png" alt="Step 2" width={200} height={200} className="mx-auto" />
                            <h3 className={cn("text-2xl font-semibold text-gray-800 mt-4", headingFont.className)}>
                                Step 2: Customize Your Ads
                            </h3>
                            <p className={cn("text-gray-600 mt-2", textFont.className)}>
                                Customize the generated ads to match your brand’s tone, style, and messaging using our intuitive tools.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6">
                            <Image src="/assets/images/background/test3.png" alt="Step 3" width={200} height={200} className="mx-auto" />
                            <h3 className={cn("text-2xl font-semibold text-gray-800 mt-4", headingFont.className)}>
                                Step 3: Launch Your Campaign
                            </h3>
                            <p className={cn("text-gray-600 mt-2", textFont.className)}>
                                Launch your ads across multiple platforms and track performance with real-time analytics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className={cn("text-3xl font-bold text-gray-800 mb-8", headingFont.className)}>
                        What Our Customers Say
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                            <p className={cn("text-gray-600 italic", textFont.className)}>
                                "KOgenie transformed the way we advertise. The AI-generated ads are highly personalized and engaging!"
                            </p>
                            <p className={cn("text-gray-800 font-bold mt-4", headingFont.className)}>
                                - Jane Doe, CEO of XYZ Corp
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                            <p className={cn("text-gray-600 italic", textFont.className)}>
                                "We’ve seen a 30% increase in engagement since using KOgenie’s A/B testing tools. Amazing results!"
                            </p>
                            <p className={cn("text-gray-800 font-bold mt-4", headingFont.className)}>
                                - John Smith, Marketing Director
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                            <p className={cn("text-gray-600 italic", textFont.className)}>
                                "The multi-platform integration has saved us so much time. We now manage ads across all platforms with ease."
                            </p>
                            <p className={cn("text-gray-800 font-bold mt-4", headingFont.className)}>
                                - Sarah Johnson, Digital Marketer
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-12 text-center">
                <h3 className={cn("text-3xl font-bold text-gray-800 mb-4", headingFont.className)}>
                    Ready to Launch Your Ads?
                </h3>
                <p className={cn("text-lg text-gray-600 mb-6", textFont.className)}>
                    Get started today and see how KOgenie can transform your advertising strategy.
                </p>
                <Button size="lg" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md">
                    <Link href="/sign-up">Get Started Now</Link>
                </Button>
            </section>

        </div>
    );
};

export default MarketingPage;
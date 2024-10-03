// pages/blog.js
import { Medal } from 'lucide-react';
import Link from 'next/link';
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

const Blog = () => {
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
                        KOgenie Blog
                    </h1>
                    <p className={cn("text-lg text-gray-600 mt-4", textFont.className)}>
                        Discover the latest in AI and advertising technology.
                    </p>
                </div>
            </header>

            {/* Blog List Section */}
            <main className="container mx-auto mt-12">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image 
                            src="/assets/images/news/news-1.jpg" 
                            alt="Blog Post 1"
                            width={800} 
                            height={450} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className={cn("text-2xl font-semibold text-gray-800 mb-4", headingFont.className)}>
                                <Link href="/blog/ai-revolutionizing-ad-industry">
                                    How AI is Revolutionizing the Ad Industry
                                </Link>
                            </h2>
                            <p className={cn("text-gray-600", textFont.className)}>
                                Discover how AI tools are transforming the advertising landscape by increasing efficiency and engagement.
                            </p>
                            <Link href="/blog/ai-revolutionizing-ad-industry" className="text-blue-600 hover:underline mt-4 block">
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image 
                            src="/assets/images/news/news-2.jpg" 
                            alt="Blog Post 2"
                            width={800} 
                            height={450} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className={cn("text-2xl font-semibold text-gray-800 mb-4", headingFont.className)}>
                                <Link href="/blog/role-of-ai-digital-marketing">
                                    The Role of AI in Digital Marketing
                                </Link>
                            </h2>
                            <p className={cn("text-gray-600", textFont.className)}>
                                Learn how AI is playing a pivotal role in transforming digital marketing strategies worldwide.
                            </p>
                            <Link href="/blog/role-of-ai-digital-marketing" className="text-blue-600 hover:underline mt-4 block">
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image 
                            src="/assets/images/news/news-3.jpg" 
                            alt="Blog Post 3"
                            width={800} 
                            height={450} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className={cn("text-2xl font-semibold text-gray-800 mb-4", headingFont.className)}>
                                <Link href="/blog/machine-learning-changing-ad-game">
                                    How Machine Learning is Changing the Game
                                </Link>
                            </h2>
                            <p className={cn("text-gray-600", textFont.className)}>
                                Machine learning is bringing new possibilities to advertising, from better targeting to automated content generation.
                            </p>
                            <Link href="/blog/machine-learning-changing-ad-game" className="text-blue-600 hover:underline mt-4 block">
                                Read More
                            </Link>
                        </div>
                    </div>
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

export default Blog;

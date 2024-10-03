// pages/contact.js
import { Medal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

// Import custom font
const headingFont = localFont({
    src: "../../../public/fonts/font.woff2"
});

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100", "200", "300", "400", "500", "600", "700", "800", "900"
    ],
});

const Contact = () => {
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
                        Contact Us
                    </h1>
                </div>
            </header>

            {/* Contact Info Section */}
            <main className="container mx-auto mt-12">
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className={cn("text-2xl font-semibold text-gray-800 mb-6", headingFont.className)}>
                        Get In Touch
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Details */}
                        <div className={cn("text-gray-700 leading-relaxed", textFont.className)}>
                            <p>
                                We're always here to help you with your inquiries or support. Reach out to us via phone or email, and we'll get back to you as soon as possible.
                            </p>
                            <div className="mt-6">
                                <h3 className="font-semibold text-lg text-gray-800">Phone:</h3>
                                <p className="text-gray-600 mt-2">+1 (123) 456-7890</p>
                            </div>
                            <div className="mt-6">
                                <h3 className="font-semibold text-lg text-gray-800">Email:</h3>
                                <p className="text-gray-600 mt-2">support@kogenie.com</p>
                            </div>
                            <div className="mt-6">
                                <h3 className="font-semibold text-lg text-gray-800">Address:</h3>
                                <p className="text-gray-600 mt-2">123 KOgenie St., New York, NY 10001</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <form action="#">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                        rows="4"
                                        placeholder="Write your message"
                                    ></textarea>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-md shadow-lg">
                                    Submit
                                </Button>
                            </form>
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

export default Contact;

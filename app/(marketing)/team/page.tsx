// pages/team.js
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

const Team = () => {
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
                        Our Team
                    </h1>
                </div>
            </header>

            {/* Team Members Section */}
            <main className="container mx-auto mt-12">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Team Member 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <Image
                            src="/assets/images/team/team-1.jpg" // Replace with actual image paths
                            alt="Team Member 1"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto"
                        />
                        <h3 className={cn("text-2xl font-bold text-gray-800 mt-4", headingFont.className)}>
                            John Doe
                        </h3>
                        <p className={cn("text-gray-600 mt-2", textFont.className)}>
                            CEO & Founder
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <Image
                            src="/assets/images/team/team-2.jpg"
                            alt="Team Member 2"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto"
                        />
                        <h3 className={cn("text-2xl font-bold text-gray-800 mt-4", headingFont.className)}>
                            Jane Smith
                        </h3>
                        <p className={cn("text-gray-600 mt-2", textFont.className)}>
                            CTO
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <Image
                            src="/assets/images/team/team-3.jpg"
                            alt="Team Member 3"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto"
                        />
                        <h3 className={cn("text-2xl font-bold text-gray-800 mt-4", headingFont.className)}>
                            Mark Johnson
                        </h3>
                        <p className={cn("text-gray-600 mt-2", textFont.className)}>
                            Chief Marketing Officer
                        </p>
                    </div>

                    {/* Add more team members as needed */}
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

export default Team;

import Image from "next/image";

// Reusable ExperienceCard Component
function ExperienceCard({ logo, company, role, duration, points }) {
    return (
        <div className="w-full max-w-3xl border-2 border-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300 mb-8">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <Image
                        src={logo}
                        width={60}
                        height={60}
                        alt={`${company} Logo`}
                        className="rounded-lg object-cover w-12 h-12"
                    />
                    <div>
                        <h1 className="text-[0.7rem] sm:text-xl font-semibold">{company}</h1>
                        <p className="text-[0.6rem] sm:text-base text-gray-400">{duration}</p>
                    </div>
                </div>
                <p className="text-gray-500 sm:text-xl sm:font-normal font-bold text-[0.6rem] italic">{role}</p>
            </div>

            <ul className="space-y-3 list-disc pl-5 text-[0.8rem] sm:text-base leading-relaxed text-gray-200">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

// Page Component
export default function Page() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center px-4 sm:px-10 lg:px-20 py-10 text-white">

            <ExperienceCard
                logo="/reddit.svg"
                company="Freelancing"
                role="Frontend Developer"
                duration="Apr 2024 – Jun 2024"
                points={[
                    "Developed responsive web applications for clients using Vue.js and Nuxt.js.",
                    "Converted Figma designs into pixel-perfect Vue.js implementations.",
                    "Implemented reusable UI components with TailwindCSS, improving design consistency and following best practices.",
                    "Focused on performance optimization and ensured cross-browser compatibility.",
                ]}
            />
            
            <ExperienceCard
                logo="/sida.svg"
                company="SIDA Technologies"
                role="Full-stack Developer"
                duration="July 2024 – Oct 2024"
                points={[
                    "Optimized project assets by reducing file size from 1.2MB to 212KB, improving performance.",
                    "Designed and implemented secure REST APIs and integrated them into frontend applications.",
                    "Built a client-facing dashboard from scratch, ensuring seamless usability and scalability.",
                    "Resolved critical issues quickly to maintain product stability and enhance user satisfaction.",
                ]}
            />
        </div>
    );
}

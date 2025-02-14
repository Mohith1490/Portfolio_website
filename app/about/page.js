import React from 'react';

const Page = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center p-5'>
            <div className='w-full max-w-screen-lg mt-16'>
                <h1 className='text-4xl sm:text-5xl font-bold text-center mb-6'>About Me:</h1>
                <section className='w-full h-auto border-2 border-white p-6 sm:p-8 md:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'>
                    <p className='text-base sm:text-lg leading-relaxed text-justify'>
                        Hi, I'm Mohith, a second-year engineering student passionate about software development and open-source contributions. I enjoy working on real-world projects, refining my coding skills, and collaborating with the developer community.
                        <br /><br />
                        📚 <strong>Education & Experience</strong> <br />
                        - Second-year engineering student with a keen interest in full-stack development. <br />
                        - Actively contributed to Hacktoberfest, gaining experience in open-source collaboration and version control. <br />
                        - Worked on various technical projects, enhancing my problem-solving and development skills. <br /><br />
                        
                        💡 <strong>Technical Skills & Interests</strong> <br />
                        - Tech Stack: JavaScript, React, Node.js, Express, MongoDB. <br />
                        - Interests: Open-source development, web applications, and scalable system design. <br />
                        - Familiar with Git, GitHub, and API development. <br /><br />
                        
                        🏆 <strong>Notable Achievements</strong> <br />
                        - Successfully contributed to multiple open-source repositories during Hacktoberfest. <br />
                        - Built and worked on various development projects to improve my technical expertise. <br /><br />
                        
                        🚀 <strong>Future Goals</strong> <br />
                        - Exploring advanced web technologies and contributing to larger open-source projects. <br />
                        - Aiming to participate in Google Summer of Code (GSoC) and other developer programs. <br />
                        - Constantly learning and improving my problem-solving skills with Data Structures & Algorithms. <br /><br />
                        
                        📬 <strong>Let's Connect!</strong> <br />
                        I'm always open to collaborating on exciting projects and discussing tech. Feel free to connect with me on GitHub, LinkedIn, or via email!
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Page;

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <section className="w-[90vw] max-w-[1500px] mt-20 md:w-[80vw] h-auto border-2 border-white p-6 md:p-10 rounded-xl flex flex-col xl:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="text-3xl md:text-5xl 2xl:text-7xl ">Hello, I'm</p>
          <h1 className="text-color text-4xl sm:text-7xl 2xl:text-9xl ">Mohith Singh</h1>
          <p className="text-2xl md:text-3xl mt-2 2xl:text-5xl ">Full-stack Developer.</p>
          <a className="hover-button border-2 border-white rounded-3xl relative mt-5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500" href="/resume.pdf" target="_blank" >
            Resume
          </a>
        </div>
        <div className="rounded-full  ">
          <Image 
            src='/profilepic.png' 
            alt="profile-pic" 
            width={400} 
            height={400} 
            className="rounded-full "
          />
        </div>

      </section>
    </div>
  );
}

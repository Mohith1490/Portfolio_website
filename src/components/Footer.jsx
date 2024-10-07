import {
  githubIcon,
  linkedinIcon,
  twitterIcon,
} from "/src/assets/exportImages";

function Footer() {
  return (
    <>
      <div className="border-t flex border-Lines w-full h-12 absolute bottom-0 justify-between">
        <span className=" relative h-full float-start flex">
          <p className="text-Codesnippet flex justify-center items-center align-middle h-full px-2 border-r border-Lines">
            find me in:
          </p>
          <div className="w-14 flex justify-center  relative border-r border-Lines">
            <a href="https://x.com/MohithSingh_108" target="_blank">
              <img
                src={twitterIcon}
                alt="discord-icon"
                className="w-icons h-full relative self-center"
              />
            </a>
          </div>
          <div className="w-14 flex justify-center  relative border-r border-Lines">
            <a
              href="https://www.linkedin.com/in/mohithsingh1754/"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                alt="linkedin-icon"
                className=" w-icons h-full relative self-center"
              />
            </a>
          </div>
        </span>
        <span className=" relative h-full float-start flex px-4">
          <p className="text-Codesnippet flex justify-center items-center align-middle h-full px-2 border-l border-Lines">
            @Mohith1490
          </p>
          <a href="https://github.com/Mohith1490" target="_blank">
            <img
              src={githubIcon}
              alt="github-icon"
              className="w-5 h-full relative self-center "
            />
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;

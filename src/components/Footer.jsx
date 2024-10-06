import {
  githubIcon,
  linkedinIcon,
  twitterIcon,
  discordIcon,
} from "/src/assets/exportImages";

function Footer() {
  return (
    <>
      <div className="border flex border-Lines w-full h-12 absolute bottom-0 justify-between">
        <span className=" relative h-full float-start flex">
          <p className="text-Codesnippet flex justify-center items-center align-middle h-full px-2 border-r border-Lines">
            find me in:
          </p>
          <div className="w-14 flex justify-center  relative border-r border-Lines">
            <img
              src={discordIcon}
              alt="discord-icon"
              className="w-icons h-full relative self-center"
            />
          </div>
          <div className="w-14 flex justify-center  relative border-r border-Lines">
            <img
              src={linkedinIcon}
              alt="linkedin-icon"
              className=" w-icons h-full relative self-center"
            />
          </div>
        </span>
        <span className=" relative h-full float-start flex px-4">
          <p className="text-Codesnippet flex justify-center items-center align-middle h-full px-2 border-l border-Lines" >@Mohith1490</p>
            <img src={githubIcon} alt="github-icon" className="w-5 h-full relative self-center " />
        </span>
      </div>
    </>
  );
}

export default Footer;

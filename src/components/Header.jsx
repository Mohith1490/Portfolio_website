import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-14 border border-Lines flex justify-between">
        <div className="w-Headernav h-full border border-Lines flex justify-between ">
          <div className="w-72 border-r border-Lines flex justify-between items-center px-4">
            mohith-singh
          </div>
          <div className="flex">
            <h5 className="w-28 custom-underline flex justify-center items-center border-r border-Lines px-4" >_hello</h5>
            <h5 className="w-28 custom-underline flex justify-center items-center border-r border-Lines px-4">_about</h5>
            <h5 className="w-28 custom-underline flex justify-center items-center border-r border-Lines px-4">_projects</h5>
          </div>
        </div>
        <div className="w-40 h-13 custom-underline border-l border-Lines flex justify-center items-center">
          <h5 className=" text-Bodytext">_contact-me</h5>
        </div>
      </div>
    </>
  );
};

export default Header;

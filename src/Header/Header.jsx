import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" p-2 items-center bg-slate-300">
      <div className=" container mx-auto hidden lg:flex lg:justify-between max-w-full">
      <div className="p-2 text-2xl text-black font-semibold">React TailwindUi</div>
        <div>
          <div className="grid grid-cols-6 gap-2 text-xl font-semibold ">
            <a className="p-4 hover:text-sky-600" href="#home">
              Home
            </a>
            <a className="p-4 hover:text-sky-600" href="#About">
              About
            </a>
            <a className="p-4 hover:text-sky-600" href="#Service">
              Service
            </a>
            
            <a className="p-4 hover:text-sky-600" href="#Contact">
              Contact
            </a>
            <a href="#login">
              <p className="btn border-solid border-2 border-black hover:bg-sky-500 p-4">
                Login
              </p>
            </a>
            <a href="#registration">
              <p className="btn border-solid border-2 border-black text-lg bg-sky-600 hover:bg-white p-4">
                {" "}
                Open Account
              </p>
            </a>
          </div>
          
        </div>
      </div>
      <div  className="lg:hidden flex justify-between " >
      <div className="p-4 text-black font-semibold text-4xl">React TailwindUi</div>
           <div>
           <button
             
              className="p-2 -mr-1  transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className="w-5 text-gray-600 dark:text-snow-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white dark:bg-slate-300  rounded-md shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600 " viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div onClick={()=>setIsMenuOpen(false)} className="grid grid-rows-6 w-1/2  text-xl font-semibold p-4 mx-auto gap-2 ">
                    <a className="p-4 hover:text-sky-600" href="#home">
                      Home
                    </a>
                    <a className="p-4 hover:text-sky-600" href="#About">
                      About
                    </a>
                    
                    <a className="p-4 hover:text-sky-600" href="#Service">
                      Service
                    </a>
                    <a className="p-4 hover:text-sky-600" href="#Contact">
                      Contact
                    </a>
                    <a href="#login">
                      <p className="btn border-solid border-2 border-black hover:bg-sky-500 p-4">
                        Login
                      </p>
                    </a>
                    <a href="#registration">
                      <p className="btn border-solid border-2 border-black text-lg bg-sky-600 hover:bg-white p-4">
                        {" "}
                        Open Account
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
           </div>
    </div>
  );
};

export default Header;

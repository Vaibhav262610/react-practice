import React from "react";

const Home = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen w-full bg-black text-white">
        <div className="flex flex-col gap-12">
          <h1 className="text-6xl font-bold mb-12">PROJECTS</h1>
          <div className="flex flex-col gap-4  items-center justify-center">
            <a href="/BgChanger">
              <button className="rounded-md text-white bg-blue-500 text-xl px-4 hover:bg-blue-700 duration-150 pl-8 font-bold py-2">
                BG CHANGER
              </button>
            </a>
            <button className="rounded-md text-white bg-blue-500 text-xl px-4 hover:bg-blue-700 duration-150 pl-8 font-bold py-2">
              INCRE/DECRE
            </button>
            <button className="rounded-md text-white bg-blue-500 text-xl px-4 hover:bg-blue-700 duration-150 pl-8 font-bold py-2">
              PASS GENERATOR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useCallback, useEffect, useRef, useState } from "react";

const PassGenerator = () => {
  const [len, setLen] = useState(8);
  const [numAll, setNumAll] = useState(false);
  const [charAll, setCharAll] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordCopy = useCallback(() => {
    // alert('Password Has Been Copied')    
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numAll) str += "0123456789";
    if (charAll) str += "@#$%&_";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      // console.log(pass);
    }

    setPassword(pass);
  }, [len, numAll, charAll]);

  // passwordGenerator()
  useEffect(() => {
    passwordGenerator();
  }, [len, numAll, charAll, passwordGenerator]);

  return (
    <>
      <div className="bg-black gap-8 flex flex-col justify-center items-center w-full h-screen">
        <h1 className=" text-white font-bold text-5xl">PASSWORD GENERATOR</h1>
        <div className="flex flex-col gap-8 items-center justify-center bg-gray-700 p-12 rounded-md">
          <div>
            <input
              readOnly
              value={password}
              ref={passRef}
              type="text"
              className="pass text-xl py-2 px-2 outline-none "
              placeholder="Select To Generate Passwords"
            />
            <button
              onClick={passwordCopy}
              className="copy-btn text-white bg-blue-500 text-xl px-2 pr-4 hover:bg-blue-700 duration-150 pl-8 font-bold py-2"
            >
              Copy
            </button>
          </div>
          <div className="flex gap-12">
            <div className="flex gap-4 items-center">
              <input
                type="range"
                onChange={(e) => {
                  setLen(e.target.value);
                }}
                min={8}
                max={35}
                value={len}
              />
              <h1 className="text-orange-400 text-2xl">Lenght : {len}</h1>
            </div>
            <div className="flex gap-2 justify-center">
              <input
                type="checkbox"
                defaultChecked={numAll}
                onChange={() => {
                  setNumAll((prev) => !prev);
                }}
              />
              <h1 className="text-orange-400 text-2xl">Numbers</h1>
            </div>
            <div className="flex gap-2 justify-center">
              <input
                type="checkbox"
                defaultChecked={numAll}
                onChange={() => {
                  setCharAll((prev) => !prev);
                }}
              />
              <h1 className="text-orange-400 text-2xl">Characters</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassGenerator;

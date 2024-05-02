import React, { useState } from "react";

function AddMinus() {
  let [num, setNum] = useState(0);

  const addNum = () => {
    setNum(num + 1);
  };

  const minusNum = () => {
    if (num == 0) {
      setNum((num = 0));
    } else {
      setNum(num - 1);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-black gap-8">
        <h1 className="text-white text-4xl font-bold">
          Your Number Is : {num}
        </h1>
        <div className="flex gap-4 text-white">
          <button
            className="bg-blue-400 rounded-md hover:bg-blue-600 duration-150  p-4"
            onClick={addNum}
          >
            Click Me To Add Number
          </button>
          <button
            className="bg-blue-400 rounded-md hover:bg-blue-600 duration-150  p-4"
            onClick={minusNum}
          >
            Click Me To Minus Number
          </button>
        </div>
      </div>
    </>
  );
}

export default AddMinus;

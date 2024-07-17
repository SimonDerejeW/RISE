import React from "react";

const PreviousEventCard = () => {
  return (
    <div className="bg-[#CED9FF] h-screen">
      <div className="flex flex-col pt-9 pr-4 pb-4 pl-8 text-xs bg-white rounded-3xl max-w-[467px]">
        <div className="text-3xl font-bold text-zinc-700">Event 1 Title</div>
        <div className="flex gap-1.5 self-start mt-1.5 font-semibold whitespace-nowrap text-zinc-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7e2df97ec4de23d46ccf004e431554d9bfe91691519f1d4e88576be29436f73?"
            className="shrink-0 aspect-[0.95] w-[19px]"
          />
          <div className="my-auto">UNICEF</div>
        </div>
        <div className="flex gap-5 justify-between items-start w-full text-zinc-700">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db51b471511c3dc364eef5a56401d0fb32ace96f6eab9b38509349b83326aed?"
              className="shrink-0 aspect-[1.06] w-[18px]"
            />
            <div className="flex-auto">Refenti Building, Bole Bulbula</div>
          </div>
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70419f56189756862ce0bbf6528effdcd3e61dd19266038c482a0079a04ca8bd?"
              className="shrink-0 w-4 aspect-square"
            />
            <div className="my-auto">Jul 17, 2024</div>
          </div>
        </div>
        <div className="shrink-0 mt-1.5 h-0.5 border-2 border-solid bg-zinc-700 border-zinc-700" />
        <div className="mt-3 leading-5 text-zinc-700">
          Lorem ipsum dolor sit amet consectetur. Nibh condimentum risus nisl
          congue mi purus eget. Quis egestas mauris fusce vulputate. Interdum
          non commodo tortor fermentum malesuada posuere purus elementum. Nisi
          quis sed dolor lorem sed adipiscing egestas sed. Enim consequat
          condimentum mauris ornare lectus enim .
        </div>
        <div className="flex gap-5 justify-between px-0.5 mt-8 w-full">
          <div className="my-auto text-zinc-700">Posted on Jul 5, 2024</div>
          <div className="flex gap-2 justify-center px-6 py-1 font-medium text-white bg-blue-500 leading-[105%] rounded-[1000px]">
            <div className="my-auto">Check Out</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f46bc3043923229121bd471d438a1e263806a264b44405481e1c8c9704053c6b?"
              className="shrink-0 w-11 aspect-[1.52]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEventCard;

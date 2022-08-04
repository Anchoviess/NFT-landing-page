import React from "react";
import Heading from "./Heading";
const socialClass =
  "w-10 h-10 border-2 text-sm flex-colo text-whites mx-2 border-black rounded-full";
function Subcribe() {
  return (
    <div className="my-12">
      <Heading title="SUBSCRIBE TO US" />
      <div className="mt-12">
        <div className="flex overflow-hidden bg-subMain border rounded border-whites">
          <input
            type="email"
            className="bg-subMain w-4/6 md:w-5/6 px-6 sm:py-5 py-3 text-black placeholder:text-whites"
            placeholder="E-mail"
          />
          <button className="w-2/6 md:w-1/6 bg-whites text-black font-bold text-sm rounded">
            SUBSCRIBE
          </button>
        </div>
        <p className="font-medium text-sm text-center italic text-whites mt-3">
          By subcribing, you will get notfication when new NFT's drop
        </p>
        <div className="flex-rows mt-6 pb-12">
          <a href="http://localhost:3000" className={socialClass}>
            <i class="fab fa-medium-m"></i>
          </a>
          <a href="http://localhost:3000" className={socialClass}>
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="http://localhost:3000" className={socialClass}>
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Subcribe;
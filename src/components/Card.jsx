import React from "react";
import { ReactComponent as Logo } from "../../src/assets/images/card-logo.svg";

export default function Card(props) {
  return (
    <div className="relative bg-mobile min-h-[35%] bg-cover sm:bg-main sm:min-w-[30%] sm:min-h-screen text-white">
      <div className="absolute right-4 top-9 sm:-right-36 sm:top-[50%] w-72 sm:w-[20rem]">
        <img
          className=""
          src={require("../../src/assets/images/bg-card-back.png")}
          alt="card back"
        />
        <span className="absolute right-9 top-[4.3rem] text-xs sm:right-10 sm:top-[4.8rem]">
          {props.cvc}
        </span>
      </div>
      <div className="absolute top-[7.8rem] left-4 sm:left-60 sm:top-44 w-72 sm:w-[20rem]">
        <img
          src={require("../../src/assets/images/bg-card-front.png")}
          alt="card front"
        />
        <div className="absolute top-3 left-4">
          <Logo />
        </div>

        <span className="absolute right-0 left-5 top-[5rem] text-sm sm:text-lg  sm:top-[6rem] tracking-[0.2em] w-full card-number">
          {props.cardNumber.split("").map((number, idx) => (
            <span key={idx}>{number}</span>
          ))}
        </span>
        <span className="absolute bottom-6 left-5 sm:bottom-4 text-sm tracking-[0.1em]">
          {props.cardholderName.toUpperCase()}
        </span>
        <span className="absolute bottom-6 sm:bottom-4 right-5 text-sm tracking-[0.2em]">
          {`${props.expireDate}/${props.expireYear}`}
        </span>
      </div>
    </div>
  );
}

import React from "react";
import { ReactComponent as Logo } from "../../src/assets/images/card-logo.svg";

export default function Card(props) {
  return (
    <div className="relative bg-mobile min-h-[15rem] bg-cover lg:bg-main lg:w-[40rem] lg:min-h-screen text-white">
      <div className="absolute right-4 top-9 lg:-right-36 lg:top-96 w-72 lg:w-[20rem]">
        <img
          className=""
          src={require("../../src/assets/images/bg-card-back.png")}
          alt="card back"
        />
        <span className="absolute right-9 top-[4.3rem] text-xs lg:right-10 lg:top-[4.8rem]">
          {props.cvc}
        </span>
      </div>
      <div className="absolute top-[7.8rem] left-4 lg:left-56 lg:top-44 w-72 lg:w-[20rem]">
        <img
          src={require("../../src/assets/images/bg-card-front.png")}
          alt="card front"
        />
        <div className="absolute top-3 left-4">
          <Logo />
        </div>

        <span className="absolute right-0 left-5 top-[5rem] lg:text-lg  lg:top-[6rem] tracking-[0.2em] w-full card-number">
          {props.cardNumber.split("").map((number, idx) => (
            <span key={idx}>{number}</span>
          ))}
        </span>
        <span className="absolute bottom-6 left-5 lg:bottom-4 tracking-[0.1em] text-[10px] font-sans-serif">
          {props.cardholderName.toUpperCase()}
        </span>
        <span className="absolute bottom-6 lg:bottom-4 right-5 tracking-[0.2em] text-[10px] font-sans-serif">
          {`${props.expireDate}/${props.expireYear}`}
        </span>
      </div>
    </div>
  );
}

import React from "react";
import Button from "./Button";
import { ReactComponent as CheckIcon } from "../assets/images/icon-complete.svg";

export default function Confirmation() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-4 text-sm w-full max-w-sm font-sans-serif">
      <CheckIcon />
      <h1 className="uppercase text-lg font-semibold tracking-[0.1em]">
        Thank You!
      </h1>
      <h4 className="font-semi text-dark-grayish-violet">
        We've added your card details
      </h4>
      <Button title="Continue" className="w-full" />
    </div>
  );
}

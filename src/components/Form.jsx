import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex flex-col gap-4 px-4 text-sm"
    >
      <Input
        type="text"
        placeholder="e.g. Jane Appleseed"
        label="CARDHOLDER NAME"
      />

      <Input
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
        label="CARD NUMBER"
      />
      <div className="flex gap-3">
        <div className="w-[12rem] flex gap-3">
          <Input type="number" placeholder="MM" label="EXP. DATE" />

          <Input type="number" placeholder="YY" label="(MM/YY)" />
        </div>

        <Input type="text" placeholder="e.g. 123" label="CVC" />
      </div>
      <Button title="Confirm" />
    </form>
  );
}

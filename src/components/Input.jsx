import React from "react";

export default function Input(props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold tracking-[0.1em] font-sans-serif w-full text-xs">
        {props.label}
        <input
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="border h-12 rounded-lg text-left w-full px-2"
        />
      </label>
    </div>
  );
}

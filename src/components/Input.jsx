import React from "react";

export default function Input(props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold tracking-[0.1em] font-sans-serif w-full text-xs">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        id={props.id}
        className="border h-12 rounded-lg text-left w-full px-2"
      />
    </div>
  );
}

import React from "react";

export default function Button(props) {
  return (
    <button className="bg-very-dark-violet text-white p-3 rounded-lg text-lg border-none">
      {props.title}
    </button>
  );
}

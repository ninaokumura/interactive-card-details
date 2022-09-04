import React from "react";
import clsx from "clsx";

export default function Button({ className, title, ...props }) {
  return (
    <button
      className={clsx(
        "bg-very-dark-violet text-light-grayish-violet p-3 rounded-lg text-lg border-none",
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
}

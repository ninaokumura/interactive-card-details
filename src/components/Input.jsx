import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(
  ({ className, label, errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 max-w-xl">
        <label className="font-semibold tracking-[0.1em] font-sans-serif w-full text-xs grid gap-1.5">
          {label}
          <input
            ref={ref}
            {...props}
            className={clsx(
              "border h-12 rounded-lg text-left w-full px-2",
              className
            )}
          />
          {errorMessage && (
            <p role="alert" className="text-red-500 max-w-[20rem] text-xs">
              {errorMessage}
            </p>
          )}
        </label>
      </div>
    );
  }
);

export default Input;

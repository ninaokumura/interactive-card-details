import React, { useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const isNumber = n => !isNaN(Number(n));
const isNotNumber = n => isNaN(Number(n));

export default function Form(props) {
  const schema = yup.object().shape({
    cardholderName: yup.string().required("Your full name is required!"),
    cardNumber: yup
      .number()
      .typeError("you must enter a valid card number")
      .required(),
    expireDate: yup
      .number()
      .typeError("Can't be blank")
      .min(1)
      .max(12)
      .required(),
    expireYear: yup
      .number()
      .typeError("Can't be blank")
      .positive()
      .integer()
      .required(),
    cvc: yup
      .number()
      .typeError("Can't be blank")
      .positive()
      .integer()
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const { cardholderName, cardNumber, expireDate, expireYear, cvc } = watch();

  useEffect(() => {
    props.onCardholderNameChange({
      target: { value: cardholderName },
    });
  }, [cardholderName, props]);

  useEffect(() => {
    props.onCardNumberChange({
      target: { value: cardNumber },
    });
  }, [cardNumber, props]);

  useEffect(() => {
    props.onExpireDateChange({
      target: { value: expireDate },
    });
  }, [expireDate, props]);

  useEffect(() => {
    props.onExpireYearChange({
      target: { value: expireYear },
    });
  }, [expireYear, props]);

  useEffect(() => {
    props.onCvcChange({
      target: { value: cvc },
    });
  }, [cvc, props]);

  const onSubmit = data => {
    props.onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 px-4 text-sm w-full max-w-sm"
    >
      <Input
        type="text"
        placeholder="e.g. Jane Appleseed"
        label="CARDHOLDER NAME"
        maxLength="100"
        onKeyDown={e => {
          // regex => /^\d+$/.test(e.key)
          const isValid =
            isNotNumber(e.key) || e.key === "Backspace" || e.key === " ";

          if (!isValid) {
            e.preventDefault();
          }
        }}
        errorMessage={errors.cardholderName?.message}
        {...register("cardholderName")}
      />
      <Input
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        label="CARD NUMBER"
        maxLength="16"
        onKeyDown={e => {
          // regex => /^\d+$/.test(e.key)
          const isNumber = n => !isNaN(Number(n));

          const isValid = isNumber(e.key) || e.key === "Backspace";

          if (!isValid) {
            e.preventDefault();
          }
        }}
        errorMessage={errors.cardNumber?.message}
        {...register("cardNumber")}
      />

      <div className="flex gap-5">
        <div className="w-[10rem] flex gap-3">
          <Input
            type="text"
            placeholder="MM"
            label="EXP. DATE"
            min="1"
            max="12"
            maxLength="2"
            onKeyDown={e => {
              // regex => /^\d+$/.test(e.key)

              const isValid = isNumber(e.key) || e.key === "Backspace";

              if (!isValid) {
                e.preventDefault();
              }
            }}
            errorMessage={errors.expireDate?.message}
            {...register("expireDate")}
          />
          <Input
            type="text"
            placeholder="YY"
            label="(MM/YY)"
            min="1"
            max="31"
            maxLength="2"
            onKeyDown={e => {
              // regex => /^\d+$/.test(e.key)

              const isValid = isNumber(e.key) || e.key === "Backspace";

              if (!isValid) {
                e.preventDefault();
              }
            }}
            errorMessage={errors.expireYear?.message}
            {...register("expireYear")}
          />
        </div>

        <Input
          className="w-40"
          type="text"
          placeholder="e.g. 123"
          label="CVC"
          min="1"
          max="999"
          maxLength="3"
          onKeyDown={e => {
            // regex => /^\d+$/.test(e.key)

            const isValid = isNumber(e.key) || e.key === "Backspace";

            if (!isValid) {
              e.preventDefault();
            }
          }}
          errorMessage={errors.cvc?.message}
          {...register("cvc")}
        />
      </div>

      <Button type="submit" title="Confirm" />
    </form>
  );
}

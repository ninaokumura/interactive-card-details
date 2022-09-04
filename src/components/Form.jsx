import React, { useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Form(props) {
  const schema = yup.object().shape({
    cardholderName: yup.string().required("Your full name is required!"),
    cardNumber: yup
      .number()
      .typeError("you must enter a valid card number")
      .required(),
    expireDate: yup
      .number()
      .typeError("You must enter a valid month")
      .min(1)
      .max(12)
      .required(),
    expireYear: yup
      .number()
      .typeError("You must enter a valid year")
      .positive()
      .integer()
      .required(),
    cvc: yup
      .number()
      .typeError("You must enter a valid cvc")
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

  const onSubmit = (data, e) => {
    console.log({ data });
    console.log("Hello world!");
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 px-4 text-sm"
    >
      <Input
        type="text"
        placeholder="e.g. Jane Appleseed"
        label="CARDHOLDER NAME"
        maxlength="100"
        errorMessage={errors.cardholderName?.message}
        {...register("cardholderName")}
      />
      <Input
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
        label="CARD NUMBER"
        maxlength="16"
        errorMessage={errors.cardNumber?.message}
        {...register("cardNumber")}
      />
      <div className="flex gap-3">
        <div className="w-[12rem] flex gap-3">
          <Input
            type="number"
            placeholder="MM"
            label="EXP. DATE"
            min="1"
            max="12"
            maxLength="2"
            errorMessage={errors.expireDate?.message}
            {...register("expireDate")}
          />
          <Input
            type="number"
            placeholder="YY"
            label="(MM/YY)"
            min="1"
            max="31"
            maxlength="2"
            errorMessage={errors.expireYear?.message}
            {...register("expireYear")}
          />
        </div>

        <Input
          type="number"
          placeholder="e.g. 123"
          label="CVC"
          min="1"
          max="999"
          maxlength="3"
          errorMessage={errors.cvc?.message}
          {...register("cvc")}
        />
      </div>

      <Button type="submit" title="Confirm" />
    </form>
  );
}

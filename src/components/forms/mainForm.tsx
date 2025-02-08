"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { sendEmail } from "@/app/action/sendEmail";
import { FirstStepForm } from "@/components/forms/firstStepForm";
import { SecondStepForm } from "@/components/forms/secondStepForm";
import { ThirdStepForm } from "@/components/forms/thirdStepForm";

import "react-toastify/dist/ReactToastify.css";

export default function MainForm() {
  const [activeForm, setActiveForm] = useState(0);

  const validationSchema = Yup.object({
    food: Yup.string().required("Please select a food."),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<MainFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<MainFormProps> = async (data) => {
    try {
      console.log("Form Data:", data);

      const response = sendEmail(data);

      await toast.promise(response, {
        pending: "Sending Valentines Invitation...",
        success: "Valentines Invitation sent successfully.",
        error: "Something went wrong.",
      });
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      reset();
      setActiveForm(0);
    }
  };

  const formElements = [
    <FirstStepForm key="firstStep" />,
    <SecondStepForm key="secondStep" />,
    <ThirdStepForm key="thirdStep" register={register} />,
  ];

  const isLastForm = activeForm === formElements.length - 1;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>{formElements[activeForm]}</div>

      {/* back & submit button */}
      {isLastForm && (
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <button
            onClick={() => setActiveForm((prev) => prev - 1)}
            className="bg-gray-500 text-white rounded-lg px-4 py-2"
          >
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent text-white rounded-lg px-4 py-2"
          >
            Submit
          </button>
        </div>
      )}

      {/* next & back button */}
      {!isLastForm && (
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <button
            disabled={activeForm === 0}
            onClick={() => setActiveForm((prev) => prev - 1)}
            className="bg-gray-500 text-white rounded-lg px-4 py-2"
          >
            No
          </button>

          <button
            disabled={isLastForm}
            onClick={() => setActiveForm((prev) => prev + 1)}
            className="bg-accent text-white rounded-lg px-4 py-2"
          >
            Yes
          </button>
        </div>
      )}
    </form>
  );
}

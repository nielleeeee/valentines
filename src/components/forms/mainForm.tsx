"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { sendEmail } from "@/app/action/sendEmail";
import { FirstStepForm } from "@/components/forms/firstStepForm";
import { SecondStepForm } from "@/components/forms//secondStepForm";

import "react-toastify/dist/ReactToastify.css";

export default function MainForm() {
  const [activeForm, setActiveForm] = useState(0);

  const validationSchema = Yup.object({
    food: Yup.string().required("Please select a food."),
  });

  const {
    // register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    // control,
    // watch,
    // setValue,
    reset,
  } = useForm<MainFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<MainFormProps> = async (data) => {
    try {
      const response = sendEmail(data);

      await toast.promise(response, {
        pending: "Sending contact form...",
        success: "Contact form sent successfully.",
        error: "Something went wrong.",
      });
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      reset();
    }
  };

  const formElements = [
    <FirstStepForm key="firstStep" />,
    <SecondStepForm key="secondStep" />,
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>{formElements[activeForm]}</div>

      {/* next & back button */}
      <div className="w-full flex flex-row gap-4 items-center justify-center">
        <button
          disabled={activeForm === 0}
          onClick={() => setActiveForm((prev) => prev - 1)}
          className="bg-gray-500 text-white rounded-lg px-4 py-2"
        >
          No
        </button>

        <button
          disabled={activeForm === formElements.length - 1}
          onClick={() => setActiveForm((prev) => prev + 1)}
          className="bg-accent text-white rounded-lg px-4 py-2"
        >
          Yes
        </button>
      </div>
    </form>
  );
}

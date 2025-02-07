"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/emailTemplate/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: MainFormProps) => {
  const { food } = formData;

  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zairevilla1@gmail.com",
      subject: "Valentines Invitation",
      react: EmailTemplate({
        food,
      }) as React.ReactElement,
    });

    return { status: true, message: "Email sent successfully", data };
  } catch (error) {
    console.error(error);
    return { status: false, message: "Error sending email", data: null };
  }
};

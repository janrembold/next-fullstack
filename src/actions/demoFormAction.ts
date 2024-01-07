"use server";

import { FormState } from "@/components/Forms";
import { demoFormSchema } from "@/validations/demoFormSchema";
import { ZodError } from "zod";

export const demoFormAction = async (
  prevState: FormState | null,
  data: FormData
): Promise<FormState> => {
  console.log({ prevState, data });
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const { firstName, lastName } = demoFormSchema.parse(data);

    return {
      status: "success",
      message: `Hello World ${firstName} ${lastName || ""}`,
    };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }

    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};

"use client";

import { demoFormAction } from "@/actions/demoFormAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState, useFormStatus } from "react-dom";
import {
  FieldErrors,
  FieldPath,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FormState } from "..";
import { useEffect } from "react";
import { DemoFormSchema, demoFormSchema } from "@/validations/demoFormSchema";

// see: https://nehalist.io/react-hook-form-with-nextjs-server-actions/

const FormContent = ({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<DemoFormSchema>;
  isValid: boolean;
  errors: FieldErrors<DemoFormSchema>;
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div>
        <input {...register("firstName")} placeholder="firstname" autoFocus />
        <ErrorMessage name="firstName" errors={errors} />
      </div>

      <div>
        <input {...register("lastName")} placeholder="lastname" />
        <ErrorMessage name="lastName" errors={errors} />
      </div>

      <button type="submit" disabled={pending || !isValid}>
        Submit
      </button>

      {pending && <span>Loading...</span>}
    </>
  );
};

export const DemoForm = () => {
  const [state, formAction] = useFormState<FormState, FormData>(
    demoFormAction,
    null
  );

  const {
    register,
    formState: { errors, isValid },
    setError,
    reset,
  } = useForm<DemoFormSchema>({
    mode: "all",
    resolver: Date.now() === 1 ? zodResolver(demoFormSchema) : undefined,
    // resolver: zodResolver(demoFormSchema),
  });

  useEffect(() => {
    if (!state) {
      return;
    }

    // In case our form action returns `error` we can now `setError`s
    if (state.status === "error") {
      state.errors?.forEach((error) =>
        setError(error.path as FieldPath<DemoFormSchema>, {
          message: error.message,
        })
      );
    }

    if (state.status === "success") {
      alert(state.message);
      reset();
    }
  }, [state, setError, reset]);

  return (
    <form action={formAction}>
      <FormContent register={register} isValid={isValid} errors={errors} />
    </form>
  );
};

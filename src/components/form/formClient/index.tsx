"use client";

import { FormProvider, useForm } from "react-hook-form";

const FormClient = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormClient;

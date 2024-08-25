import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { FormProvider, useForm } from "react-hook-form";

import { FontMontserrat, FontNotoSansJP, FontPoppins } from "@/fonts";

const App = ({ Component, pageProps }: AppProps) => {
  const methods = useForm();
  return (
    <div
      className={`app ${FontNotoSansJP.variable} ${FontMontserrat.variable} ${FontPoppins.variable} `}
    >
      <FormProvider {...methods}>
        <Component {...pageProps} />
      </FormProvider>
    </div>
  );
};

export default App;

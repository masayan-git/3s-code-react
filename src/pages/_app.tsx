import "@/styles/globals.scss";

import type { AppProps } from "next/app";

import { FontMontserrat, FontNotoSansJP, FontPoppins } from "@/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`app ${FontNotoSansJP.variable} ${FontMontserrat.variable} ${FontPoppins.variable} `}
    >
      <Component {...pageProps} />
    </div>
  );
}

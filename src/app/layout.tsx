import "@/styles/globals.scss";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import FormClient from "@/components/form/formClient";
import Header from "@/components/header";
import { FontMontserrat, FontNotoSansJP, FontPoppins } from "@/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://3s-code.com/"),
  title: {
    template: "%s | 3S code",
    default: "3S code",
  },
  description: "あなたの想いをWebに表現します。",
  openGraph: {
    title: "3S code",
    description: "あなたの想いをWebに表現します。",
    images: ["/favicon/android-chrome-512x512.png"],
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${FontNotoSansJP.variable} ${FontMontserrat.variable} ${FontPoppins.variable}`}
    >
      <body>
        <FormClient>
          <Header />
          <main>{children}</main>
          <Footer />
        </FormClient>
      </body>
    </html>
  );
}

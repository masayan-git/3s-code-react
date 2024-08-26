import "@/styles/globals.scss";

import Footer from "@/components/footer";
import FormClient from "@/components/form/formClient";
import Header from "@/components/header";
import { FontMontserrat, FontNotoSansJP, FontPoppins } from "@/fonts";

export const metadata = {
  title: "3S code - 大阪のWeb制作フリーランス",
  description: "あなたの想いをWebに表現します。",
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
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

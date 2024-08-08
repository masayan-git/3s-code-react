import { Montserrat, Noto_Sans_JP, Poppins } from "@next/font/google";

export const FontNotoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const FontMontserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const FontPoppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

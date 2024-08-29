import type { Metadata } from "next";

import ContactLayoutContainer from "@/layouts/contact";
import type { LayoutProps } from "@/types";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "お問い合わせフォームです。",
};

const ContactLayout = ({ children }: LayoutProps) => {
  return <ContactLayoutContainer>{children}</ContactLayoutContainer>;
};

export default ContactLayout;

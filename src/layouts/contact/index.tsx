import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTitle from "@/components/pageTitle";
import type { LayoutProps } from "@/types";

const ContactLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <PageTitle titleEn="Contact" titleJa="お問い合わせ" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ContactLayout;

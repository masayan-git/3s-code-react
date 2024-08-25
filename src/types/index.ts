export type LayoutProps = {
  page: string;
  description?: string;
  children: React.ReactNode;
};

export interface FormData {
  company: string;
  name: string;
  email: string;
  tel: string;
  content: string;
}

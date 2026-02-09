export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];

export type LocaleParams = Promise<{ locale: string }>;

export interface LayoutProps {
  children: React.ReactNode;
  params: LocaleParams;
}

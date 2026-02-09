import { geistSans, geistMono, vazir } from "../../lib/fonts";
import { LayoutProps } from "../../types/i18n";
import "./globals.css";
export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

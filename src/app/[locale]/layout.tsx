import { geistSans, geistMono } from "../../lib/fonts";
import { LayoutProps } from "../../types/i18n";
import "./globals.css";
export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

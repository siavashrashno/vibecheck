import { ThemeProvider } from "@/components/theme-provider";
import { geistSans, geistMono, vazir } from "../../lib/fonts";
import { LayoutProps } from "../../types/i18n";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { UserProvider } from "@/context/user-context";

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable} antialiased`}
      >
        <UserProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}

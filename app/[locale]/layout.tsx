// layout.tsx file to define the layout for all pages in the app

// Importing necessary libraries and configurations
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

// Integrating Roboto font from RootLayout
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Garbanų Klinika",
  description: "Garbanų Klinika",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

// Defining prop types for LocaleLayout component
type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

// LocaleLayout component to provide locale and messages to all pages in the app
// Additionally integrating Inter font styles from RootLayout
export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        {/* Wrapping children with NextIntlClientProvider to provide localization features */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Function to load message files based on current locale
async function loadMessages(locale: string) {
  try {
    const messagesModule = await import(`../../messages/${locale}.json`);
    return messagesModule.default;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

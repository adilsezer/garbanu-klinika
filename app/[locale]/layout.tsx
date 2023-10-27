// layout.tsx file to define the layout for all pages in the app

// Importing necessary libraries and configurations
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { locales } from "@/config/i18nconfig";
import { Analytics } from "@vercel/analytics/react";

// Integrating Inter font from RootLayout
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garbanų Klinika",
  description: "The best curl service in Vilnius",
};

// Defining prop types for LocaleLayout component
type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

// Function to generate static params based on locales from config
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// LocaleLayout component to provide locale and messages to all pages in the app
// Additionally integrating Inter font styles from RootLayout
export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
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

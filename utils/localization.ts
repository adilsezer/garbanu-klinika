import { notFound } from "next/navigation";

type Messages = { [key: string]: string };

// Function to load message files based on current locale
export async function loadMessages(locale: string): Promise<Messages> {
  try {
    const messagesModule = await import(`../messages/${locale}.json`);
    return messagesModule.default as Messages;
  } catch (error: any) {
    console.error(error instanceof Error ? error.message : error);
    notFound();
    return {};
  }
}

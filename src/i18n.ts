import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const localePrefix = "always";
export const locales = ["en", "de"] as const;
export const defaultLocale = "de";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

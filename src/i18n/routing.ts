import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es"];
export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  pathnames: {
    '/': '/',
    '/pathnames': {
     es : '/pfadnamen'
    }
  }
});

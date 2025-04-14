export function generateStaticParams() {
  const locales = ["en", "es", "fr"];
  console.log("⚡ Generando rutas para:", locales);
  return locales.map((locale) => ({ locale }));
}

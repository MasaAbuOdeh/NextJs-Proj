import "./globals.css";

export default function RootLayout({ children }) {
  const lang = "en";
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        {children}
      </body>
    </html>
  );
}

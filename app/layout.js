import "./globals.css";

export const metadata = {
  title: "لوحة التحكم",
  description: "لوحة التحكم لعرض الإحصائيات، التقارير، وأداء النظام",
};

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

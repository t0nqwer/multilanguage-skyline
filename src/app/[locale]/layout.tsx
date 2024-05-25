import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import NavBarHome from "./_components/NavbarHome";

const IMB = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skyline Bussiness plus",
  description: "master the core technology of solar energy",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={IMB.className}>
        <NextIntlClientProvider messages={messages}>
          <Sidebar />
          <NavBarHome locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

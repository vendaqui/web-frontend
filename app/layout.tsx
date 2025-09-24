import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ApolloClientProvider } from "./apollo-provider";
import { I18nProvider } from "./(private)/_providers/i18n-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vendaqui - Seu marketplace de confiança",
  description: "A plataforma ideal para comprar e vender produtos com segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <I18nProvider>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

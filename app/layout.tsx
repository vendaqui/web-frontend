import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ApolloClientProvider } from "./apollo-provider";
import { I18nProvider } from "./_providers/i18n-provider"; 
import { Plasma } from "../components/plasma";

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
          <div className="fixed inset-0 z-0 bg-black">
            <Plasma color="#C6FF3A" opacity={0.7} />
          </div>
          <div className="relative z-10">
            <ApolloClientProvider>{children}</ApolloClientProvider>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}

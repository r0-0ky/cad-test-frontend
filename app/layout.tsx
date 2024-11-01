import type { Metadata } from "next";
import "@/src/app/styles/globals.css";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import { Provider } from "@/src/app/providers/Provider";

export const metadata: Metadata = {
  title: "CDA test app",
  description: "Created with love",
  openGraph: {
    title: "CDA test app",
    description: "Created with love",
  },
  twitter: {
    title: "CDA test app",
    description: "Created with love",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
      </Provider>
    </html>
  );
}

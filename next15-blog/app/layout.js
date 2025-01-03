// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Roboto_Slab } from "next/font/google";
import Chatbot from "@/components/Chatbot";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata = {
  title: {
    template: "%s | Damian Demasi",
    default: "Damian Demasi",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={roboto_slab.className}
      >
        <Header />
        <main className="mt-12">{children}</main>
        <Chatbot />
      </body>
    </html>
  );
}

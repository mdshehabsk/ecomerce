
import ReduxProvider from "@/toolkit/Redux-Provider";
import Header from "../components/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider  >
        <body className={` relative `}>
          <Header />
          {children}
          <Footer/>
        </body>
      </ReduxProvider>
    </html>
  );
}

import type { Metadata } from "next";
import styles from './layout.module.scss'
import './globalStyles/globalThemes.scss'
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

export const metadata: Metadata = {
  title: "MWJ Resume",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

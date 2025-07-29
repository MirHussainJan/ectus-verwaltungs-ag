import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MantineProvider } from '@mantine/core';
import { Toaster } from 'sonner';
import '@mantine/core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SK BlackRock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {children}
          <Toaster position="bottom-right" />
        </MantineProvider>
      </body>
    </html>
  );
}

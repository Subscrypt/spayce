import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "./components/header/Header";
import LeftMenu from "./components/LeftMenu";
import Providers from "./components/safe/providers/Providers";
import QueryProvider from "./providers/queryProvider"

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subscrypt",
  description: "Save money on Netflix with Subscrypt",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {

  return (
    <Providers>
      <html lang="en">
        <body
          className={`${figtree.className} text-gray-900 bg-gray-50 2xl:px-32 md:px-4 px-1 py-2 flex flex-col gap-1 h-screen`}
        >
          <Header />
          <div className="w-full flex flex-row gap-1 h-[92vh]">
            <LeftMenu />
            <div className="bg-white rounded-2xl w-full overflow-auto md:p-5 p-1">
              <QueryProvider>
                {props.children}
                {props?.modal}
              </QueryProvider>
            </div>
          </div>
        </body>
      </html>
    </Providers>
  );
}

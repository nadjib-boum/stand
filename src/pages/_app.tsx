import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ModalProvider from "@/providers/ModalsProvider";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const qc = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  console.log(pageProps.session);
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={qc}>
        <Toaster />
        <main className={font.className}>
          <Navbar />
          <ModalProvider />
          {getLayout(<Component {...pageProps} />)}
        </main>
      </QueryClientProvider>
    </SessionProvider>
  );
}

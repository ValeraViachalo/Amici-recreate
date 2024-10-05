import "@/styles/reset.scss";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { ScrollProvider } from "@/providers/ScrollProvider/ScrollProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { PageTransition } from "@/utils/PageTransition/PageTransition";

const queryC = new QueryClient();

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <Head>
        <title>Amici</title>
        <meta name="og:title" content="Amici recreation" />
        {/* <meta name="description" content={data.documentDescription} /> */}
        <meta property="og:image" content="/images/screenshot.png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="405" />
        <meta property="og:image:alt" content="RTRTS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <QueryClientProvider client={queryC}>
        <ScrollProvider>
          <AnimatePresence mode="wait">
            <PageTransition key={router.route} />
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </ScrollProvider>
      </QueryClientProvider>
    </div>
  );
}

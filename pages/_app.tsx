import { SWRConfig } from "swr";
import "../global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

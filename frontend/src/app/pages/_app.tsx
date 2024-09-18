import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

type NextPageWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

export default function MyApp({ Component, pageProps }: NextPageWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

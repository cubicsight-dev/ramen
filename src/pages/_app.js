import Layout from "@/components/layout";
import GlobalData from "@/context/context";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
        <GlobalData>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalData>
    </>
  );
}

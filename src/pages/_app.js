// import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import { AppProvider } from "@/contexts/AppState";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

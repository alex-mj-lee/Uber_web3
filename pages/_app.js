import { UberProvider } from "../context/uberContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UberProvider>
      <Component {...pageProps} />
    </UberProvider>
  );
}

export default MyApp;

import { useRouter } from "next/dist/client/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div aria-live="assertive" aria-atomic="true" key={router.asPath}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/assets/css/animate.css";
import "../../public/assets/css/all.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/swiper-bundle.css";
import "../../public/assets/css/style.css";
import '../styles/globals.css'; 
import { useEffect } from "react";

// --- IMPORT LAYOUT HERE ---
import Layout from "../components/layout/Layout";

//Default Warning Error Hide
console.log = console.warn = console.error = () => {};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Bootstrap JS Import
    import("bootstrap/dist/js/bootstrap");

    // WOW INIT (SAFE for Next.js)
    const loadWow = async () => {
      if (typeof window !== "undefined") {
        const WOW = (await import("wowjs")).WOW;
        new WOW().init();
      }
    };

    loadWow();
  }, []);

  return (
    // --- WRAP EVERYTHING IN LAYOUT ---
    <Layout>
      <Component {...pageProps} />

      {/* WOW Library Load */}
      <Script src="/js/wow.min.js" strategy="lazyOnload" />
    </Layout>
  );
}

export default MyApp;
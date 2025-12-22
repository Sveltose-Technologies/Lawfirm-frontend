
// import Script from "next/script";
// import { useEffect } from "react";

// // CSS Imports
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../public/assets/css/animate.css";
// import "../../public/assets/css/all.css";
// import "../../public/assets/css/boxicons.min.css";
// import "../../public/assets/css/bootstrap-icons.css";
// import "../../public/assets/css/swiper-bundle.css";
// import "../../public/assets/css/style.css";
// import '../styles/globals.css'; 

// import Layout from "../components/layout/Layout";
// import DisclaimerPopup from "../components/DisclaimerPopup";

// function MyApp({ Component, pageProps }) {
//   return (
   
//       <Layout>
//         <DisclaimerPopup />
//         <Component {...pageProps} />
//       </Layout>
   
//   );
// }

// export default MyApp;


// import Script from "next/script";
// import { useEffect } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../public/assets/css/animate.css";
// import "../../public/assets/css/all.css";
// import "../../public/assets/css/boxicons.min.css";
// import "../../public/assets/css/bootstrap-icons.css";
// import "../../public/assets/css/swiper-bundle.css";
// import "../../public/assets/css/style.css";
// import '../styles/globals.css'; 

// import Layout from "../components/layout/Layout";
// import DisclaimerPopup from "../components/DisclaimerPopup";

// function MyApp({ Component, pageProps }) {
  

//   const getLayout = Component.getLayout || ((page) => (
//     <Layout>
//       <DisclaimerPopup />
//       {page}
//     </Layout>
//   ));

//   return getLayout(<Component {...pageProps} />);
// }

// export default MyApp;

import { useRouter } from 'next/router';
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// Saari CSS files
import "../../public/assets/css/animate.css";
import "../../public/assets/css/all.css"; 
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.css";
import "../../public/assets/css/style.css";
import '../styles/globals.css'; 

import Layout from "../components/layout/Layout"; 
import AttorneyLayout from "../components/attorney-panel/Layout";
import DisclaimerPopup from "../components/DisclaimerPopup";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAttorneyPanel = router.pathname.startsWith('/attorney-panel');

  // Case 1: Attorney Panel Pages
  if (isAttorneyPanel) {
    return (
      <AttorneyLayout>
        <Component {...pageProps} />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </AttorneyLayout>
    );
  }

  // Case 2: Normal Website Pages
  return (
    <Layout>
      <DisclaimerPopup />
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
    </Layout>
  );
}

export default MyApp;
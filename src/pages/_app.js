
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
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/assets/css/animate.css";
import "../../public/assets/css/all.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/swiper-bundle.css";
import "../../public/assets/css/style.css";
import '../styles/globals.css'; 

import Layout from "../components/layout/Layout";
import DisclaimerPopup from "../components/DisclaimerPopup";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => (
    <Layout>
      <DisclaimerPopup />
      {page}
    </Layout>
  ));
  
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
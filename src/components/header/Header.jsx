// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const router = useRouter();

//   // --- 1. STICKY HEADER LOGIC ---
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 50) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // --- 2. ERROR FIX (Important) ---
//   // onClick की जगह router events का use किया है।
//   // इससे 'Abort fetching' एरर खत्म हो जाएगी।
//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//     };

//     router.events.on('routeChangeStart', handleRouteChange);
    
//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router]);


//   const toggleMobileDropdown = (e) => {
//     e.preventDefault();
//     setMobileDropdownOpen(!mobileDropdownOpen);
//   };

//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

//   return (
//     <>
//       <style jsx>{`
//         .nav-link {
//             font-size: 15px;
//             font-weight: 600;
//             color: #ffffff !important;
//             padding: 10px 15px !important;
//             transition: color 0.3s ease;
//         }
//         .nav-link:hover, .active-link {
//             color: #de9f57 !important;
//         }
//         .dropdown-menu {
//             background-color: #000;
//             border: 1px solid rgba(255,255,255,0.1);
//             border-top: 3px solid #de9f57;
//             padding: 0;
//         }
//         .dropdown-item {
//             color: #ffffff;
//             padding: 12px 20px;
//             font-size: 16px;
//             border-bottom: 1px solid rgba(255,255,255,0.05);
//         }
//         .dropdown-item:hover {
//             background-color: #222;
//             color: #de9f57;
//         }
//         .btn-custom {
//             background-color: rgba(222, 159, 87, 0.5);
//             color: #ffffff;
//             font-weight: 600;
//             min-width: 140px;
//             border-radius: 5px;
//             padding: 10px 20px;
//             text-align: center;
//         }
//         .btn-custom:hover {
//             background-color: #de9f57;
//             color: #ffffff;
//         }
        
//         @media (max-width: 1199px) {
//             .navbar-collapse {
//                 max-height: 80vh;
//                 overflow-y: auto;
//                 background-color: #000;
//                 padding-bottom: 20px;
//                 border-top: 1px solid #222;
//             }
//             .nav-link {
//                 padding: 12px 15px !important;
//                 border-bottom: 1px solid rgba(255,255,255,0.05);
//             }
//             .dropdown-menu {
//                 border: none;
//                 background-color: #111;
//                 margin-left: 15px;
//             }
//             .dropdown-menu.show {
//                 display: block;
//             }
//             .btn-custom {
//                 width: 100%;
//                 margin-top: 15px;
//                 display: block;
//             }
//         }

//         @media (min-width: 1200px) {
//             .nav-item.dropdown:hover .dropdown-menu {
//                 display: block;
//                 margin-top: 0;
//             }
//         }
//       `}</style>

//       <header className={`fixed-top w-100 bg-black ${isSticky ? 'shadow py-2' : 'py-3'}`} style={{ transition: 'all 0.3s ease' }}>
//         <nav className="navbar navbar-expand-xl navbar-dark">
//           <div className="container-fluid px-3 px-lg-5">
            
//             <Link href="/">
//               <a className="navbar-brand p-0">
//                 <img
//   src="/assets/images/brand-logo.png" 
//   alt="Logo"
//   width="70"
//   height="50"
//   style={{ objectFit: 'contain' }}
// />
//               </a>
//             </Link>

//             <button
//               className="navbar-toggler"
//               type="button"
//               onClick={() => setIsOpen(!isOpen)}
//               style={{ border: 'none' }}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
//               <ul className="navbar-nav ms-auto align-items-xl-center">
                
//                 <li className="nav-item">
//                   <Link href="/">
//                     <a className={`nav-link ${isActive('/')}`}>Home</a>
//                   </Link>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={toggleMobileDropdown}
//                     role="button" 
//                   >
//                     About Us
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item">Our Firm</a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item">Awards & Accolades</a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item">Promoters</a></Link></li>
//                   </ul>
//                 </li>

                // <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
                // <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
                // <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
                // <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`}>Blog</a></Link></li>
                // <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
                // <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>
                // <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

                // <li className="nav-item ms-xl-3">
                //   <Link href="/login-signup">
                //     <a className="btn btn-custom">
                //       Login/Signup
                //     </a>
                //   </Link>
                // </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
      
//       <div style={{ height: '90px' }}></div>
//     </>
//   );
// }

// export default Header;


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 50) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//     };

//     router.events.on('routeChangeStart', handleRouteChange);
    
//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router]);

//   const toggleMobileDropdown = (e) => {
//     e.preventDefault();
//     setMobileDropdownOpen(!mobileDropdownOpen);
//   };

//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

//   return (
//     <>
//       <style jsx>{`
//         .nav-link {
//             font-size: 15px;
//             font-weight: 600;
//             color: #ffffff !important;
//             padding: 10px 15px !important;
//             transition: color 0.3s ease;
//             white-space: nowrap;
//         }
//         .nav-link:hover, .active-link {
//             color: #de9f57 !important;
//         }
//         .dropdown-menu {
//             background-color: #000;
//             border: 1px solid rgba(255,255,255,0.1);
//             border-top: 3px solid #de9f57;
//             padding: 0;
//         }
//         .dropdown-item {
//             color: #ffffff;
//             padding: 12px 20px;
//             font-size: 16px;
//             border-bottom: 1px solid rgba(255,255,255,0.05);
//         }
//         .dropdown-item:hover {
//             background-color: #222;
//             color: #de9f57;
//         }
//         .btn-custom {
//             background-color: rgba(222, 159, 87, 0.5);
//             color: #ffffff;
//             font-weight: 600;
//             min-width: 140px;
//             border-radius: 5px;
//             padding: 10px 20px;
//             text-align: center;
//             white-space: nowrap;
//         }
//         .btn-custom:hover {
//             background-color: #de9f57;
//             color: #ffffff;
//         }
        
//         @media (max-width: 1199px) {
//             .navbar-collapse {
//                 max-height: 80vh;
//                 overflow-y: auto;
//                 background-color: #000;
//                 padding-bottom: 20px;
//                 border-top: 1px solid #222;
//                 -webkit-overflow-scrolling: touch; 
//             }
//             .nav-link {
//                 padding: 12px 15px !important;
//                 border-bottom: 1px solid rgba(255,255,255,0.05);
//                 width: 100%;
//                 display: block;
//             }
//             .dropdown-menu {
//                 border: none;
//                 background-color: #111;
//                 margin-left: 15px;
//                 margin-right: 15px;
//             }
//             .dropdown-menu.show {
//                 display: block;
//             }
//             .btn-custom {
//                 width: 95%;
//                 margin: 15px auto 0 auto;
//                 display: block;
//             }
//         }

//         @media (min-width: 1200px) {
//             .nav-item.dropdown:hover .dropdown-menu {
//                 display: block;
//                 margin-top: 0;
//             }
//         }
//       `}</style>

//       <header className={`fixed-top w-100 bg-black ${isSticky ? 'shadow py-2' : 'py-3'}`} style={{ transition: 'all 0.3s ease', zIndex: 1050 }}>
//         <nav className="navbar navbar-expand-xl navbar-dark p-0">
//           <div className="container-fluid px-3 px-lg-5">
            
//             <Link href="/">
//               <a className="navbar-brand p-0 m-0 d-flex align-items-center">
//                 <img
//                   src="/assets/images/brand-logo.png" 
//                   alt="Logo"
//                   width="70"
//                   height="50"
//                   style={{ objectFit: 'contain' }}
//                 />
//               </a>
//             </Link>

//             <button
//               className="navbar-toggler shadow-none"
//               type="button"
//               onClick={() => setIsOpen(!isOpen)}
//               style={{ border: 'none', padding: '5px' }}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
//               <ul className="navbar-nav ms-auto align-items-xl-center w-100 justify-content-end">
                
//                 <li className="nav-item">
//                   <Link href="/">
//                     <a className={`nav-link ${isActive('/')}`}>Home</a>
//                   </Link>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={toggleMobileDropdown}
//                     role="button" 
//                   >
//                     About Us
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item">Our Firm</a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item">Awards & Accolades</a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item">Promoters</a></Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
//                 <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`}>Blog</a></Link></li>
//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
//                 <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>
//                 <li className="nav-item"><Link href="/location"><a className={`nav-link ${isActive('/location')}`}>Location</a></Link></li>
//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

//                 <li className="nav-item ms-xl-3">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom">
//                       Login/Signup
//                     </a>
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
      
//       <div style={{ height: '60px' }}></div>
//     </>
//   );
// }

// export default Header;


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//     };
//     router.events.on('routeChangeStart', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router]);

//   const toggleMobileDropdown = (e) => {
//     e.preventDefault();
//     setMobileDropdownOpen(!mobileDropdownOpen);
//   };

//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

//   return (
//     <>
//       <header className={`fixed-top w-100 header-main ${isSticky ? 'header-sticky' : 'header-normal'}`}>
//         <nav className="navbar navbar-expand-xl navbar-dark p-2">
//           <div className="container-fluid px-3 px-lg-5">
            
//             <Link href="/">
//               <a className="navbar-brand p-0 m-0 d-flex align-items-center">
//                 <img
//                   src="/assets/images/brand-logo.png" 
//                   alt="Logo"
//                   width="50"
//                   height="40"
//                   className="brand-logo"
//                 />
//               </a>
//             </Link>

//             <button
//               className="navbar-toggler shadow-none"
//               type="button"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
//               <ul className="navbar-nav ms-auto align-items-xl-center w-100 justify-content-end">
                
//                 <li className="nav-item">
//                   <Link href="/">
//                     <a className={`nav-link ${isActive('/')}`}>Home</a>
//                   </Link>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={toggleMobileDropdown}
//                     role="button" 
//                   >
//                     About Us
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item">Our Firm</a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item">Awards & Accolades</a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item">Promoters</a></Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
//                 <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`}>Blog</a></Link></li>
//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
//                 <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>
//                 <li className="nav-item"><Link href="/location"><a className={`nav-link ${isActive('/location')}`}>Location</a></Link></li>
//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

//                 <li className="nav-item ms-xl-3">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom">
//                       Login/Signup
//                     </a>
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
      
//       <div className="header-spacer"></div>
//     </>
//   );
// }

// export default Header;


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { useLanguage } from '../../context/LanguageContext'
// import TranslatedText from '../TranslatedText';

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
  
//   // Dropdown States
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
//   const router = useRouter();
//   const { setLanguage, language } = useLanguage(); 

//   const isLongLang = ['ta', 'te', 'ml', 'hi', 'mr', 'ur'].includes(language);

//   // --- Logic Functions ---

//   const handleLanguageChange = (langCode) => {
//     setLanguage(langCode);
//     setLanguageDropdownOpen(false);
//     setIsOpen(false);
//   };

//   // Desktop Hover Logic (Sirf badi screen pr hover kaam karega)
//   const handleMouseEnter = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(true);
//       if (type === 'lang') setLanguageDropdownOpen(true);
//     }
//   };

//   // Desktop Leave Logic (Mobile pr ye auto-close nahi karega)
//   const handleMouseLeave = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(false);
//       if (type === 'lang') setLanguageDropdownOpen(false);
//     }
//   };

//   // Mobile Click Logic (Touch Toggle)
//   const toggleDropdownMobile = (e, type) => {
//     e.preventDefault();
//     if (type === 'about') setMobileDropdownOpen(!mobileDropdownOpen);
//     if (type === 'lang') setLanguageDropdownOpen(!languageDropdownOpen);
//   };

//   // Scroll & Route Logic
//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY >= 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//       setLanguageDropdownOpen(false);
//     };
//     router.events.on('routeChangeStart', handleRouteChange);
//     return () => router.events.off('routeChangeStart', handleRouteChange);
//   }, [router]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown')) {
//         setMobileDropdownOpen(false);
//         setLanguageDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

//   return (
//     <>
//       <style jsx global>{`
//         /* Logo Fix */
//         .navbar-brand { flex-shrink: 0 !important; min-width: 140px; margin-right: 10px; }
//         .login-btn-item { flex-shrink: 0 !important; margin-left: 10px !important; }

//         /* Mobile Dropdown Fix: Mobile pr menu hawa me na uday, balki list me khule */
//         @media (max-width: 1199px) {
//             .dropdown-menu.show {
//                 position: static !important;
//                 float: none !important;
//                 width: 100% !important;
//                 background: transparent !important;
//                 border: none !important;
//                 padding-left: 20px !important;
//                 display: block !important; /* Force Show */
//             }
//             .dropdown-item {
//                 color: rgba(255,255,255,0.8) !important;
//             }
//             .dropdown-item:hover {
//                 background: transparent !important;
//                 color: #fff !important;
//             }
//         }

//         /* Long Language Mode */
//         .long-lang-mode .nav-link { font-size: 12.5px !important; padding-left: 6px !important; padding-right: 6px !important; white-space: nowrap; }
//         .long-lang-mode .dropdown-item { font-size: 13px !important; }
//         .navbar-nav { align-items: center; }
        
//         @media (max-width: 1199px) {
//            .navbar-nav { align-items: flex-start !important; }
//            .login-btn-item { margin-left: 0 !important; margin-top: 10px; }
//         }
//       `}</style>

//       <header className={`fixed-top w-100 header-main ${isSticky ? 'header-sticky' : 'header-normal'}`}>
//         <nav className={`navbar navbar-expand-xl navbar-dark p-2 ${isLongLang ? 'long-lang-mode' : ''}`}>
//           <div className="container-fluid px-3 px-lg-4">
            
//             <Link href="/">
//               <a className="navbar-brand p-0 m-0 d-flex align-items-center">
//                 <img src="/assets/images/brand-logo.png" alt="Logo" width="50" height="40" className="brand-logo" style={{ objectFit: 'contain' }} />
//               </a>
//             </Link>

//             <button className="navbar-toggler shadow-none" type="button" onClick={() => setIsOpen(!isOpen)}>
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
//               <ul className="navbar-nav ms-auto align-items-xl-center w-100 justify-content-end">
                
//                 <li className="nav-item">
//                   <Link href="/"><a className={`nav-link ${isActive('/')}`}><TranslatedText text="Home" /></a></Link>
//                 </li>

//                 {/* --- ABOUT US DROPDOWN --- */}
//                 <li 
//                   className="nav-item dropdown"
//                   onMouseEnter={() => handleMouseEnter('about')} // Desktop Hover
//                   onMouseLeave={() => handleMouseLeave('about')} // Desktop Leave
//                 >
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'about')} // Mobile Touch
//                     role="button" 
//                     aria-expanded={mobileDropdownOpen}
//                   >
//                     <TranslatedText text="About" />
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item"><TranslatedText text="Our Firm" /></a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item"><TranslatedText text="Awards & Accolades" /></a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item"><TranslatedText text="Promoters" /></a></Link></li>
//                   </ul>
//                 </li>

//                 {/* Other Links */}
                
//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
//                 <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`}>Blog</a></Link></li>
//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

//                 {/* --- LANGUAGE DROPDOWN --- */}
//                 <li 
//                   className="nav-item dropdown ms-xl-1"
//                   onMouseEnter={() => handleMouseEnter('lang')}
//                   onMouseLeave={() => handleMouseLeave('lang')}
//                 >
//                   <a 
//                     className="nav-link dropdown-toggle" 
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'lang')}
//                     role="button"
//                     style={{ minWidth: '50px', textAlign: 'center' }}
//                   >
//                     <i className="fas fa-globe me-1"></i> {language.toUpperCase()}
//                   </a>
                //   <ul className={`dropdown-menu ${languageDropdownOpen ? 'show' : ''}`} style={{ right: 0, left: 'auto' }}>
                //     <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button></li>
                //     <li><button className="dropdown-item" onClick={() => handleLanguageChange('hi')}>Hindi (हिंदी)</button></li>
                //     <li><button className="dropdown-item" onClick={() => handleLanguageChange('te')}>Telugu (తెలుగు)</button></li>
                //     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ta')}>Tamil (தமிழ்)</button></li>
                //     <li><button className="dropdown-item" onClick={() => handleLanguageChange('mr')}>Marathi (मराठी)</button></li>
                //     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ml')}>Malayalam (മലയാളം)</button></li>
                //     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ur')}>Urdu (اردو)</button></li>
                //   </ul>
                // </li>

//                 {/* LOGIN BUTTON */}
//                 <li className="nav-item login-btn-item">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom btn-sm px-3">
//                       <i className="fas fa-user me-1"></i>
//                       <TranslatedText text="Login" />
//                     </a>
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
      
//       <div className="header-spacer"></div>
//     </>
//   );
// }

// export default Header;


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { useLanguage } from '../../context/LanguageContext'
// import TranslatedText from '../TranslatedText';

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
  
//   // Dropdown States
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
//   const router = useRouter();
//   const { setLanguage, language } = useLanguage(); 

//   const isLongLang = ['ta', 'te', 'ml', 'hi', 'mr', 'ur'].includes(language);

//   // --- Logic Functions ---

//   const handleLanguageChange = (langCode) => {
//     setLanguage(langCode);
//     setLanguageDropdownOpen(false);
//     setIsOpen(false);
//   };

//   const handleMouseEnter = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(true);
//       if (type === 'lang') setLanguageDropdownOpen(true);
//     }
//   };

//   const handleMouseLeave = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(false);
//       if (type === 'lang') setLanguageDropdownOpen(false);
//     }
//   };

//   const toggleDropdownMobile = (e, type) => {
//     e.preventDefault();
//     if (type === 'about') setMobileDropdownOpen(!mobileDropdownOpen);
//     if (type === 'lang') setLanguageDropdownOpen(!languageDropdownOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY >= 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//       setLanguageDropdownOpen(false);
//     };
//     router.events.on('routeChangeStart', handleRouteChange);
//     return () => router.events.off('routeChangeStart', handleRouteChange);
//   }, [router]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown')) {
//         setMobileDropdownOpen(false);
//         setLanguageDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

//   return (
//     <>
//       <style jsx global>{`
//         /* Logo Fix */
//         .navbar-brand { flex-shrink: 0 !important; min-width: 140px; margin-right: 20px; }
//         .login-btn-item { flex-shrink: 0 !important; margin-left: 15px !important; }

//         /* Mobile Dropdown Fix */
//         @media (max-width: 1199px) {
//             .dropdown-menu.show {
//                 position: static !important;
//                 float: none !important;
//                 width: 100% !important;
//                 background: transparent !important;
//                 border: none !important;
//                 padding-left: 20px !important;
//                 display: block !important;
//             }
//             .dropdown-item {
//                 color: rgba(255,255,255,0.8) !important;
//             }
//             .dropdown-item:hover {
//                 background: transparent !important;
//                 color: #fff !important;
//             }
//         }

//         .long-lang-mode .nav-link { font-size: 12.5px !important; padding-left: 8px !important; padding-right: 8px !important; white-space: nowrap; }
//         .long-lang-mode .dropdown-item { font-size: 13px !important; }
//         .navbar-nav { align-items: center; }
        
//         @media (max-width: 1199px) {
//            .navbar-nav { align-items: flex-start !important; }
//            .login-btn-item { margin-left: 0 !important; margin-top: 10px; }
//         }
//       `}</style>

//       <header className={`fixed-top w-100 header-main ${isSticky ? 'header-sticky' : 'header-normal'}`}>
//         <nav className={`navbar navbar-expand-xl navbar-dark p-2 ${isLongLang ? 'long-lang-mode' : ''}`}>
//           <div className="container-fluid px-3 px-lg-4">
            
//             <Link href="/">
//               <a className="navbar-brand p-0 m-0 d-flex align-items-center">
//                 <img src="/assets/images/brand-logo.png" alt="Logo" width="50" height="40" className="brand-logo" style={{ objectFit: 'contain' }} />
//               </a>
//             </Link>

//             <button className="navbar-toggler shadow-none" type="button" onClick={() => setIsOpen(!isOpen)}>
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
              
//               <ul className="navbar-nav ms-auto align-items-xl-center">
                
//                 <li className="nav-item">
//                   <Link href="/"><a className={`nav-link ${isActive('/')}`}><TranslatedText text="Home" /></a></Link>
//                 </li>

//                 {/* --- ABOUT US DROPDOWN --- */}
//                 <li 
//                   className="nav-item dropdown"
//                   onMouseEnter={() => handleMouseEnter('about')} 
//                   onMouseLeave={() => handleMouseLeave('about')} 
//                 >
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'about')} 
//                     role="button" 
//                     aria-expanded={mobileDropdownOpen}
//                   >
//                     <TranslatedText text="About" />
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item"><TranslatedText text="Our Firm" /></a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item"><TranslatedText text="Awards & Accolades" /></a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item"><TranslatedText text="Promoters" /></a></Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
//                 {/* <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`}>Blog</a></Link></li> */}
//                                <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>

//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
//                  <li className="nav-item"><Link href="/location"><a className={`nav-link ${isActive('/events')}`}>Locations</a></Link></li>

//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

//                 {/* --- LANGUAGE DROPDOWN --- */}
//                 <li 
//                   className="nav-item dropdown ms-xl-1"
//                   onMouseEnter={() => handleMouseEnter('lang')}
//                   onMouseLeave={() => handleMouseLeave('lang')}
//                 >
//                   <a 
//                     className="nav-link dropdown-toggle" 
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'lang')}
//                     role="button"
//                     style={{ minWidth: '50px', textAlign: 'center' }}
//                   >
//                     <i className="fas fa-globe me-1"></i> {language.toUpperCase()}
//                   </a>
//                 <ul className={`dropdown-menu ${languageDropdownOpen ? 'show' : ''}`} style={{ right: 0, left: 'auto' }}>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('hi')}>Hindi (हिंदी)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('te')}>Telugu (తెలుగు)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ta')}>Tamil (தமிழ்)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('mr')}>Marathi (मराठी)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ml')}>Malayalam (മലയാളം)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ur')}>Urdu (اردو)</button></li>
//                   </ul>
//                 </li>
//                 {/* LOGIN BUTTON */}
//                <li className="nav-item ms-xl-3">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom">
//                       Login/Signup
//                     </a>
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
      
//       <div className="header-spacer"></div>
//     </>
//   );
// }

// export default Header;


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
  
//   // Dropdown States
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
//   // Current Selected Language Label (for display)
//   const [currentLangLabel, setCurrentLangLabel] = useState('English');

//   const router = useRouter();

//   // --- GOOGLE TRANSLATE SETUP ---
//   useEffect(() => {
//     // 1. Google Translate Script Add Karna
//     const addScript = document.createElement("script");
//     addScript.setAttribute(
//       "src",
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//     );
//     document.body.appendChild(addScript);

//     // 2. Google Translate Initialize Karna
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           // Yahan wo languages hain jo aapne maangi thi
//           includedLanguages: "en,hi,te,ta,pa,gu,ur", 
//           autoDisplay: false,
//         },
//         "google_translate_element"
//       );
//     };

//     // 3. Current Language Cookie se Check karna (Taaki refresh hone par language same rahe)
//     const cookies = document.cookie.split(';');
//     const transCookie = cookies.find(c => c.trim().startsWith('googtrans='));
//     if(transCookie) {
//         const langCode = transCookie.split('/').pop();
//         const langMap = {
//             'en': 'English',
//             'hi': 'Hindi',
//             'te': 'Telugu',
//             'ta': 'Tamil',
//             'pa': 'Punjabi',
//             'gu': 'Gujarati',
//             'ur': 'Urdu'
//         };
//         if(langMap[langCode]) setCurrentLangLabel(langMap[langCode]);
//     }
//   }, []);

//   // --- LANGUAGE CHANGE LOGIC ---
//   const handleLanguageChange = (langCode, label) => {
//     // Cookie set karein: /auto/targetLang (e.g., /en/hi)
//     document.cookie = `googtrans=/en/${langCode}; path=/;`;
//     setCurrentLangLabel(label);
//     setLanguageDropdownOpen(false);
//     setIsOpen(false);
//     // Page reload karein taaki Google Translate naya cookie utha le
//     window.location.reload();
//   };

//   // --- HEADER EVENTS ---
//   const handleMouseEnter = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(true);
//       if (type === 'lang') setLanguageDropdownOpen(true);
//     }
//   };

//   const handleMouseLeave = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(false);
//       if (type === 'lang') setLanguageDropdownOpen(false);
//     }
//   };

//   const toggleDropdownMobile = (e, type) => {
//     e.preventDefault();
//     if (type === 'about') setMobileDropdownOpen(!mobileDropdownOpen);
//     if (type === 'lang') setLanguageDropdownOpen(!languageDropdownOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY >= 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//       setLanguageDropdownOpen(false);
//     };
//     router.events.on('routeChangeStart', handleRouteChange);
//     return () => router.events.off('routeChangeStart', handleRouteChange);
//   }, [router]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown')) {
//         setMobileDropdownOpen(false);
//         setLanguageDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

//   return (
//     <>
//       {/* --- HIDDEN GOOGLE ELEMENT --- */}
//       <div id="google_translate_element" style={{ display: 'none' }}></div>

//       <style jsx global>{`
//         /* --- GOOGLE TRANSLATE HIDING CSS --- */
        
//         /* 1. Hide Top Banner Frame */
//         .goog-te-banner-frame.skiptranslate {
//             display: none !important;
//         }
//         body {
//             top: 0px !important;
//         }
        
//         /* 2. Hide Google Tooltip/Hover Popup */
//         #goog-gt-tt, .goog-tooltip, .goog-tooltip:hover {
//             display: none !important;
//             visibility: hidden !important;
//         }
        
//         /* 3. Hide 'Powered by Google' Branding */
//         .goog-te-gadget {
//             display: none !important;
//         }
        
//         /* 4. Remove Blue Highlight on Text */
//         .goog-text-highlight {
//             background: none !important;
//             box-shadow: none !important;
//         }

//         /* --- LOGO & NAVBAR CSS --- */
//         .navbar-brand { flex-shrink: 0 !important; min-width: 140px; margin-right: 20px; }
//         .login-btn-item { flex-shrink: 0 !important; margin-left: 15px !important; }

//         @media (max-width: 1199px) {
//             .dropdown-menu.show {
//                 position: static !important;
//                 float: none !important;
//                 width: 100% !important;
//                 background: transparent !important;
//                 border: none !important;
//                 padding-left: 20px !important;
//                 display: block !important;
//             }
//             .dropdown-item {
//                 color: rgba(255,255,255,0.8) !important;
//             }
//             .dropdown-item:hover {
//                 background: transparent !important;
//                 color: #fff !important;
//             }
//             .navbar-nav { align-items: flex-start !important; }
//             .login-btn-item { margin-left: 0 !important; margin-top: 10px; }
//         }
        
//         .navbar-nav { align-items: center; }
//       `}</style>

//       <header className={`fixed-top w-100 header-main ${isSticky ? 'header-sticky' : 'header-normal'}`}>
//         <nav className="navbar navbar-expand-xl navbar-dark p-2">
//           <div className="container-fluid px-3 px-lg-4">
            
//             <Link href="/">
//               <a className="navbar-brand p-0 m-0 d-flex align-items-center">
//                 <img src="/assets/images/brand-logo.png" alt="Logo" width="50" height="40" className="brand-logo" style={{ objectFit: 'contain' }} />
//               </a>
//             </Link>

//             <button className="navbar-toggler shadow-none" type="button" onClick={() => setIsOpen(!isOpen)}>
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
              
//               <ul className="navbar-nav ms-auto align-items-xl-center">
                
//                 <li className="nav-item">
//                   <Link href="/"><a className={`nav-link ${isActive('/')}`}>Home</a></Link>
//                 </li>

//                 {/* --- ABOUT US DROPDOWN --- */}
//                 <li 
//                   className="nav-item dropdown"
//                   onMouseEnter={() => handleMouseEnter('about')} 
//                   onMouseLeave={() => handleMouseLeave('about')} 
//                 >
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'about')} 
//                     role="button" 
//                     aria-expanded={mobileDropdownOpen}
//                   >
//                     About
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item">Our Firm</a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item">Awards & Accolades</a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item">Promoters</a></Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
//                 <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>
//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
//                 <li className="nav-item"><Link href="/locations"><a className={`nav-link ${isActive('/locations')}`}>Locations</a></Link></li>
//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

//                 {/* --- GOOGLE LANGUAGE DROPDOWN (CUSTOM UI) --- */}
//                 <li 
//                   className="nav-item dropdown ms-xl-1"
//                   onMouseEnter={() => handleMouseEnter('lang')}
//                   onMouseLeave={() => handleMouseLeave('lang')}
//                 >
//                   <a 
//                     className="nav-link dropdown-toggle" 
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'lang')}
//                     role="button"
//                     style={{ minWidth: '90px', textAlign: 'center' }}
//                   >
//                     <i className="fas fa-globe me-1"></i> {currentLangLabel}
//                   </a>
//                   <ul className={`dropdown-menu ${languageDropdownOpen ? 'show' : ''}`} style={{ right: 0, left: 'auto' }}>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('en', 'English')}>English</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('hi', 'Hindi')}>Hindi (हिंदी)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('pa', 'Punjabi')}>Punjabi (ਪੰਜਾਬੀ)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('gu', 'Gujarati')}>Gujarati (ગુજરાતી)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('te', 'Telugu')}>Telugu (తెలుగు)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ta', 'Tamil')}>Tamil (தமிழ்)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ur', 'Urdu')}>Urdu (اردو)</button></li>
//                   </ul>
//                 </li>
                
//                 {/* LOGIN BUTTON */}
//                <li className="nav-item ms-xl-3">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom">
//                       Login/Signup
//                     </a>
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
      
//       <div className="header-spacer"></div>
//     </>
//   );
// }

// export default Header;


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';


// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
  
//   // Dropdown States
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
//   const router = useRouter();


//   // --- Logic Functions ---

//   const handleLanguageChange = (langCode) => {
//     setLanguage(langCode);
//     setLanguageDropdownOpen(false);
//     setIsOpen(false);
//   };

//   const handleMouseEnter = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(true);
//       if (type === 'lang') setLanguageDropdownOpen(true);
//     }
//   };

//   const handleMouseLeave = (type) => {
//     if (window.innerWidth > 1199) {
//       if (type === 'about') setMobileDropdownOpen(false);
//       if (type === 'lang') setLanguageDropdownOpen(false);
//     }
//   };

//   const toggleDropdownMobile = (e, type) => {
//     e.preventDefault();
//     if (type === 'about') setMobileDropdownOpen(!mobileDropdownOpen);
//     if (type === 'lang') setLanguageDropdownOpen(!languageDropdownOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY >= 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//       setLanguageDropdownOpen(false);
//     };
//     router.events.on('routeChangeStart', handleRouteChange);
//     return () => router.events.off('routeChangeStart', handleRouteChange);
//   }, [router]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown')) {
//         setMobileDropdownOpen(false);
//         setLanguageDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const isActive = (path) => router.pathname === path ? 'active-link' : '';
//   const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

//   return (
//     <>
//       <style jsx global>{`
//         /* =========================================
//            GOOGLE TRANSLATE HIDING CSS (Jugaad)
//            ========================================= */
        
//         /* 1. Top Banner ko hide karein */
//         .goog-te-banner-frame.skiptranslate {
//             display: none !important;
//         }

//         /* 2. Body ko wapas upar shift karein (Google body ko niche dhakel deta hai) */
//         body {
//             top: 0px !important;
//         }

//         /* 3. Original Google Widget/Dropdown ko chupana */
//         #google_translate_element {
//             display: none !important;
//         }

//         /* 4. Mouse hover karne pr jo Tooltip aata hai use chupana */
//         .goog-tooltip {
//             display: none !important;
//         }
//         .goog-tooltip:hover {
//             display: none !important;
//         }
//         .goog-text-highlight {
//             background-color: transparent !important;
//             border: none !important; 
//             box-shadow: none !important;
//         }

//         /* 5. Google Logo aur Footer branding chupana */
//         .goog-logo-link {
//             display: none !important;
//         }
//         .goog-te-gadget {
//             color: transparent !important;
//         }

//         /* =========================================
//            EXISTING STYLES
//            ========================================= */

//         /* Logo Fix */
//         .navbar-brand { flex-shrink: 0 !important; min-width: 140px; margin-right: 20px; }
//         .login-btn-item { flex-shrink: 0 !important; margin-left: 15px !important; }

//         /* Mobile Dropdown Fix */
//         @media (max-width: 1199px) {
//             .dropdown-menu.show {
//                 position: static !important;
//                 float: none !important;
//                 width: 100% !important;
//                 background: transparent !important;
//                 border: none !important;
//                 padding-left: 20px !important;
//                 display: block !important;
//             }
//             .dropdown-item {
//                 color: rgba(255,255,255,0.8) !important;
//             }
//             .dropdown-item:hover {
//                 background: transparent !important;
//                 color: #fff !important;
//             }
//         }

//         .long-lang-mode .nav-link { font-size: 12.5px !important; padding-left: 8px !important; padding-right: 8px !important; white-space: nowrap; }
//         .long-lang-mode .dropdown-item { font-size: 13px !important; }
//         .navbar-nav { align-items: center; }
        
//         @media (max-width: 1199px) {
//            .navbar-nav { align-items: flex-start !important; }
//            .login-btn-item { margin-left: 0 !important; margin-top: 10px; }
//         }
//       `}</style>

//       <header className={`fixed-top w-100 header-main ${isSticky ? 'header-sticky' : 'header-normal'}`}>
//         <nav className={`navbar navbar-expand-xl navbar-dark p-2 ${isLongLang ? 'long-lang-mode' : ''}`}>
//           <div className="container-fluid px-3 px-lg-4">
            
//             <Link href="/">
//               <a className="navbar-brand p-0 m-0 d-flex align-items-center">
//                 <img src="/assets/images/brand-logo.png" alt="Logo" width="50" height="40" className="brand-logo" style={{ objectFit: 'contain' }} />
//               </a>
//             </Link>

//             <button className="navbar-toggler shadow-none" type="button" onClick={() => setIsOpen(!isOpen)}>
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
              
//               <ul className="navbar-nav ms-auto align-items-xl-center">
                
//                 <li className="nav-item">
//                   <Link href="/"><a className={`nav-link ${isActive('/')}`}><TranslatedText text="Home" /></a></Link>
//                 </li>

//                 {/* --- ABOUT US DROPDOWN --- */}
//                 <li 
//                   className="nav-item dropdown"
//                   onMouseEnter={() => handleMouseEnter('about')} 
//                   onMouseLeave={() => handleMouseLeave('about')} 
//                 >
//                   <a 
//                     className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'about')} 
//                     role="button" 
//                     aria-expanded={mobileDropdownOpen}
//                   >
//                     <TranslatedText text="About" />
//                   </a>
//                   <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
//                     <li><Link href="/our-firm"><a className="dropdown-item"><TranslatedText text="Our Firm" /></a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item"><TranslatedText text="Awards & Accolades" /></a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item"><TranslatedText text="Promoters" /></a></Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
//                 <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>

//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
//                  <li className="nav-item"><Link href="/location"><a className={`nav-link ${isActive('/location')}`}>Locations</a></Link></li>

//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

//                 {/* --- LANGUAGE DROPDOWN (Custom UI, controls Google internally) --- */}
//                 <li 
//                   className="nav-item dropdown ms-xl-1"
//                   onMouseEnter={() => handleMouseEnter('lang')}
//                   onMouseLeave={() => handleMouseLeave('lang')}
//                 >
//                   <a 
//                     className="nav-link dropdown-toggle" 
//                     href="#" 
//                     onClick={(e) => toggleDropdownMobile(e, 'lang')}
//                     role="button"
//                     style={{ minWidth: '50px', textAlign: 'center' }}
//                   >
//                     <i className="fas fa-globe me-1"></i> {language.toUpperCase()}
//                   </a>
//                 <ul className={`dropdown-menu ${languageDropdownOpen ? 'show' : ''}`} style={{ right: 0, left: 'auto' }}>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('hi')}>Hindi (हिंदी)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('te')}>Telugu (తెలుగు)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ta')}>Tamil (தமிழ்)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('mr')}>Marathi (मराठी)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ml')}>Malayalam (മലയാളം)</button></li>
//                     <li><button className="dropdown-item" onClick={() => handleLanguageChange('ur')}>Urdu (اردو)</button></li>
//                   </ul>
//                 </li>
//                 {/* LOGIN BUTTON */}
//                <li className="nav-item ms-xl-3">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom">
//                       Login/Signup
//                     </a>
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
      
//       <div className="header-spacer"></div>
//     </>
//   );
// }

// export default Header;

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Dropdown States
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
  const router = useRouter();

  // --- Logic Functions ---

  const handleMouseEnter = (type) => {
    if (window.innerWidth > 1199) {
      if (type === 'about') setMobileDropdownOpen(true);
      if (type === 'lang') setLanguageDropdownOpen(true);
    }
  };

  const handleMouseLeave = (type) => {
    if (window.innerWidth > 1199) {
      if (type === 'about') setMobileDropdownOpen(false);
      if (type === 'lang') setLanguageDropdownOpen(false);
    }
  };

  const toggleDropdownMobile = (e, type) => {
    e.preventDefault();
    if (type === 'about') setMobileDropdownOpen(!mobileDropdownOpen);
    if (type === 'lang') setLanguageDropdownOpen(!languageDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setMobileDropdownOpen(false);
      setLanguageDropdownOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setMobileDropdownOpen(false);
        setLanguageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => router.pathname === path ? 'active-link' : '';
  const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

  return (
    <>
      <style jsx global>{`
        /* =========================================
           EXISTING STYLES
           ========================================= */

        /* Logo Fix */
        .navbar-brand { flex-shrink: 0 !important; min-width: 140px; margin-right: 20px; }
        .login-btn-item { flex-shrink: 0 !important; margin-left: 15px !important; }

        /* Mobile Dropdown Fix */
        @media (max-width: 1199px) {
            .dropdown-menu.show {
                position: static !important;
                float: none !important;
                width: 100% !important;
                background: transparent !important;
                border: none !important;
                padding-left: 20px !important;
                display: block !important;
            }
            .dropdown-item {
                color: rgba(255,255,255,0.8) !important;
            }
            .dropdown-item:hover {
                background: transparent !important;
                color: #fff !important;
            }
        }

        .navbar-nav { align-items: center; }
        
        @media (max-width: 1199px) {
           .navbar-nav { align-items: flex-start !important; }
           .login-btn-item { margin-left: 0 !important; margin-top: 10px; }
        }
      `}</style>

      <header className={`fixed-top w-100 header-main ${isSticky ? 'header-sticky' : 'header-normal'}`}>
        <nav className="navbar navbar-expand-xl navbar-dark p-2">
          <div className="container-fluid px-3 px-lg-4">
            
            <Link href="/">
              <a className="navbar-brand p-0 m-0 d-flex align-items-center">
                <img src="/assets/images/brand-logo.png" alt="Logo" width="50" height="40" className="brand-logo" style={{ objectFit: 'contain' }} />
              </a>
            </Link>

            <button className="navbar-toggler shadow-none" type="button" onClick={() => setIsOpen(!isOpen)}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
              
              <ul className="navbar-nav ms-auto align-items-xl-center">
                
                <li className="nav-item">
                  <Link href="/"><a className={`nav-link ${isActive('/')}`}>Home</a></Link>
                </li>

                {/* --- ABOUT US DROPDOWN --- */}
                <li 
                  className="nav-item dropdown"
                  onMouseEnter={() => handleMouseEnter('about')} 
                  onMouseLeave={() => handleMouseLeave('about')} 
                >
                  <a 
                    className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
                    href="#" 
                    onClick={(e) => toggleDropdownMobile(e, 'about')} 
                    role="button" 
                    aria-expanded={mobileDropdownOpen}
                  >
                    About
                  </a>
                  <ul className={`dropdown-menu ${mobileDropdownOpen ? 'show' : ''}`}>
                    <li><Link href="/our-firm"><a className="dropdown-item">Our Firm</a></Link></li>
                    <li><Link href="/awards-ccolades"><a className="dropdown-item">Awards & Accolades</a></Link></li>
                    <li><Link href="/promoters"><a className="dropdown-item">Promoters</a></Link></li>
                  </ul>
                </li>

                <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`}>Professionals</a></Link></li>
                <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`}>Capabilities</a></Link></li>
                <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`}>News</a></Link></li>
                <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>

                <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
                <li className="nav-item"><Link href="/location"><a className={`nav-link ${isActive('/location')}`}>Locations</a></Link></li>

                <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

                {/* --- LANGUAGE DROPDOWN (Static UI) --- */}
                <li 
                  className="nav-item dropdown ms-xl-1"
                  onMouseEnter={() => handleMouseEnter('lang')}
                  onMouseLeave={() => handleMouseLeave('lang')}
                >
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    onClick={(e) => toggleDropdownMobile(e, 'lang')}
                    role="button"
                    style={{ minWidth: '50px', textAlign: 'center' }}
                  >
                    <i className="fas fa-globe me-1"></i> EN
                  </a>
                   <ul className={`dropdown-menu ${languageDropdownOpen ? 'show' : ''}`} style={{ right: 0, left: 'auto' }}>
    <li><button className="dropdown-item" >English</button></li>
    <li><button className="dropdown-item" >Hindi (हिंदी)</button></li>
    <li><button className="dropdown-item">Telugu (తెలుగు)</button></li>
    <li><button className="dropdown-item">Tamil (தமிழ்)</button></li>
    <li><button className="dropdown-item">Marathi (मराठी)</button></li>
    <li><button className="dropdown-item" >Malayalam (മലയാളം)</button></li>
    <li><button className="dropdown-item" >Urdu (اردو)</button></li>
    <li><button className="dropdown-item" >Punjabi (ਪੰਜਾਬੀ)</button></li>
    <li><button className="dropdown-item" >Gujarati (ગુજરાતી)</button></li>
  </ul>
                </li>

                {/* LOGIN BUTTON */}
               <li className="nav-item ms-xl-3">
                  <Link href="/login-signup">
                    <a className="btn btn-custom">
                      Login/Signup
                    </a>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      <div className="header-spacer"></div>
    </>
  );
}

export default Header;
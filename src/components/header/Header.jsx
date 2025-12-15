

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

//    const handleClose = () => {
//     setTimeout(() => {
//       setIsOpen(false);
//       setMobileDropdownOpen(false);
//     }, 100); 
//   };


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
//               <a className="navbar-brand p-0" onClick={handleClose}>
//                 <img
//                   src="/assets/images/logo.png"
//                   alt="Logo"
//                   width="70"
//                   height="50"
//                   style={{ objectFit: 'contain' }}
//                 />
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
//                     <a className={`nav-link ${isActive('/')}`} onClick={handleClose}>Home</a>
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
//                     <li><Link href="/our-firm"><a className="dropdown-item" onClick={handleClose}>Our Firm</a></Link></li>
//                     <li><Link href="/awards-ccolades"><a className="dropdown-item" onClick={handleClose}>Awards & Accolades</a></Link></li>
//                     <li><Link href="/promoters"><a className="dropdown-item" onClick={handleClose}>Promoters</a></Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item"><Link href="/attorneys"><a className={`nav-link ${isActive('/attorneys')}`} onClick={handleClose}>Professionals</a></Link></li>
//                 <li className="nav-item"><Link href="/capability"><a className={`nav-link ${isActive('/capability')}`} onClick={handleClose}>Capabilities</a></Link></li>
//                 <li className="nav-item"><Link href="/news"><a className={`nav-link ${isActive('/news')}`} onClick={handleClose}>News</a></Link></li>
//                 <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`} onClick={handleClose}>Blog</a></Link></li>
//                 <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`} onClick={handleClose}>Events</a></Link></li>
//                 <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`} onClick={handleClose}>Careers</a></Link></li>
//                 <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`} onClick={handleClose}>Contact Us</a></Link></li>

//                 <li className="nav-item ms-xl-3">
//                   <Link href="/login-signup">
//                     <a className="btn btn-custom" onClick={handleClose}>
//                       Login/Signup
//                     </a>
//                   </Link>
//                 </li>

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

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const router = useRouter();

  // --- 1. STICKY HEADER LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 2. ERROR FIX (Important) ---
  // onClick की जगह router events का use किया है।
  // इससे 'Abort fetching' एरर खत्म हो जाएगी।
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setMobileDropdownOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);


  const toggleMobileDropdown = (e) => {
    e.preventDefault();
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const isActive = (path) => router.pathname === path ? 'active-link' : '';
  const isParentActive = (childPaths) => childPaths.includes(router.pathname) ? 'active-link' : '';

  return (
    <>
      <style jsx>{`
        .nav-link {
            font-size: 15px;
            font-weight: 600;
            color: #ffffff !important;
            padding: 10px 15px !important;
            transition: color 0.3s ease;
        }
        .nav-link:hover, .active-link {
            color: #de9f57 !important;
        }
        .dropdown-menu {
            background-color: #000;
            border: 1px solid rgba(255,255,255,0.1);
            border-top: 3px solid #de9f57;
            padding: 0;
        }
        .dropdown-item {
            color: #ffffff;
            padding: 12px 20px;
            font-size: 16px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .dropdown-item:hover {
            background-color: #222;
            color: #de9f57;
        }
        .btn-custom {
            background-color: rgba(222, 159, 87, 0.5);
            color: #ffffff;
            font-weight: 600;
            min-width: 140px;
            border-radius: 5px;
            padding: 10px 20px;
            text-align: center;
        }
        .btn-custom:hover {
            background-color: #de9f57;
            color: #ffffff;
        }
        
        @media (max-width: 1199px) {
            .navbar-collapse {
                max-height: 80vh;
                overflow-y: auto;
                background-color: #000;
                padding-bottom: 20px;
                border-top: 1px solid #222;
            }
            .nav-link {
                padding: 12px 15px !important;
                border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .dropdown-menu {
                border: none;
                background-color: #111;
                margin-left: 15px;
            }
            .dropdown-menu.show {
                display: block;
            }
            .btn-custom {
                width: 100%;
                margin-top: 15px;
                display: block;
            }
        }

        @media (min-width: 1200px) {
            .nav-item.dropdown:hover .dropdown-menu {
                display: block;
                margin-top: 0;
            }
        }
      `}</style>

      <header className={`fixed-top w-100 bg-black ${isSticky ? 'shadow py-2' : 'py-3'}`} style={{ transition: 'all 0.3s ease' }}>
        <nav className="navbar navbar-expand-xl navbar-dark">
          <div className="container-fluid px-3 px-lg-5">
            
            <Link href="/">
              <a className="navbar-brand p-0">
                <img
  src="/assets/images/brand-logo.png" 
  alt="Logo"
  width="70"
  height="50"
  style={{ objectFit: 'contain' }}
/>
              </a>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              style={{ border: 'none' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
              <ul className="navbar-nav ms-auto align-items-xl-center">
                
                <li className="nav-item">
                  <Link href="/">
                    <a className={`nav-link ${isActive('/')}`}>Home</a>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a 
                    className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
                    href="#" 
                    onClick={toggleMobileDropdown}
                    role="button" 
                  >
                    About Us
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
                <li className="nav-item"><Link href="/blog"><a className={`nav-link ${isActive('/blog')}`}>Blog</a></Link></li>
                <li className="nav-item"><Link href="/events"><a className={`nav-link ${isActive('/events')}`}>Events</a></Link></li>
                <li className="nav-item"><Link href="/careers"><a className={`nav-link ${isActive('/careers')}`}>Careers</a></Link></li>
                <li className="nav-item"><Link href="/contact"><a className={`nav-link ${isActive('/contact')}`}>Contact Us</a></Link></li>

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
      
      <div style={{ height: '90px' }}></div>
    </>
  );
}

export default Header;
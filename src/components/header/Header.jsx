
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import React, { useEffect, useState } from 'react'

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false); // Mobile menu state
//   const router = useRouter();

//   // --- SETTINGS ---
//   const buttonSettings = {
//     bgColor: '#de9f577e',
//     textColor: '#ffffff',
//     desktopWidth: '140px',
//     desktopHeight: '42px',
//   };

//   // Sticky Menu Logic
//   useEffect(() => {
//     const handleScroll = () => {
//         if (window.scrollY >= 100) {
//             setIsSticky(true);
//         } else {
//             setIsSticky(false);
//         }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleLinkClick = (e, path) => {
//     setIsOpen(false); 
//     if (router.pathname === path) {
//       e.preventDefault(); 
//     }
//   };

//   const isActive = (path) => {
//     return router.pathname === path ? 'active' : '';
//   };

//   const isParentActive = (childPaths) => {
//     return childPaths.some(path => router.pathname === path) ? 'active' : '';
//   };

//   // --- STYLES ---
  
//   const headerStyle = {
//     transition: 'all 0.3s ease',
//     backgroundColor: '#000000', // Black Background
//     boxShadow: isSticky ? '0 2px 10px rgba(255,255,255,0.1)' : 'none',
//     padding: isSticky ? '10px 0' : '15px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     zIndex: 999
//   };

//   const navLinkStyle = {
//     color: '#ffffff', // White Text
//     fontWeight: '600',
//     fontSize: '15px',
//     padding: '10px 15px',
//     whiteSpace: 'nowrap',
//     transition: 'color 0.3s'
//   };

//   const activeLinkStyle = {
//     color: '#de9f57',
//   };

//   const btnStyle = {
//     backgroundColor: buttonSettings.bgColor,
//     color: buttonSettings.textColor,
//     width: buttonSettings.desktopWidth,
//     height: buttonSettings.desktopHeight,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '5px',
//     fontWeight: '600',
//     fontSize: '14px',
//     textDecoration: 'none',
//     cursor: 'pointer',
//     border: 'none',
//     marginTop: '0'
//   };

//   return (
//     <>
//       <style jsx>{`
//         /* Mobile Menu Background Fix */
//         @media (max-width: 1199px) {
//             .navbar-collapse {
//                 background-color: #000000;
//                 padding: 20px;
//                 border-top: 1px solid rgba(255,255,255,0.1);
//             }
//         }

//         /* --- HOVER EFFECT FOR DESKTOP ONLY --- */
//         /* XL Screen (1200px) se upar hover kaam karega */
//         @media (min-width: 1200px) {
//             .nav-item.dropdown:hover .dropdown-menu {
//                 display: block;
//                 margin-top: 0; /* Smooth alignment */
//             }
//         }

//         /* Dropdown Menu Style */
//         .dropdown-menu {
//             background-color: #000000;
//             border: 1px solid rgba(255,255,255,0.2);
//         }
//         .dropdown-item {
//             color: #ffffff;
//             transition: all 0.2s ease;
//         }
//         .dropdown-item:hover {
//             background-color: #333;
//             color: #de9f57;
//         }

//         /* Toggler Icon Customization */
//         .navbar-toggler-icon {
//             background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
//         }
//         /* Removing default focus outline */
//         .navbar-toggler:focus {
//             box-shadow: none;
//             outline: none;
//         }
//       `}</style>

//       <header style={headerStyle} className="header-area">
//         <nav className="navbar navbar-expand-xl navbar-dark">
//             <div className="container">
                
//                 {/* --- Logo --- */}
//                 <Link href="/">
//                     <a className="navbar-brand" onClick={(e) => handleLinkClick(e, '/')}>
//                         <img
//                             alt="image"
//                             src="/assets/images/VTU9T9WZ-logo.png"
//                             style={{ maxWidth: '160px', maxHeight: '45px', objectFit: 'contain' }}
//                         />
//                     </a>
//                 </Link>

//                 {/* --- Mobile Toggle Button (No Border) --- */}
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     onClick={() => setIsOpen(!isOpen)}
//                     style={{ border: 'none', padding: '0' }} // <--- Fixed: Removed Border & Padding
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* --- Main Navigation --- */}
//                 <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
//                     <ul className="navbar-nav ms-auto align-items-center">
                        
//                         <li className="nav-item">
//                             <Link href="/">
//                                 <a className={`nav-link ${isActive('/')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/' ? activeLinkStyle : {})}} 
//                                    onClick={(e) => handleLinkClick(e, '/')}>
//                                    Home
//                                 </a>
//                             </Link>
//                         </li>

//                         {/* Dropdown: About Us (Hover works on Desktop via CSS) */}
//                         <li className="nav-item dropdown">
//                             <a 
//                                 className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
//                                 href="#" 
//                                 id="aboutDropdown" 
//                                 role="button" 
//                                 // data-bs-toggle click behavior mobile ke liye rakha hai
//                                 data-bs-toggle="dropdown" 
//                                 aria-expanded="false"
//                                 style={{...navLinkStyle, ...(isParentActive(['/our-firm', '/awards-ccolades', '/promoters']) ? activeLinkStyle : {})}}
//                             >
//                                 About Us
//                             </a>
//                             <ul className="dropdown-menu" aria-labelledby="aboutDropdown" style={{ borderTop: `3px solid ${buttonSettings.bgColor}` }}>
//                                 <li><Link href="/our-firm"><a className="dropdown-item" onClick={(e) => handleLinkClick(e, '/our-firm')}>Our Firm</a></Link></li>
//                                 <li><Link href="/awards-ccolades"><a className="dropdown-item" onClick={(e) => handleLinkClick(e, '/awards-ccolades')}>Awards & Accolades</a></Link></li>
//                                 <li><Link href="/promoters"><a className="dropdown-item" onClick={(e) => handleLinkClick(e, '/promoters')}>Promoters</a></Link></li>
//                             </ul>
//                         </li>

//                         <li className="nav-item">
//                             <Link href="/attorneys">
//                                 <a className={`nav-link ${isActive('/attorneys')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/attorneys' ? activeLinkStyle : {})}}
//                                    onClick={(e) => handleLinkClick(e, '/attorneys')}>
//                                    Professionals
//                                 </a>
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/capability">
//                                 <a className={`nav-link ${isActive('/capability')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/capability' ? activeLinkStyle : {})}}
//                                    onClick={(e) => handleLinkClick(e, '/capability')}>
//                                    Capabilities
//                                 </a>
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/news">
//                                 <a className={`nav-link ${isActive('/news')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/news' ? activeLinkStyle : {})}}
//                                    onClick={(e) => handleLinkClick(e, '/news')}>
//                                    News
//                                 </a>
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/blog">
//                                 <a className={`nav-link ${isActive('/blog')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/blog' ? activeLinkStyle : {})}}
//                                    onClick={(e) => handleLinkClick(e, '/blog')}>
//                                    Blog
//                                 </a>
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/events">
//                                 <a className={`nav-link ${isActive('/events')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/events' ? activeLinkStyle : {})}}
//                                    onClick={(e) => handleLinkClick(e, '/events')}>
//                                    Events
//                                 </a>
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/careers">
//                                 <a className={`nav-link ${isActive('/careers')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/careers' ? activeLinkStyle : {})}}
//                                    onClick={(e) => handleLinkClick(e, '/careers')}>
//                                    Careers
//                                 </a>
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="/contact">
//                                 <a className={`nav-link ${isActive('/contact')}`} 
//                                    style={{...navLinkStyle, ...(router.pathname === '/contact' ? activeLinkStyle : {})}}
//                                    onClick={(e) => handleLinkClick(e, '/contact')}>
//                                    Contact Us
//                                 </a>
//                             </Link>
//                         </li>

//                         {/* Login Button */}
//                         <li className="nav-item ms-xl-4 mt-3 mt-xl-0">
//                             <Link href="/login-signup">
//                                 <a 
//                                     style={{
//                                         ...btnStyle,
//                                         width: isOpen && window.innerWidth < 1200 ? '100%' : buttonSettings.desktopWidth
//                                     }}
//                                     onClick={(e) => handleLinkClick(e, '/login-signup')}
//                                 >
//                                     Login/Signup
//                                 </a>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//       </header>

//       {/* Spacer */}
//       <div style={{ height: '80px' }}></div>
//     </>
//   )
// }

// export default Header


import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const router = useRouter();

  // --- SETTINGS ---
  const buttonSettings = {
    bgColor: '#de9f577e',
    textColor: '#ffffff',
    desktopWidth: '140px',
    desktopHeight: '42px',
  };

  // Sticky Menu Logic
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleLinkClick = (e, path) => {
    setIsOpen(false); 
    setDropdownOpen(false); 
    if (router.pathname === path) {
      e.preventDefault(); 
    }
  };

  
  const toggleDropdown = (e) => {
    if (window.innerWidth < 1200) { 
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    }
  };

  const isActive = (path) => {
    return router.pathname === path ? 'active' : '';
  };

  const isParentActive = (childPaths) => {
    return childPaths.some(path => router.pathname === path) ? 'active' : '';
  };

  // --- STYLES ---
  
  const headerStyle = {
    transition: 'all 0.3s ease',
    backgroundColor: '#000000',
    boxShadow: isSticky ? '0 2px 10px rgba(255,255,255,0.1)' : 'none',
    padding: isSticky ? '10px 0' : '15px 0',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999
  };

  const navLinkStyle = {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '20px', 
    padding: '10px 15px',
    whiteSpace: 'nowrap',
    transition: 'color 0.3s'
  };

  const activeLinkStyle = {
    color: '#de9f57',
  };

  const btnStyle = {
    backgroundColor: buttonSettings.bgColor,
    color: buttonSettings.textColor,
    width: buttonSettings.desktopWidth,
    height: buttonSettings.desktopHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    fontWeight: '600',
    fontSize: '15px', 
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    marginTop: '0'
  };

  return (
    <>
      <style jsx>{`
     
        @media (max-width: 1199px) {
            .navbar-collapse {
                background-color: #000000;
                padding: 20px;
                border-top: 1px solid rgba(255,255,255,0.1);
                max-height: 80vh; 
                overflow-y: auto;
            }
            /* Show dropdown when React state is true on mobile */
            .dropdown-menu.show {
                display: block;
                background: #111; 
                margin-left: 10px; 
                border: none;
            }
        }

        /* --- HOVER EFFECT FOR DESKTOP ONLY --- */
        @media (min-width: 1200px) {
            .nav-item.dropdown:hover .dropdown-menu {
                display: block;
                margin-top: 0;
            }
        }

        /* Dropdown Menu Style */
        .dropdown-menu {
            background-color: #000000;
            border: 1px solid rgba(255,255,255,0.2);
            display: none; 
        }
        
        /* Ensures React state 'show' class works */
        .dropdown-menu.show {
            display: block; 
        }

        .dropdown-item {
            color: #ffffff;
            font-size: 16px; 
            padding: 10px 20px;
            transition: all 0.2s ease;
        }
        .dropdown-item:hover {
            background-color: #333;
            color: #de9f57;
        }

        /* Toggler Icon Customization */
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }
        .navbar-toggler:focus {
            box-shadow: none;
            outline: none;
        }
      `}</style>

      <header style={headerStyle} className="header-area">
        <nav className="navbar navbar-expand-xl navbar-dark">
            <div className="container">
                
                {/* --- Logo --- */}
                <Link href="/">
                    <a className="navbar-brand" onClick={(e) => handleLinkClick(e, '/')}>
                        <img
    alt="law firm logo"
    src="/assets/images/logo.png"  
    width="180"
    height="55"
    style={{ objectFit: 'contain' }}
/>
                    </a>
                </Link>

                {/* --- Mobile Toggle Button --- */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ border: 'none', padding: '0' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* --- Main Navigation --- */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        
                        <li className="nav-item">
                            <Link href="/">
                                <a className={`nav-link ${isActive('/')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/' ? activeLinkStyle : {})}} 
                                   onClick={(e) => handleLinkClick(e, '/')}>
                                   Home
                                </a>
                            </Link>
                        </li>

                        {/* Dropdown: About Us */}
                        <li className="nav-item dropdown">
                            <a 
                                className={`nav-link dropdown-toggle ${isParentActive(['/our-firm', '/awards-ccolades', '/promoters'])}`}
                                href="#" 
                                id="aboutDropdown" 
                                role="button" 
                                onClick={toggleDropdown}
                                aria-expanded={dropdownOpen}
                                style={{...navLinkStyle, ...(isParentActive(['/our-firm', '/awards-ccolades', '/promoters']) ? activeLinkStyle : {})}}
                            >
                                About Us
                            </a>
                            {/* UPDATED: Added logic to show class based on state */}
                            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="aboutDropdown" style={{ borderTop: `3px solid ${buttonSettings.bgColor}` }}>
                                <li><Link href="/our-firm"><a className="dropdown-item" onClick={(e) => handleLinkClick(e, '/our-firm')}>Our Firm</a></Link></li>
                                <li><Link href="/awards-ccolades"><a className="dropdown-item" onClick={(e) => handleLinkClick(e, '/awards-ccolades')}>Awards & Accolades</a></Link></li>
                                <li><Link href="/promoters"><a className="dropdown-item" onClick={(e) => handleLinkClick(e, '/promoters')}>Promoters</a></Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link href="/attorneys">
                                <a className={`nav-link ${isActive('/attorneys')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/attorneys' ? activeLinkStyle : {})}}
                                   onClick={(e) => handleLinkClick(e, '/attorneys')}>
                                   Professionals
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/capability">
                                <a className={`nav-link ${isActive('/capability')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/capability' ? activeLinkStyle : {})}}
                                   onClick={(e) => handleLinkClick(e, '/capability')}>
                                   Capabilities
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/news">
                                <a className={`nav-link ${isActive('/news')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/news' ? activeLinkStyle : {})}}
                                   onClick={(e) => handleLinkClick(e, '/news')}>
                                   News
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog">
                                <a className={`nav-link ${isActive('/blog')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/blog' ? activeLinkStyle : {})}}
                                   onClick={(e) => handleLinkClick(e, '/blog')}>
                                   Blog
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/events">
                                <a className={`nav-link ${isActive('/events')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/events' ? activeLinkStyle : {})}}
                                   onClick={(e) => handleLinkClick(e, '/events')}>
                                   Events
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/careers">
                                <a className={`nav-link ${isActive('/careers')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/careers' ? activeLinkStyle : {})}}
                                   onClick={(e) => handleLinkClick(e, '/careers')}>
                                   Careers
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className={`nav-link ${isActive('/contact')}`} 
                                   style={{...navLinkStyle, ...(router.pathname === '/contact' ? activeLinkStyle : {})}}
                                   onClick={(e) => handleLinkClick(e, '/contact')}>
                                   Contact Us
                                </a>
                            </Link>
                        </li>

                        {/* Login Button */}
                        <li className="nav-item ms-xl-4 mt-3 mt-xl-0">
                            <Link href="/login-signup">
                                <a 
                                    style={{
                                        ...btnStyle,
                                        width: isOpen && window.innerWidth < 1200 ? '100%' : buttonSettings.desktopWidth
                                    }}
                                    onClick={(e) => handleLinkClick(e, '/login-signup')}
                                >
                                    Login/Signup
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>

      {/* Spacer */}
      <div style={{ height: '80px' }}></div>
    </>
  )
}

export default Header;
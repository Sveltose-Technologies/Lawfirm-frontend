"use strict";
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 7618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attorneysData": () => (/* binding */ attorneysData),
/* harmony export */   "default": () => (/* binding */ AttorneysPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);





// --- SHARED DATA SOURCE ---
// (Note: Real world app mein ye data kisi database ya API se aana chahiye)
const attorneysData = [
    {
        id: 1,
        name: "Caroline K. Abbott",
        role: "Senior Associate",
        phone: "1 202.530.8593",
        email: "caroline.abbott@lawfirm.com",
        location: "Washington, D.C.",
        category: "Corporate",
        rating: 5,
        hourlyRate: 350,
        image: "/assets/images/attorney1.png",
        bio: [
            "Caroline K. Abbott focuses her practice on corporate matters, including mergers and acquisitions.",
            "She has experience representing public and private companies."
        ],
        education: [
            "J.D., Harvard Law School",
            "B.A., Yale University"
        ],
        admissions: [
            "New York",
            "Washington, D.C."
        ]
    },
    {
        id: 2,
        name: "Jacob M. Abdo",
        role: "Associate",
        phone: "1 612.259.9681",
        email: "jake.abdo@lawfirm.com",
        location: "Minneapolis",
        category: "Intellectual Property",
        rating: 4,
        hourlyRate: 280,
        image: "/assets/images/attorney2.png",
        bio: [
            "Jacob M. Abdo advises clients on intellectual property matters.",
            "He assists clients in protecting their intellectual property assets."
        ],
        education: [
            "J.D., Yale University",
            "B.S., University of Minnesota"
        ],
        admissions: [
            "Minnesota"
        ]
    },
    {
        id: 3,
        name: "Darren J. Abernethy",
        role: "Shareholder",
        phone: "1 415.655.1261",
        email: "abernethyd@lawfirm.com",
        location: "San Francisco",
        category: "Data Privacy",
        rating: 5,
        hourlyRate: 700,
        image: "/assets/images/attorney3.png",
        bio: [
            "Darren J. Abernethy focuses on data privacy and cybersecurity.",
            "He advises on GDPR, CCPA, and other data protection laws."
        ],
        education: [
            "J.D., Stanford Law",
            "B.A., UCLA"
        ],
        admissions: [
            "California"
        ]
    },
    {
        id: 4,
        name: "Charles J. Abrams",
        role: "Shareholder",
        phone: "1 561.650.7984",
        email: "abramsc@lawfirm.com",
        location: "West Palm Beach",
        category: "Real Estate",
        rating: 3,
        hourlyRate: 450,
        image: "/assets/images/attorney4.png",
        bio: [
            "Charles J. Abrams has extensive experience in commercial real estate transactions.",
            "He represents developers, investors, and lenders."
        ],
        education: [
            "J.D., University of Florida",
            "B.A., University of Miami"
        ],
        admissions: [
            "Florida"
        ]
    },
    {
        id: 5,
        name: "Ejim Peter Achi",
        role: "Partner",
        phone: "1 212.801.6963",
        email: "achie@lawfirm.com",
        location: "New York",
        category: "Corporate",
        rating: 5,
        hourlyRate: 900,
        image: "/assets/images/attorney5.png",
        bio: [
            "Ejim Peter Achi represents private equity sponsors and their portfolio companies.",
            "His practice focuses on leveraged buyouts and growth equity."
        ],
        education: [
            "J.D., Columbia Law School",
            "B.A., University of Pennsylvania"
        ],
        admissions: [
            "New York"
        ]
    },
    {
        id: 6,
        name: "Ashia D. Adams",
        role: "Senior Associate",
        phone: "+44 203 349 8800",
        email: "ashia.adams@lawfirm.com",
        location: "London",
        category: "Real Estate",
        rating: 4,
        hourlyRate: 550,
        image: "/assets/images/attorney6.png",
        bio: [
            "Ashia D. Adams is a member of the Real Estate Practice in London.",
            "She handles complex cross-border transactions."
        ],
        education: [
            "LLB, Oxford University",
            "LPC, BPP Law School"
        ],
        admissions: [
            "England & Wales"
        ]
    },
    {
        id: 7,
        name: "Bianca Z. Bailey",
        role: "Associate",
        phone: "1 310.555.0192",
        email: "bianca.b@lawfirm.com",
        location: "Los Angeles",
        category: "Litigation",
        rating: 5,
        hourlyRate: 400,
        image: "/assets/images/attorney7.png",
        bio: [
            "Bianca specializes in commercial litigation and dispute resolution.",
            "She has a strong track record in mediation."
        ],
        education: [
            "J.D., UCLA Law",
            "B.A., USC"
        ],
        admissions: [
            "California",
            "Nevada"
        ]
    }
];
function AttorneysPage() {
    // --- THEME ---
    const theme = {
        primaryBlue: "#002855",
        accentGold: "#de9f57",
        white: "#ffffff",
        lightGray: "#f8f9fa"
    };
    // --- STATE ---
    const { 0: searchTerm , 1: setSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: selectedLetter , 1: setSelectedLetter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("All");
    const { 0: showMobileFilters , 1: setShowMobileFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // Filters State
    const { 0: filters , 1: setFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        category: "All",
        location: "All",
        rating: "All",
        price: "All"
    });
    // --- DYNAMIC DATA EXTRACTION ---
    const categories = [
        "All",
        ...new Set(attorneysData.map((a)=>a.category))
    ].sort();
    const locations = [
        "All",
        ...new Set(attorneysData.map((a)=>a.location))
    ].sort();
    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    // --- MAIN FILTER LOGIC ---
    const filteredData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return attorneysData.filter((attorney)=>{
            // 1. Search Logic
            if (searchTerm && !attorney.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
            // 2. Alphabet Filter
            if (selectedLetter !== "All" && !attorney.name.startsWith(selectedLetter)) return false;
            // 3. Category Filter
            if (filters.category !== "All" && attorney.category !== filters.category) return false;
            // 4. Location Filter
            if (filters.location !== "All" && attorney.location !== filters.location) return false;
            // 5. Rating Filter
            if (filters.rating !== "All") {
                if (attorney.rating < parseInt(filters.rating)) return false;
            }
            // 6. Price Filter
            if (filters.price !== "All") {
                if (filters.price === "low" && attorney.hourlyRate > 300) return false;
                if (filters.price === "mid" && (attorney.hourlyRate <= 300 || attorney.hourlyRate > 600)) return false;
                if (filters.price === "high" && attorney.hourlyRate <= 600) return false;
            }
            return true;
        }).sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        searchTerm,
        selectedLetter,
        filters
    ]);
    // Handlers
    const handleFilterChange = (key, value)=>{
        setFilters((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const handleReset = ()=>{
        setSearchTerm("");
        setSelectedLetter("All");
        setFilters({
            category: "All",
            location: "All",
            rating: "All",
            price: "All"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-86b666d58653fd56",
                    children: "Professionals List | Core Law"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    backgroundColor: theme.primaryBlue,
                    padding: "80px 0 50px 0",
                    color: theme.white
                },
                className: "jsx-86b666d58653fd56",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-86b666d58653fd56" + " " + "container text-center text-lg-start",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            style: {
                                color: theme.accentGold,
                                letterSpacing: "2px"
                            },
                            className: "jsx-86b666d58653fd56" + " " + "text-uppercase fw-bold mb-2",
                            children: "Our Team"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "jsx-86b666d58653fd56" + " " + "display-4 fw-bold font-serif",
                            children: "Find a Professional"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "jsx-86b666d58653fd56" + " " + "lead opacity-75",
                            children: "Filter by expertise, location, rating or hourly rate."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    backgroundColor: theme.lightGray
                },
                className: "jsx-86b666d58653fd56" + " " + "py-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-86b666d58653fd56" + " " + "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-86b666d58653fd56" + " " + "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-86b666d58653fd56" + " " + "col-12 d-lg-none mb-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    style: {
                                        backgroundColor: theme.primaryBlue,
                                        borderColor: theme.primaryBlue
                                    },
                                    onClick: ()=>setShowMobileFilters(!showMobileFilters),
                                    className: "jsx-86b666d58653fd56" + " " + "btn btn-primary w-100 d-flex justify-content-between align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "jsx-86b666d58653fd56",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "jsx-86b666d58653fd56" + " " + "bi bi-funnel-fill me-2"
                                                }),
                                                "Filter Results"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "jsx-86b666d58653fd56" + " " + `bi bi-chevron-${showMobileFilters ? "up" : "down"}`
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-86b666d58653fd56" + " " + `col-lg-3 mb-5 pe-lg-4 ${showMobileFilters ? "d-block" : "d-none d-lg-block"}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-86b666d58653fd56" + " " + "bg-white p-4 shadow-sm rounded border",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-86b666d58653fd56" + " " + "mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-86b666d58653fd56" + " " + "fw-bold small text-muted mb-2",
                                                    children: "SEARCH NAME"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Caroline",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value),
                                                    className: "jsx-86b666d58653fd56" + " " + "form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "jsx-86b666d58653fd56" + " " + "text-muted opacity-25"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-86b666d58653fd56" + " " + "mb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-86b666d58653fd56" + " " + "fw-bold small text-muted mb-2",
                                                    children: "CATEGORY"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    value: filters.category,
                                                    onChange: (e)=>handleFilterChange("category", e.target.value),
                                                    className: "jsx-86b666d58653fd56" + " " + "form-select form-select-sm",
                                                    children: categories.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: c,
                                                            className: "jsx-86b666d58653fd56",
                                                            children: c
                                                        }, c))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-86b666d58653fd56" + " " + "mb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-86b666d58653fd56" + " " + "fw-bold small text-muted mb-2",
                                                    children: "LOCATION"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    value: filters.location,
                                                    onChange: (e)=>handleFilterChange("location", e.target.value),
                                                    className: "jsx-86b666d58653fd56" + " " + "form-select form-select-sm",
                                                    children: locations.map((l)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: l,
                                                            className: "jsx-86b666d58653fd56",
                                                            children: l
                                                        }, l))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-86b666d58653fd56" + " " + "mb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-86b666d58653fd56" + " " + "fw-bold small text-muted mb-2",
                                                    children: "HOURLY RATE"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                    value: filters.price,
                                                    onChange: (e)=>handleFilterChange("price", e.target.value),
                                                    className: "jsx-86b666d58653fd56" + " " + "form-select form-select-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "All",
                                                            className: "jsx-86b666d58653fd56",
                                                            children: "Any Price"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "low",
                                                            className: "jsx-86b666d58653fd56",
                                                            children: "Economy (< $300)"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "mid",
                                                            className: "jsx-86b666d58653fd56",
                                                            children: "Standard ($300 - $600)"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "high",
                                                            className: "jsx-86b666d58653fd56",
                                                            children: "Premium (> $600)"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-86b666d58653fd56" + " " + "mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "jsx-86b666d58653fd56" + " " + "fw-bold small text-muted mb-2",
                                                    children: "RATING"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-86b666d58653fd56" + " " + "d-flex flex-column gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-86b666d58653fd56" + " " + "form-check",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "radio",
                                                                    name: "rating",
                                                                    id: "r_all",
                                                                    checked: filters.rating === "All",
                                                                    onChange: ()=>handleFilterChange("rating", "All"),
                                                                    className: "jsx-86b666d58653fd56" + " " + "form-check-input"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "r_all",
                                                                    className: "jsx-86b666d58653fd56" + " " + "form-check-label small",
                                                                    children: "All"
                                                                })
                                                            ]
                                                        }),
                                                        [
                                                            5,
                                                            4,
                                                            3
                                                        ].map((r)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-86b666d58653fd56" + " " + "form-check",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "radio",
                                                                        name: "rating",
                                                                        id: `r_${r}`,
                                                                        checked: filters.rating === String(r),
                                                                        onChange: ()=>handleFilterChange("rating", String(r)),
                                                                        className: "jsx-86b666d58653fd56" + " " + "form-check-input"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: `r_${r}`,
                                                                        className: "jsx-86b666d58653fd56" + " " + "form-check-label small",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "jsx-86b666d58653fd56" + " " + "text-warning",
                                                                                children: [
                                                                                    ...Array(r)
                                                                                ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "bi bi-star-fill"
                                                                                    }, i))
                                                                            }),
                                                                            " & Up"
                                                                        ]
                                                                    })
                                                                ]
                                                            }, r))
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: handleReset,
                                            className: "jsx-86b666d58653fd56" + " " + "btn btn-outline-danger w-100 btn-sm",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "jsx-86b666d58653fd56" + " " + "bi bi-x-circle me-1"
                                                }),
                                                " Clear Filters"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-86b666d58653fd56" + " " + "col-lg-9",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-86b666d58653fd56" + " " + "bg-white p-3 shadow-sm rounded border mb-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-86b666d58653fd56" + " " + "d-flex gap-2 overflow-auto alphabet-scroll",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    onClick: ()=>setSelectedLetter("All"),
                                                    className: "jsx-86b666d58653fd56" + " " + `alphabet-item ${selectedLetter === "All" ? "active" : ""}`,
                                                    children: "All"
                                                }),
                                                alphabet.map((letter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        onClick: ()=>setSelectedLetter(letter),
                                                        className: "jsx-86b666d58653fd56" + " " + `alphabet-item ${selectedLetter === letter ? "active" : ""}`,
                                                        children: letter
                                                    }, letter))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-86b666d58653fd56" + " " + "row",
                                        children: filteredData.length > 0 ? filteredData.map((attorney)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-86b666d58653fd56" + " " + "col-12 mb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-86b666d58653fd56" + " " + "card border-0 shadow-sm attorney-card overflow-hidden",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-86b666d58653fd56" + " " + "row g-0",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-86b666d58653fd56" + " " + "col-md-3 col-sm-4 bg-light text-center position-relative",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    href: `/attorneys/${attorney.id}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "jsx-86b666d58653fd56" + " " + "d-block h-100",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: attorney.image,
                                                                            alt: attorney.name,
                                                                            style: {
                                                                                objectFit: "cover",
                                                                                minHeight: "180px"
                                                                            },
                                                                            className: "jsx-86b666d58653fd56" + " " + "img-fluid h-100 w-100"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-86b666d58653fd56" + " " + "col-md-9 col-sm-8 p-3 p-md-4 d-flex flex-column justify-content-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "jsx-86b666d58653fd56" + " " + "d-flex justify-content-between align-items-start mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "jsx-86b666d58653fd56",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "card-title fw-bold mb-0",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                            href: `/attorneys/${attorney.id}`,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                className: "jsx-86b666d58653fd56" + " " + "text-decoration-none text-dark hover-gold",
                                                                                                children: attorney.name
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "badge bg-light text-secondary border mt-1",
                                                                                        children: attorney.role
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "jsx-86b666d58653fd56" + " " + "text-end d-none d-sm-block",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "text-warning small",
                                                                                        children: [
                                                                                            ...Array(5)
                                                                                        ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "jsx-86b666d58653fd56" + " " + `bi bi-star${i < attorney.rating ? "-fill" : ""}`
                                                                                            }, i))
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "fw-bold text-success mt-1",
                                                                                        children: [
                                                                                            "$",
                                                                                            attorney.hourlyRate,
                                                                                            "/hr"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "jsx-86b666d58653fd56" + " " + "row text-muted small mt-2 gy-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "jsx-86b666d58653fd56" + " " + "col-md-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "bi bi-geo-alt-fill me-2 text-gold"
                                                                                    }),
                                                                                    attorney.location
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "jsx-86b666d58653fd56" + " " + "col-md-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "bi bi-briefcase-fill me-2 text-gold"
                                                                                    }),
                                                                                    attorney.category
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "jsx-86b666d58653fd56" + " " + "col-md-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "bi bi-telephone-fill me-2 text-gold"
                                                                                    }),
                                                                                    attorney.phone
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "jsx-86b666d58653fd56" + " " + "d-flex justify-content-between align-items-center mt-3 pt-3 border-top d-sm-none",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "jsx-86b666d58653fd56" + " " + "text-warning small",
                                                                                children: [
                                                                                    ...Array(attorney.rating)
                                                                                ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "jsx-86b666d58653fd56" + " " + "bi bi-star-fill"
                                                                                    }, i))
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: "jsx-86b666d58653fd56" + " " + "fw-bold text-success",
                                                                                children: [
                                                                                    "$",
                                                                                    attorney.hourlyRate,
                                                                                    "/hr"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, attorney.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-86b666d58653fd56" + " " + "col-12",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-86b666d58653fd56" + " " + "alert alert-light text-center border py-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "jsx-86b666d58653fd56" + " " + "bi bi-search display-6 text-muted mb-3"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "jsx-86b666d58653fd56",
                                                        children: "No professionals found matching your criteria."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: handleReset,
                                                        className: "jsx-86b666d58653fd56" + " " + "btn btn-link",
                                                        children: "Reset All Filters"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "86b666d58653fd56",
                children: `.text-gold.jsx-86b666d58653fd56{color:${theme.accentGold}}.alphabet-scroll.jsx-86b666d58653fd56::-webkit-scrollbar{height:4px}.alphabet-scroll.jsx-86b666d58653fd56::-webkit-scrollbar-thumb{background:#ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.alphabet-item.jsx-86b666d58653fd56{min-width:35px;height:35px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;font-weight:bold;color:${theme.primaryBlue};-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s;font-size:14px}.alphabet-item.jsx-86b666d58653fd56:hover,.alphabet-item.active.jsx-86b666d58653fd56{background-color:${theme.primaryBlue};color:white}.hover-gold.jsx-86b666d58653fd56:hover{color:${theme.accentGold}!important;-webkit-transition:color.2s;-moz-transition:color.2s;-o-transition:color.2s;transition:color.2s}.attorney-card.jsx-86b666d58653fd56{-webkit-transition:-webkit-transform.2s,box-shadow.2s;-moz-transition:-moz-transform.2s,box-shadow.2s;-o-transition:-o-transform.2s,box-shadow.2s;transition:-webkit-transform.2s,box-shadow.2s;transition:-moz-transform.2s,box-shadow.2s;transition:-o-transform.2s,box-shadow.2s;transition:transform.2s,box-shadow.2s}.attorney-card.jsx-86b666d58653fd56:hover{-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px rgba(0,0,0,.1)!important;-moz-box-shadow:0 10px 20px rgba(0,0,0,.1)!important;box-shadow:0 10px 20px rgba(0,0,0,.1)!important}`
            })
        ]
    });
};


/***/ })

};
;
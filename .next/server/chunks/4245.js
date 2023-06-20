"use strict";
exports.id = 4245;
exports.ids = [4245];
exports.modules = {

/***/ 9516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-css-tags */






const DarkTheme = ({
  children,
  useSkin,
  mobileappstyle
}) => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    window.theme = "dark";
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/dark.css"
      }), useSkin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/arch-skin-dark.css"
      }) : "", mobileappstyle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        href: "/css/mobile-app-dark.css",
        rel: "stylesheet"
      }) : ""]
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);

/***/ }),

/***/ 4245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Navbar/navbar.jsx
var navbar = __webpack_require__(15);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Intro2/intro2.jsx
/* eslint-disable @next/next/no-img-element */





const Intro2 = ({
  sliderRef
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    ref: sliderRef,
    className: "slider-st valign position-re",
    style: {
      backgroundImage: "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "overLay",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cont md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "sub-title mb-5",
              children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Digital Consulting Agency"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "mb-10 fw-600",
              children: "Unique Business Consulting."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-white",
              children: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: `/about/about-dark`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "butn bord curve mt-30",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "About Us"
                })
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "line bottom left"
    })]
  });
};

/* harmony default export */ const intro2 = (Intro2);
// EXTERNAL MODULE: ./src/components/Services/services.jsx + 1 modules
var services = __webpack_require__(3248);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
;// CONCATENATED MODULE: ./src/components/Video2/video2.jsx






const Video2 = () => {
  const [isOpen, setOpen] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    console.clear();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "video bg-img parallaxie",
    style: {
      backgroundImage: "url(https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    children: [ false && /*#__PURE__*/0, /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "vid valign",
      onClick: e => {
        e.preventDefault();
        setOpen(true);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "vid-butn",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "pe-7s-play"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "stauts",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            children: ["3", /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "K"
            }), " +"]
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: "Happy Clients"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            children: ["14", /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "K"
            }), " +"]
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: "Success Projects"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const video2 = (Video2);
// EXTERNAL MODULE: ./src/components/Call-to-action/call-to-action.jsx
var call_to_action = __webpack_require__(2786);
// EXTERNAL MODULE: ./src/components/Footer/footer.jsx
var footer = __webpack_require__(5914);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(9516);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(5032);
;// CONCATENATED MODULE: ./src/components/Portfolio/portfolio.jsx
/* eslint-disable @next/next/no-img-element */








const Portfolio = ({
  grid,
  filterPosition
}) => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      (0,initIsotope/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "portfolio section-padding pb-70",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Portfolio"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "wow color-font",
              children: ["Our Recent Web Design & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Some Past Projects."]
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${grid === 3 ? "container-fluid" : "container"}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "filter",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": "*",
              className: "active",
              children: "All"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".brand",
              children: "Branding"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".web",
              children: "Mobile App"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".graphic",
              children: "Creative"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "gallery full-width",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6 lg-mr" : "col-12"} items graphic wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/1.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Creativity Demand"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/works/works-dark",
                  children: "Design"
                }), ", ", /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/works/works-dark",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/2.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Through The Breaking"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "Design"
                }), ", ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/3.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Create With Creatives"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "Design"
                }), ", ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/4.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Energies of Love"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "Design"
                }), ", ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/5.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "See It Yourself"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "Design"
                }), ", ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/6.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Blast From The Past"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "Design"
                }), ", ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: "WordPress"
                })]
              })]
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const portfolio = (Portfolio);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/Full-testimonials/full-testimonials.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */







class FullTestimonials extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderArrows", () => {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "arrows",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: () => this.slider.slickNext(),
            className: "next cursor-pointer",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "pe-7s-angle-right"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: () => this.slider.slickPrev(),
            className: "prev cursor-pointer",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "pe-7s-angle-left"
            })
          })]
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: `testimonials ${this.props.withIMG ? "section-padding bg-img" : this.props.withCOLOR ? "section-padding back-color" : this.props.noPadding ? "" : "section-padding"} ${this.props.classText ? this.props.classText : ""}`,
      style: {
        backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"}`
      },
      children: [this.props.showHead && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "sec-head  text-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Testimonials"
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "wow color-font",
                children: "We love our clients from all over the world."
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid position-re",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row wow fadeInUp",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), {
              className: "slic-item",
              ref: c => this.slider = c,
              dots: false,
              infinite: true,
              arrows: true,
              centerMode: true,
              autoplay: true,
              rows: 1,
              slidesToScroll: 1,
              slidesToShow: 3,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }],
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMGF2YXRhcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
                          alt: "",
                          style: {
                            objectFit: "contain"
                          }
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Prominence\u2019s consulting team offered and implemented sophisticated tools and techniques to assess the temperature of the organization."
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMGF2YXRhcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
                          alt: ""
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Prominence\u2019s consulting team offered and implemented sophisticated tools and techniques to assess the temperature of the organization."
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=900&q=60",
                          alt: ""
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Prominence\u2019s consulting team offered and implemented sophisticated tools and techniques to assess the temperature of the organization."
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXIlMjBwcm9maWxlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
                          alt: ""
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Prominence\u2019s consulting team offered and implemented sophisticated tools and techniques to assess the temperature of the organization."
                })]
              })]
            })
          })
        }), this.renderArrows()]
      })]
    });
  }

}

/* harmony default export */ const full_testimonials = (FullTestimonials);
;// CONCATENATED MODULE: ./src/components/Team2/team2.jsx
/* eslint-disable @next/next/no-img-element */




const Team2 = () => {
  return /*#__PURE__*/_jsxs("section", {
    className: "team section-padding",
    children: [/*#__PURE__*/_jsx("div", {
      className: "container",
      children: /*#__PURE__*/_jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/_jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/_jsxs("div", {
            className: "sec-head text-center",
            children: [/*#__PURE__*/_jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Our Team"
            }), /*#__PURE__*/_jsx("h3", {
              className: "wow color-font",
              children: "An original team of creators designers & dreamers."
            })]
          })
        })
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/_jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/_jsxs("div", {
              className: "img",
              children: [/*#__PURE__*/_jsx("img", {
                src: "/img/team/1.jpg",
                alt: ""
              }), /*#__PURE__*/_jsx("div", {
                id: "circle1",
                children: /*#__PURE__*/_jsxs("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/_jsx("defs", {
                    children: /*#__PURE__*/_jsx("path", {
                      id: "circlePath1",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/_jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/_jsxs("g", {
                    children: [/*#__PURE__*/_jsx("use", {
                      xlinkHref: "#circlePath1",
                      fill: "none"
                    }), /*#__PURE__*/_jsx("text", {
                      fill: "#fff",
                      children: /*#__PURE__*/_jsx("textPath", {
                        xlinkHref: "#circlePath1",
                        children: "CEO Manager CEO Manager CEO Manager"
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "info",
                children: [/*#__PURE__*/_jsx("h6", {
                  children: "Ryan Hicks"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Client Manager"
                })]
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/_jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/_jsxs("div", {
              className: "img",
              children: [/*#__PURE__*/_jsx("img", {
                src: "/img/team/2.jpg",
                alt: ""
              }), /*#__PURE__*/_jsx("div", {
                id: "circle2",
                children: /*#__PURE__*/_jsxs("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/_jsx("defs", {
                    children: /*#__PURE__*/_jsx("path", {
                      id: "circlePath2",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/_jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/_jsxs("g", {
                    children: [/*#__PURE__*/_jsx("use", {
                      xlinkHref: "#circlePath2",
                      fill: "none"
                    }), /*#__PURE__*/_jsx("text", {
                      fill: "#fff",
                      children: /*#__PURE__*/_jsx("textPath", {
                        xlinkHref: "#circlePath2",
                        children: "Interior Designer Interior Designer Interior Designer"
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "info",
                children: [/*#__PURE__*/_jsx("h6", {
                  children: "Ryan Hicks"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Client Manager"
                })]
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/_jsx("div", {
            className: "item cir sm-mb50",
            children: /*#__PURE__*/_jsxs("div", {
              className: "img",
              children: [/*#__PURE__*/_jsx("img", {
                src: "/img/team/3.jpg",
                alt: ""
              }), /*#__PURE__*/_jsx("div", {
                id: "circle3",
                children: /*#__PURE__*/_jsxs("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/_jsx("defs", {
                    children: /*#__PURE__*/_jsx("path", {
                      id: "circlePath3",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/_jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/_jsxs("g", {
                    children: [/*#__PURE__*/_jsx("use", {
                      xlinkHref: "#circlePath3",
                      fill: "none"
                    }), /*#__PURE__*/_jsx("text", {
                      fill: "#fff",
                      children: /*#__PURE__*/_jsx("textPath", {
                        xlinkHref: "#circlePath3",
                        children: "Landscape Designer Landscape Designer Landscape Designer"
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "info",
                children: [/*#__PURE__*/_jsx("h6", {
                  children: "Ryan Hicks"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Client Manager"
                })]
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/_jsx("div", {
            className: "item cir",
            children: /*#__PURE__*/_jsxs("div", {
              className: "img",
              children: [/*#__PURE__*/_jsx("img", {
                src: "/img/team/4.jpg",
                alt: ""
              }), /*#__PURE__*/_jsx("div", {
                id: "circle4",
                children: /*#__PURE__*/_jsxs("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/_jsx("defs", {
                    children: /*#__PURE__*/_jsx("path", {
                      id: "circlePath4",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/_jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/_jsxs("g", {
                    children: [/*#__PURE__*/_jsx("use", {
                      xlinkHref: "#circlePath4",
                      fill: "none"
                    }), /*#__PURE__*/_jsx("text", {
                      fill: "#fff",
                      children: /*#__PURE__*/_jsx("textPath", {
                        xlinkHref: "#circlePath4",
                        children: "Client Manager Client Manager Client Manager"
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "info",
                children: [/*#__PURE__*/_jsx("h6", {
                  children: "Ryan Hicks"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Client Manager"
                })]
              })]
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const team2 = ((/* unused pure expression or super */ null && (Team2)));
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(9898);
;// CONCATENATED MODULE: ./src/components/blogs/Blogs2/blogs2.jsx
/* eslint-disable @next/next/no-img-element */






const Blogs2 = () => {
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "blog-list section-padding sub-bg",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "head md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "back-color",
              children: "Get The Latest News"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "What Our Trending News."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "We provide company and finance service for startups and company business."
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/blog",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "More Blog Posts"
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-7 offset-lg-1",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "img\\furniture.png",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: {
                      pathname: "/blog-details",
                      query: {
                        img: "furniture.png"
                      }
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "img\\furniture1.png",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: {
                      pathname: "/blog-details",
                      query: {
                        img: "furniture1.png"
                      }
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "img\\furniture2.png",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog",
                    quer: true,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/blog",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: {
                      pathname: "/blog-details",
                      query: {
                        img: "furniture2.png"
                      }
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const blogs2 = (Blogs2);
;// CONCATENATED MODULE: ./src/pages/homepage/home.jsx















const Homepage = () => {
  const navbarRef = external_react_default().useRef(null);
  const logoRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(navbar/* default */.Z, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/jsx_runtime_.jsx(intro2, {}), /*#__PURE__*/jsx_runtime_.jsx(services/* default */.Z, {
      style: "4item"
    }), /*#__PURE__*/jsx_runtime_.jsx(video2, {}), /*#__PURE__*/jsx_runtime_.jsx(portfolio, {
      grid: 3,
      filterPosition: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(full_testimonials, {
      noPadding: true
    }), /*#__PURE__*/jsx_runtime_.jsx(blogs2, {}), /*#__PURE__*/jsx_runtime_.jsx(call_to_action/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
};

/* harmony default export */ const home = (Homepage);

/***/ })

};
;
"use strict";
exports.id = 3686;
exports.ids = [3686];
exports.modules = {

/***/ 8728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_intro)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
;// CONCATENATED MODULE: ./src/data/sections/about-info1.json
const about_info1_namespaceObject = JSON.parse('{"TN":"Who We Are ?","X8":"Established in 2003, Prominence Consulting is a privately-owned Australian company with a global reach. By bringing business and project leaders together with highly skilled specialists, we tackle business problems in an efficient and fit-for-purpose way.","i7":"We pick the right consultants for each project by first investing in understanding their collaborative-styles and strengths. So you can rest assured that the team we put forward to work with you culturally fit your organisation and approaches your project with a suitable methodology."}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-intro/index.jsx






const AboutIntro = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "intro-section section-padding pb-0",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "htit sm-mb30",
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: about_info1_namespaceObject.TN
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 offset-lg-1 col-md-8",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Split/* default */.Z, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "wow txt mb-10 words chars splitting",
                "data-splitting": true,
                children: about_info1_namespaceObject.X8
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: about_info1_namespaceObject.i7
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const About_intro = (AboutIntro);

/***/ }),

/***/ 6415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ clients)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/clients.json
const clients_namespaceObject = JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/01.png","darkImage":"/img/clients/brands/dark/01.png","url":"www.Vie.com"},{"id":2,"lightImage":"/img/clients/brands/light/02.png","darkImage":"/img/clients/brands/dark/02.png","url":"www.Vie.com"},{"id":3,"lightImage":"/img/clients/brands/light/03.png","darkImage":"/img/clients/brands/dark/03.png","url":"www.Vie.com"},{"id":4,"lightImage":"/img/clients/brands/light/04.png","darkImage":"/img/clients/brands/dark/04.png","url":"www.Vie.com"},{"id":5,"lightImage":"/img/clients/brands/light/05.png","darkImage":"/img/clients/brands/dark/05.png","url":"www.Vie.com"},{"id":6,"lightImage":"/img/clients/brands/light/06.png","darkImage":"/img/clients/brands/dark/06.png","url":"www.Vie.com"},{"id":7,"lightImage":"/img/clients/brands/light/07.png","darkImage":"/img/clients/brands/dark/07.png","url":"www.Vie.com"},{"id":8,"lightImage":"/img/clients/brands/light/08.png","darkImage":"/img/clients/brands/dark/08.png","url":"www.Vie.com"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Clients/clients.jsx
/* eslint-disable @next/next/no-img-element */






const Clients = ({
  theme
}) => {
  var first = clients_namespaceObject.slice(0, clients_namespaceObject.length / 2);
  var second = clients_namespaceObject.slice(4, clients_namespaceObject.length);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "clients section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 valign md-mb50",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head mb-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Features"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow mb-20 color-font",
              children: "Our Clients"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Our area of practice is quite wide: design, graphics, branding, development."
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row bord",
              children: first.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-3 col-6 brands",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item wow fadeIn",
                  "data-wow-delay": `${item.id == 1 ? ".3" : item.id == 2 ? ".6" : item.id == 3 ? ".8" : item.id == 4 ? ".3" : ""}s`,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "img",
                    children: [theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.lightImage,
                      alt: ""
                    }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.darkImage,
                      alt: ""
                    }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#0",
                        className: "link words chars splitting",
                        "data-splitting": true,
                        children: item.url
                      })
                    })]
                  })
                })
              }, item.id))
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row",
              children: second.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `${item.id == 5 ? "col-md-3 col-6 brands sm-mb30" : item.id == 6 ? "col-md-3 col-6 brands sm-mb30" : item.id == 7 ? "col-md-3 col-6 brands" : item.id == 8 ? "col-md-3 col-6 brands" : ""}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item wow fadeIn",
                  "data-wow-delay": `${item.id == 1 ? ".4" : item.id == 2 ? ".7" : item.id == 3 ? ".5" : item.id == 4 ? ".3" : ""}s`,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "img",
                    children: [theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.lightImage,
                      alt: ""
                    }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.darkImage,
                      alt: ""
                    }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#0",
                        className: "link words chars splitting",
                        "data-splitting": true,
                        children: item.url
                      })
                    })]
                  })
                })
              }, item.id))
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const clients = (Clients);

/***/ }),

/***/ 4345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ minimal_area)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(7420);
;// CONCATENATED MODULE: ./src/common/cardMouseEffect.js


const cardMouseEffect = featureEl => {
  var featuresitems = featureEl;

  if (featuresitems) {
    featuresitems.forEach(item => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = (0,getSiblings/* default */.Z)(item),
            siblingEl = siblings.map(e => e.classList.remove("active"));
      };
    });
  }
};

/* harmony default export */ const common_cardMouseEffect = (cardMouseEffect);
;// CONCATENATED MODULE: ./src/common/thumparallax.js
const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");

  if (imageUp) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1
    });
  }
};
const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");

  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1
    });
  }
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Minimal-Area/minimal-area.jsx
/* eslint-disable @next/next/no-img-element */






const MinimalArea = () => {
  external_react_default().useEffect(() => {
    common_cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "min-area sub-bg",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "thumparallax-down",
              src: "\\img\\about us.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content pt-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "wow color-font",
              children: "About us."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "wow txt",
              "data-splitting": true,
              children: "Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "feat",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".2s",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "1"
                  }), " Our Mission"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "2"
                  }), " Our Goals"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".6s",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "3"
                  }), " Why Us?"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const minimal_area = (MinimalArea);

/***/ }),

/***/ 5581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-img-element */




const PagesHeader = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "pages-header circle-bg valign",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row justify-content-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "cont mt-100 mb-50 text-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
              className: "color-font fw-700",
              children: "Shaping a successful future takes strong leadership and specialist skills. Our team of independent, professional consultants are hand-picked for seamless collaboration and cultural fit within your organisation. And boasting an operating model with a proven track record, we\u2019ll not only define your company\u2019s needs, but help shape its success."
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "\\img\\About.png",
              alt: ""
            })
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "half sub-bg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "circle-color",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "gradient-circle"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "gradient-circle two"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesHeader);

/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const SkillsCircle = ({
  from,
  theme
}) => {
  const cpStyle = {
    path: {
      stroke: "rgb(18, 194, 233)"
    },
    trail: {
      stroke: theme ? theme == "dark" ? "#0f1013" : "#e5e5e5" : ""
    },
    text: {
      fill: theme ? theme == "dark" ? "#ffffff" : "#4e4e4e" : "",
      // Text size
      fontSize: "16px"
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: `skills-circle pt-50 pb-50 ${from ? from === "aboutPage" ? "sub-bg" : "" : ""}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "item wow fadeInLeft",
                  "data-wow-delay": ".6",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "skill",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                      value: 90,
                      strokeWidth: 2,
                      text: `${90}%`,
                      styles: cpStyle
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cont",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "Project"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                      children: "Consulting"
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "item wow fadeInLeft",
                  "data-wow-delay": ".3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "skill",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                      value: 75,
                      strokeWidth: 2,
                      text: `${75}%`,
                      styles: cpStyle
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cont",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "App"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                      children: "Development"
                    })]
                  })]
                })
              })]
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillsCircle);

/***/ }),

/***/ 7397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ team)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = () => {
  let teamSection = document.querySelector(".team-crv");

  if (teamSection) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > teamSection.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);
// EXTERNAL MODULE: ./src/common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(850);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"f":[{"id":1,"image":"/img/staff.png","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/staff1.png","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/staff2.png","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/staff3.png","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Team/team.jsx
/* eslint-disable @next/next/no-img-element */







const Team = () => {
  external_react_default().useEffect(() => {
    common_teamSkillsProgress();
    setTimeout(() => {
      (0,tooltipEffect/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "team-crv section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content wow fadeInUp md-mb30",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "sub-title",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Our Staff"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "co-tit mb-15",
              children: "We help to create visual strategies."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Our network of consultants is always growing and our leadership team focuses on nurturing and managing our people. In addition, leaders curate the project teams to ensure a seamless fit within a client\u2019s organisation as well as designing bespoke solutions that solve their individual challenges.."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "skills-box mt-40",
              children: team_namespaceObject.n.map(skill => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "custom-font",
                  children: skill.text
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": skill.value
                  })
                })]
              }, skill.id))
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 offset-lg-1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img-box",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-sm-6 toright",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "full-width",
                  children: team_namespaceObject.f.slice(0, 2).map((team, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(0, 2).length ? "mb-30" : null}`,
                      "data-tooltip-tit": team.title,
                      "data-tooltip-sub": team.sub,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: team.image,
                        alt: "",
                        className: "imago wow"
                      })
                    })
                  }, team.id))
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-sm-6 toleft valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "full-width text-left",
                  children: team_namespaceObject.f.slice(2, 4).map((team, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(2, 4).length ? "mb-30" : null}`,
                      "data-tooltip-tit": team.title,
                      "data-tooltip-sub": team.sub,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: team.image,
                        alt: "",
                        className: "imago wow"
                      })
                    })
                  }, team.id))
                })
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const team = (Team);

/***/ }),

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */









const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "block-sec",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "background bg-img pt-100 pb-0 parallaxie",
      style: {
        backgroundImage: `url(/img/bg-vid.jpg)`
      },
      "data-overlay-dark": "5",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "vid-area",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "text",
                children: "Watch Video"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "vid-icon",
                children: [ false && /*#__PURE__*/0, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  className: "vid",
                  onClick: e => {
                    e.preventDefault();
                    setOpen(true);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "vid-butn",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                      className: "icon",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                        className: "fas fa-play"
                      })
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-5 offset-lg-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "testim-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "head-box",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                  className: "wow fadeIn",
                  "data-wow-delay": ".5s",
                  children: "Our Clients"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                  className: "wow fadeInLeft",
                  "data-wow-delay": ".5s",
                  children: "What Client's Say?"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
                className: "slic-item wow fadeInUp",
                "data-wow-delay": ".5s",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "img-box",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "cont",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "author",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                          className: "author-name ",
                          children: "Alex Regelman"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: "author-details",
                          children: "Co-founder, Colabrio"
                        })]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "img-box",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                          src: "/img/clients/2.jpg",
                          alt: ""
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "cont",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "author",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                          className: "author-name ",
                          children: "Alex Regelman"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: "author-details",
                          children: "Co-founder, Colabrio"
                        })]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "img-box",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                          src: "/img/clients/3.jpg",
                          alt: ""
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "cont",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "author",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                          className: "author-name ",
                          children: "Alex Regelman"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: "author-details",
                          children: "Co-founder, Colabrio"
                        })]
                      })
                    })]
                  })]
                })]
              }))]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoWithTestimonials);

/***/ })

};
;
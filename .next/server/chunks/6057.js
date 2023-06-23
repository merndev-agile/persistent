"use strict";
exports.id = 6057;
exports.ids = [6057];
exports.modules = {

/***/ 2067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */





const BlogStanderd = ({
  blogs
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: "blog-pg section-padding pt-0",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-11",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "posts",
            children: [blogs.map((blogItem, index) => {
              var _blogItem$sys, _blogItem$sys2, _blogItem$fields, _blogItem$fields$imag, _blogItem$fields$imag2, _blogItem$fields$imag3, _blogItem$fields2, _blogItem$fields3, _blogItem$sys3, _blogItem$fields4, _blogItem$fields5, _blogItem$sys4;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: `item ${index === blogs.length - 1 ? "" : "mb-80"}`,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: {
                    pathname: `/blog-details`,
                    query: {
                      id: blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$sys2 = blogItem.sys) === null || _blogItem$sys2 === void 0 ? void 0 : _blogItem$sys2.id
                    }
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "img",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                      src: blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$fields = blogItem.fields) === null || _blogItem$fields === void 0 ? void 0 : (_blogItem$fields$imag = _blogItem$fields.image) === null || _blogItem$fields$imag === void 0 ? void 0 : (_blogItem$fields$imag2 = _blogItem$fields$imag.fields) === null || _blogItem$fields$imag2 === void 0 ? void 0 : (_blogItem$fields$imag3 = _blogItem$fields$imag2.file) === null || _blogItem$fields$imag3 === void 0 ? void 0 : _blogItem$fields$imag3.url,
                      alt: "",
                      style: {
                        height: "480px"
                      }
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "content",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "col-10",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "tags",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                          className: "num",
                          children: ["SERVICE : \xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                            style: {
                              color: "#EE3E59"
                            },
                            children: blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$fields2 = blogItem.fields) === null || _blogItem$fields2 === void 0 ? void 0 : _blogItem$fields2.serviceTag
                          })]
                        }), "\xA0 \xA0 \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                          children: ["INDUSTRY : \xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                            style: {
                              color: "#EE3E59"
                            },
                            children: blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$fields3 = blogItem.fields) === null || _blogItem$fields3 === void 0 ? void 0 : _blogItem$fields3.industryTag
                          })]
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
                        className: "title",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                          href: {
                            pathname: `/blog-details`,
                            query: {
                              id: blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$sys3 = blogItem.sys) === null || _blogItem$sys3 === void 0 ? void 0 : _blogItem$sys3.id
                            }
                          },
                          children: blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$fields4 = blogItem.fields) === null || _blogItem$fields4 === void 0 ? void 0 : _blogItem$fields4.title
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                        children: `${blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$fields5 = blogItem.fields) === null || _blogItem$fields5 === void 0 ? void 0 : _blogItem$fields5.summary}  [...........................]`
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: {
                          pathname: `/blog-details`,
                          query: {
                            id: blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$sys4 = blogItem.sys) === null || _blogItem$sys4 === void 0 ? void 0 : _blogItem$sys4.id
                          }
                        },
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                          className: "butn bord curve mt-30",
                          children: "Read More"
                        })
                      })]
                    })
                  })
                })]
              }, blogItem === null || blogItem === void 0 ? void 0 : (_blogItem$sys = blogItem.sys) === null || _blogItem$sys === void 0 ? void 0 : _blogItem$sys.id);
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "pagination",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: "active",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: `/blog`,
                  children: "1"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: `/blog`,
                  children: "2"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: `/blog`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                      className: "fas fa-angle-right"
                    })
                  })
                })
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogStanderd);

/***/ }),

/***/ 1527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const PageHeader = ({
  title,
  paragraph,
  className
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
    className: `page-header ${className && className}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-7 col-md-9",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cont text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
              className: "mb-10 color-font",
              children: title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              children: paragraph
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ 9577:
/***/ ((module) => {

module.exports = [];

/***/ })

};
;
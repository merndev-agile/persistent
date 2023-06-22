"use strict";
exports.id = 2572;
exports.ids = [2572];
exports.modules = {

/***/ 2572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7225);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* eslint-disable @next/next/no-img-element */









const BlogDetails = ({
  theme = "dark"
}) => {
  var _singleBlog$image, _singleBlog$image$fie, _singleBlog$image$fie2, _singleBlog$heading1L, _singleBlog$heading2L, _singleBlog$heading3L;

  const messageRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const [blogs, setBlogs] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const [singleBlog, setSingleBlog] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    id
  } = router.query;

  function validateEmail(value) {
    let error;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  } // /img/blog/single.jpg
  // const loaderImage = "blog/single.jpg";
  // const blogImage = image || loaderImage;


  const sendMessage = ms => new Promise(r => setTimeout(r, ms));

  const client = contentful__WEBPACK_IMPORTED_MODULE_4__.createClient({
    space: "7tsoua37infy",
    accessToken: "S7Hu2wy-w4NZClRg1W1lduJwqVWSpVbYN3O-gfVESZ0"
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then(Entries => {
          console.log(Entries === null || Entries === void 0 ? void 0 : Entries.items);
          setBlogs(Entries === null || Entries === void 0 ? void 0 : Entries.items);
        });
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getAllEntries();
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    // Find the blog entry based on sys.id
    const findBlog = blogs.find(blog => blog.sys.id === id);

    if (findBlog) {
      // Extract the desired field value from the blog entry
      const fieldValue = findBlog === null || findBlog === void 0 ? void 0 : findBlog.fields; // Update the singleBlog state with the extracted value

      setSingleBlog(fieldValue);
    }
  }, [blogs]);
  const loaderImage = "blog/single.jpg";
  const blogImage = (singleBlog === null || singleBlog === void 0 ? void 0 : (_singleBlog$image = singleBlog.image) === null || _singleBlog$image === void 0 ? void 0 : (_singleBlog$image$fie = _singleBlog$image.fields) === null || _singleBlog$image$fie === void 0 ? void 0 : (_singleBlog$image$fie2 = _singleBlog$image$fie.file) === null || _singleBlog$image$fie2 === void 0 ? void 0 : _singleBlog$image$fie2.url) || loaderImage;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
    className: "blog-pg single section-padding pt-0",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "col-lg-11",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "post",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "img",
              children: blogImage === loaderImage ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: `/img/${blogImage}`,
                alt: ""
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: blogImage,
                alt: ""
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "content pt-60",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "col-lg-10",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "cont",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h4", {
                      className: "extra-title",
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.title
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "spacial",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                        children: singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.postContent
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
                      children: ["-", singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading1, "."]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading1Paragraph
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : (_singleBlog$heading1L = singleBlog.heading1List) === null || _singleBlog$heading1L === void 0 ? void 0 : _singleBlog$heading1L.map((list, idx) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                          value: idx,
                          style: {
                            listStyleType: "square"
                          },
                          children: [list, "."]
                        }, idx);
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
                      children: ["-", singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading2, "."]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading2Paragraph
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : (_singleBlog$heading2L = singleBlog.heading2List) === null || _singleBlog$heading2L === void 0 ? void 0 : _singleBlog$heading2L.map((list, idx) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                          style: {
                            listStyleType: "square"
                          },
                          children: [list, "."]
                        }, idx);
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
                      children: ["-", singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading3, "."]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading3Paragraph
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : (_singleBlog$heading3L = singleBlog.heading3List) === null || _singleBlog$heading3L === void 0 ? void 0 : _singleBlog$heading3L.map((list, idx) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                          style: {
                            listStyleType: "square"
                          },
                          children: [list, "."]
                        }, idx);
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
                      children: ["-", singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading4, "."]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      children: singleBlog === null || singleBlog === void 0 ? void 0 : singleBlog.heading4Paragraph
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "quotes text-center",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                        children: "Never ever think of giving up. Winners never quit and quitters never win. Take all negative words out of your mental dictionary and focus on the solutions with utmost conviction and patience. The battle is never lost until you\u2019ve abandon your vision."
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                          className: "mb-10",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                            src: "/img/motivation.jpg",
                            alt: ""
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                          className: "mb-10",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                            src: "/img/motivation3.jpg",
                            alt: ""
                          })
                        })
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                      children: "We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a calendar for the year. Sure, you can\u2019t know every detail to anticipate. Heck, you can\u2019t know half the priorities that will pop up in any particular month. But you can plan for big picture seasonality, busy-times, and events."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "share-info",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "social",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                            className: "fab fa-facebook-f"
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                            className: "fab fa-twitter"
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                            className: "fab fa-behance"
                          })
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "tags",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: "Web"
                        }), ",", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: "Themeforest"
                        }), ",", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: "ThemesCamp"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "author",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "author-img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                        src: "/img/blog/01.jpg",
                        alt: ""
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "info",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h6", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                          children: "author :"
                        }), " Jorden Griffin"]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                        children: "the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment."
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "social",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                            className: "fab fa-facebook-f"
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                            className: "fab fa-twitter"
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "#0",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                            className: "fab fa-behance"
                          })
                        })]
                      })]
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "pagination",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  href: "#0",
                  children: "Prev Post"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                className: "icon",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: `/blog`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                      className: "fas fa-th-large"
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                className: "text-right",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  href: "#0",
                  children: "Next Post"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "comments-area",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
                children: "Comments :"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "comment-img",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                    src: "/img/blog/01.jpg",
                    alt: ""
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h6", {
                    children: ["Jorden Griffin - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                      children: " 6 Aug 2022"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                    className: "replay",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {
                      to: "comment-form",
                      spy: true,
                      smooth: true,
                      offset: -150,
                      duration: 500,
                      children: ["Replay ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                        className: "fas fa-reply"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    children: "the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment."
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "item relped",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "comment-img",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                    src: "/img/blog/01.jpg",
                    alt: ""
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h6", {
                    children: ["Jorden Griffin - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                      children: " 6 Aug 2022"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                    className: "replay",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {
                      to: "comment-form",
                      spy: true,
                      smooth: true,
                      offset: -150,
                      duration: 500,
                      children: ["Replay ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                        className: "fas fa-reply"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    children: "the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment."
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "comment-img",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                    src: "/img/blog/01.jpg",
                    alt: ""
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h6", {
                    children: ["Jorden Griffin - ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                      children: " 6 Aug 2022"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                    className: "replay",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {
                      to: "comment-form",
                      spy: true,
                      smooth: true,
                      offset: -150,
                      duration: 500,
                      children: ["Replay ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                        className: "fas fa-reply"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    children: "the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment."
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "comment-form",
              id: "comment-form",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
                children: "Add Comment :"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "form",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                  initialValues: {
                    name: "",
                    email: "",
                    comment: ""
                  },
                  onSubmit: async values => {
                    await sendMessage(500);
                    alert(JSON.stringify(values, null, 2)); // Reset the values

                    values.name = "";
                    values.email = "";
                    values.comment = "";
                  },
                  children: ({
                    errors,
                    touched
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                          className: "form-group",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                            as: "textarea",
                            placeholder: "Your Comment",
                            name: "comment"
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                          className: "form-group",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                            type: "text",
                            placeholder: "Your Name",
                            name: "name"
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                            type: "email",
                            validate: validateEmail,
                            placeholder: "Your Email",
                            name: "email"
                          }), errors.email && touched.email && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                            children: errors.email
                          })]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                          className: "form-group text-center",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
                            type: "submit",
                            className: `nb butn ${theme ? theme === "light" ? "dark" : "" : "light"} curve full-width`,
                            children: "Comment"
                          })
                        })
                      })]
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetails);

/***/ })

};
;
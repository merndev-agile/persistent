"use strict";
exports.id = 3092;
exports.ids = [3092];
exports.modules = {

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_form)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/data/sections/form-info.json
const form_info_namespaceObject = JSON.parse('{"TN":"Let\'s Talk.","Do":"enquiries@ProminenceConsulting.com.au","m7":"07 3170 3766","xh":{"Ps":"SUITE 909,","E0":"55 RAILWAY TERRACE,","EA":"MILTON,","ox":"QLD, 4064,","sm":"AUSTRALIA."}}');
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Contact-form/contact-form.jsx







const ContactForm = () => {
  const messageRef = external_react_default().useRef(null);

  function validateEmail(value) {
    let error;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  const slackURL = "https://hooks.zapier.com/hooks/catch/15658711/3h8e7vl/"; // Function to send registration data to Zapier webhook

  const sendRegistrationDataToSlack = async data => {
    try {
      let postData = JSON.stringify({
        "contact": {
          "name": data === null || data === void 0 ? void 0 : data.name,
          "email": data === null || data === void 0 ? void 0 : data.email,
          "messgae": data === null || data === void 0 ? void 0 : data.messgae
        }
      });
      let response = await external_axios_default().post(slackURL, postData);
      console.log(response);
      console.log("Registration data sent to Zapier");
    } catch (error) {
      console.error("Error sending registration data to Zapier:", error);
    }
  };

  const sendMessage = ms => new Promise(r => setTimeout(r, ms));

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "contact section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "fw-700 color-font mb-50",
              children: "Get In Touch."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
              initialValues: {
                name: "",
                email: "",
                message: ""
              },
              onSubmit: async values => {
                console.log("values", values); // Send registration data to Zapier

                await sendRegistrationDataToSlack(values);
                await sendMessage(500);
                alert(JSON.stringify(values, null, 2)); // show message

                messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon."; // Reset the values

                values.name = "";
                values.email = "";
                values.message = ""; // clear message

                setTimeout(() => {
                  messageRef.current.innerText = "";
                }, 2000);
              },
              children: ({
                errors,
                touched
              }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
                id: "contact-form",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "messages",
                  ref: messageRef
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "controls",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      id: "form_name",
                      type: "text",
                      name: "name",
                      placeholder: "Name",
                      required: "required"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                      validate: validateEmail,
                      id: "form_email",
                      type: "email",
                      name: "email",
                      placeholder: "Email"
                    }), errors.email && touched.email && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: errors.email
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "form-group",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                    as: "textarea",
                    id: "form_message",
                    name: "message",
                    placeholder: "Message",
                    rows: "4",
                    required: "required"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "submit",
                  className: "butn bord",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Send Message"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 offset-lg-1",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cont-info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "fw-700 color-font mb-50",
              children: "Contact Info."
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow",
              "data-splitting": true,
              children: form_info_namespaceObject.TN
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item mb-40",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#0",
                  children: form_info_namespaceObject.Do
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: form_info_namespaceObject.m7
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow",
              "data-splitting": true,
              children: "Visit Us."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                children: [form_info_namespaceObject.xh.Ps, /*#__PURE__*/jsx_runtime_.jsx("br", {}), form_info_namespaceObject.xh.E0, /*#__PURE__*/jsx_runtime_.jsx("br", {}), form_info_namespaceObject.xh.EA, /*#__PURE__*/jsx_runtime_.jsx("br", {}), form_info_namespaceObject.xh.ox, /*#__PURE__*/jsx_runtime_.jsx("br", {}), form_info_namespaceObject.xh.sm]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "social mt-50",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-facebook-f"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-twitter"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-pinterest"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "fab fa-behance"
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const contact_form = (ContactForm);

/***/ }),

/***/ 493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/config/particle-config.js
const particlesConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
/* harmony default export */ const particle_config = (particlesConfig);
;// CONCATENATED MODULE: ./src/config/pr-s-black.js
const particlesBlackConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
/* harmony default export */ const pr_s_black = (particlesBlackConfig);
// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
;// CONCATENATED MODULE: ./src/data/sections/contact-header.json
const contact_header_namespaceObject = JSON.parse('{"T":{"P":"Let\'s talk","E":"about your project."},"k":"Feel free to ask me any question or let’s do to talk about our future collaboration."}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Contact-header/contact-header.jsx








const ContactHeader = ({
  sliderRef,
  blackStar
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    ref: sliderRef,
    className: "pages-header circle-bg valign position-re",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-9 col-md-11",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "capt",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
                className: "color-font mb-10 fw-700",
                children: [contact_header_namespaceObject.T.P, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), contact_header_namespaceObject.T.E]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: contact_header_namespaceObject.k
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_tsparticles_default()), {
      id: "particles-js",
      options: blackStar ? pr_s_black : particle_config
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "circle-color",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "gradient-circle"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "gradient-circle two"
      })]
    })]
  });
};

/* harmony default export */ const contact_header = (ContactHeader);

/***/ })

};
;
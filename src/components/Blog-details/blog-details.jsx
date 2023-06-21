/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";
import * as contentful from "contentful";
import { useRouter } from "next/router";
const BlogDetails = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  const [blogs, setBlogs] = React.useState([]);
  const [singleBlog, setSingleBlog] = React.useState(null);

  const router = useRouter();
  const { id } = router.query;

  console.log("id", id);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  // /img/blog/single.jpg
  // const loaderImage = "blog/single.jpg";
  // const blogImage = image || loaderImage;
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  const client = contentful.createClient({
    space: "7tsoua37infy",
    accessToken: "S7Hu2wy-w4NZClRg1W1lduJwqVWSpVbYN3O-gfVESZ0",
  });

  React.useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((Entries) => {
          console.log(Entries?.items);
          setBlogs(Entries?.items);
        });
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getAllEntries();
  }, []);
  React.useEffect(() => {
    // Find the blog entry based on sys.id
    const findBlog = blogs.find((blog) => blog.sys.id === id);

    if (findBlog) {
      // Extract the desired field value from the blog entry
      const fieldValue = findBlog?.fields;

      // Update the singleBlog state with the extracted value
      setSingleBlog(fieldValue);
    }
  }, [blogs]);
  console.log(
    "setSingleBlog",
    singleBlog,
    singleBlog?.image?.fields?.file?.url
  );
  const loaderImage = "blog/single.jpg";
  const blogImage = singleBlog?.image?.fields?.file?.url || loaderImage;
  console.log("blogImage: " + blogImage);

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                {blogImage === loaderImage ? (
                  <img src={`/img/${blogImage}`} alt="" />
                ) : (
                  <img src={blogImage} alt="" />
                )}
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">{singleBlog?.title}</h4>
                      <div className="spacial">
                        <p>{singleBlog?.postContent}</p>
                      </div>

                      <h5>-{singleBlog?.heading1}.</h5>

                      <p>{singleBlog?.heading1Paragraph}</p>
                      <ul>
                        {singleBlog?.heading1List?.map((list, idx) => {
                          return (
                            <li value={idx} style={{ listStyleType: "square" }}>
                              {/* <span>{idx}</span>  */}
                              {list}.
                            </li>
                          );
                        })}
                      </ul>

                      <h5>-{singleBlog?.heading2}.</h5>

                      <p>{singleBlog?.heading2Paragraph}</p>
                      <ul>
                        {singleBlog?.heading2List?.map((list, idx) => {
                          return (
                            <li style={{ listStyleType: "square" }}>
                              {/* <span>{idx}</span>  */}
                              {list}.
                            </li>
                          );
                        })}
                      </ul>

                      <h5>-{singleBlog?.heading3}.</h5>

                      <p>{singleBlog?.heading3Paragraph}</p>
                      <ul>
                        {singleBlog?.heading3List?.map((list, idx) => {
                          return (
                            <li style={{ listStyleType: "square" }}>
                              {/* <span>{idx}</span>  */}
                              {list}.
                            </li>
                          );
                        })}
                      </ul>

                      <h5>-{singleBlog?.heading4}.</h5>

                      <p>{singleBlog?.heading4Paragraph}</p>

                      <div className="quotes text-center">
                        <p>
                          Never ever think of giving up. Winners never quit and
                          quitters never win. Take all negative words out of
                          your mental dictionary and focus on the solutions with
                          utmost conviction and patience. The battle is never
                          lost until you’ve abandon your vision.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/motivation.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/motivation3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        We all intend to plan ahead, but too often let the
                        day-to-day minutia get in the way of making a calendar
                        for the year. Sure, you can’t know every detail to
                        anticipate. Heck, you can’t know half the priorities
                        that will pop up in any particular month. But you can
                        plan for big picture seasonality, busy-times, and
                        events.
                      </p>
                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                          <a href="#0">ThemesCamp</a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Jorden Griffin
                        </h6>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing. The main compont
                          of a healthy environment.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href={`/blog`}>
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>

              <div className="comments-area">
                <h5>Comments :</h5>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form" id="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendMessage(500);
                      alert(JSON.stringify(values, null, 2));
                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-center">
                              <button
                                type="submit"
                                className={`nb butn ${
                                  theme
                                    ? theme === "light"
                                      ? "dark"
                                      : ""
                                    : "light"
                                } curve full-width`}
                              >
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;

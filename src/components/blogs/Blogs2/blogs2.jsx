/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Blogs2 = () => {
  const router = useRouter();
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Get The Latest News</h6>
              <h3>What Our Trending News.</h3>
              <p>
                We provide company and finance service for startups and company
                business.
              </p>
              <Link href="/blog">
                <a>
                  <span>More Blog Posts</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="img\furniture.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog">
                      <a className="date">
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    {/* <Link href="/blog-details"> */}
                    <Link
                      href={{
                        pathname: "/blog-details",
                        query: { img: "furniture.png" },
                      }}
                    >
                      <a>
                        How to use solid color combine with simple furnitures.
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="img\furniture1.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog">
                      <a className="date">
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    {/* <Link href="/blog-details"> */}
                    <Link
                      href={{
                        pathname: "/blog-details",
                        query: { img: "furniture1.png" },
                      }}
                    >
                      <a>
                        How to use solid color combine with simple furnitures.
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="img\furniture2.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog" quer>
                      <a className="date">
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    {/* <Link href="/blog-details"> */}
                    <Link
                      href={{
                        pathname: "/blog-details",
                        query: { img: "furniture2.png" },
                      }}
                    >
                      <a>
                        How to use solid color combine with simple furnitures.
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;

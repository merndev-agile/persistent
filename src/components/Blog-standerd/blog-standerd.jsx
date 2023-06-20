/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {BlogDetails} from "../Blog-details/blog-details"

const BlogStanderd = ({ blogs }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem?.sys?.id}
                >
                  <Link href={`/blog-details/blog-details-dark`}>
                    <div className="img" style={{ height: "auto" }}>
                      {/* <a> */}
                      <img
                        src={blogItem?.fields?.image?.fields?.file?.url}
                        alt=""
                        style={{
                          backgroundPosition: "center",
                          width: " 100%",
                          backgroundSize: "cover",
                        }}
                      />
                      {/* </a> */}
                    </div>
                  </Link>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        {/* <Link href={`/blog/blog-dark`}>
                          <a className="date">
                             <span className="num">SERVICE: {blogItem?.fields?.serviceTag}</span>
                            <span>INDUSTRY: {blogItem?.fields?.industryTag}</span>
                          </a>
                        </Link> */}
                        <div className="tags">
                          <span className="num">
                            SERVICE : &nbsp;
                            <span style={{color:"#EE3E59"}}>{blogItem?.fields?.serviceTag}</span>
                          </span>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          <span>
                            INDUSTRY : &nbsp;
                            <span  style={{color:"#EE3E59"}}>{blogItem?.fields?.industryTag}</span>
                          </span>
                          {/* // {blogItem.tags.map((tag, index) => (
                           // <Link key={index} href="/blog/blog-dark">
                             // {tag}
                           // </Link>
                          ))} */}
                        </div>
                        <h4 className="title">
                          <Link href={`/blog-details/blog-details-dark`}>
                            {blogItem?.fields?.title}
                          </Link>
                        </h4>
                        <p>{`${blogItem?.fields?.summary}  [...........................]`}</p>
                        <Link href={`/blog-details/blog-details-dark`}>
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                // console.log("blogItem",blogItem?.fields,blogItem?.fields?.title)
              ))}
              <div className="pagination">
                <span className="active">
                  <Link href={`/blog/blog-dark`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;

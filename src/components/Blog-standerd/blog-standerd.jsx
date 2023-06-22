/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

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
                  <Link href={`/blog-details`} > 
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
                        {/* <Link href={`/blog`}>
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
                           // <Link key={index} href="/blog">
                             // {tag}
                           // </Link>
                          ))} */}
                        </div>
                        <h4 className="title">
                          <Link href={`/blog-details`}>
                            {blogItem?.fields?.title}
                          </Link>
                        </h4>
                        <p>{`${blogItem?.fields?.summary}  [...........................]`}</p>
                        <Link href={{pathname:`/blog-details` , query: {id: blogItem?.sys?.id}}}>
                          {/*  <Link href={{ pathname: '/destination', query: { id } }}> */}
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
                  <Link href={`/blog`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog`}>
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

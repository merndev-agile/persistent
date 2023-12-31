import React, { useEffect, useState } from "react";
import blog1Data from "../../data/blog1.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogStanderd from "../../components/Blog-standerd/blog-standerd";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

import * as contentful from "contentful";

const BlogDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [blogs, setBlogs] = useState([]);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
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

  const client = contentful.createClient({
    space: "7tsoua37infy",
    accessToken: "S7Hu2wy-w4NZClRg1W1lduJwqVWSpVbYN3O-gfVESZ0",
  });

  React.useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((Entries) => {
          console.log(Entries?.items);
          setBlogs(Entries?.items)
        });
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="Our Blogs."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogStanderd blogs={blogs} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDark;

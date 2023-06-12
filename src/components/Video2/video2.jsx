import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Video2 = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section
      className="video bg-img parallaxie"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
      }}
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
      <div className="container">
        <div className="stauts">
          <div className="item">
            <h4>
              3<span>K</span> +
            </h4>
            <h6>Happy Clients</h6>
          </div>
          <div className="item">
            <h4>
              14<span>K</span> +
            </h4>
            <h6>Success Projects</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video2;

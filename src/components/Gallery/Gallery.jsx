import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Gallery.scss";

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const angleRight = <FontAwesomeIcon icon={faAngleRight} />;

const Gallery = (props) => {
  const containerRef =useRef() ;
  const [slideIdx, setSlideIdx] = useState(0);
  const imgSize = () => {
   
    const slideshowImg = containerRef.current;
    if (!slideshowImg) {
      return 0;
    }
    
    return slideshowImg.clientWidth;
  };

  const onNext = () => {
    if (slideIdx === props.img.length - 1) {
      setSlideIdx(0);
    } else {
      setSlideIdx(slideIdx + 1);
    }
  };

  const onPrev = () => {
    if (slideIdx === 0) {
      setSlideIdx(props.img.length - 1);
    } else {
      setSlideIdx(slideIdx - 1);
    }
  };

  return (
    <div
      className={
        props.img.length > 1 ? "slideshow" : "slideshow slidershowOnly"
      }
    >
      <div
        ref={containerRef}
        className="slideshow_container"
        style={{ transform: `translateX(-${slideIdx * imgSize()}px)` }}
      >
        {props.img.map((picture, i) => (
          <img
            className="slideshow_container_img"
            alt="banniere-page-logement"
            src={picture}
            key={i}
          />
        ))}
      </div>

      {props.img.length > 1 && (
        <>
          <div className="slideshow_controls">
            <i className="slideshow_controls_chevron" onClick={onPrev}>
              {angleLeft}
            </i>
            <i className="slideshow_controls_chevron" onClick={onNext}>
              {angleRight}
            </i>
          </div>
          <div className="slideshow_idx">
            {slideIdx + 1} / {props.img.length}
          </div>
        </>
      )}
      
    </div>
  );
};

export default Gallery;

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  const [openTab, setOpenTab] = useState(false);

  const openTabHandler = () => {
    setOpenTab((openTab) => !openTab);
  };

  return (
    <>
      <div onClick={openTabHandler} className={`collapse_header ${openTab ? 'open':""}`}>
        <h2 className="collapse_header_title">{title}</h2>
        <FontAwesomeIcon icon={openTab ? faAngleUp : faAngleDown} className="collapse_header_icon" />
      </div>
      {openTab && <div className="collapse_content">{content}</div>}
    </>
  );
};

export default Collapse;
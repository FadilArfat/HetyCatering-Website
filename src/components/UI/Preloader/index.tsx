import React from "react";
import ReactDOM from "react-dom";
import Loader from "@/assets/img/Infinity@1x-1.2s-200px-200px.gif";

const portalElement = document.getElementById("overlays") as HTMLElement;

const Preloader = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div id="preloader" className="preloader">
          <div id="precontent" className="preloader-content">
            <img src={Loader} alt="preloader" width="85rem" />
          </div>
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Preloader;

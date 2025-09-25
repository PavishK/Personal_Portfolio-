
import React, { useEffect, useState } from "react";
import "./index.css";

export default function Popup() {

  const handleRedirect = () => {
    window.location.href = "https://pavishk.dev";
  };

  useEffect(()=>{
    setTimeout(()=>handleRedirect(),2500);
  },[])


  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>⚠️ Website Notice</h2>
        <p>This website is no longer available. Please move to my new website.</p>
        <div className="popup-actions">
          <button className="btn-primary" onClick={handleRedirect}>
            Go to pavishk.dev
          </button>
        </div>
        <div className="redirect-div">
          <div className="redirect-loader"></div>
          <span>redirecting to pavishk.dev</span>
        </div>
      </div>
    </div>
  );
}

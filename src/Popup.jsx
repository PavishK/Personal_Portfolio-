
import React, { useState } from "react";
import "./index.css";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleRedirect = () => {
    window.location.href = "https://my-portfolio-six-blond-8uma4k9cc7.vercel.app/"; // replace with your new website
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>⚠️ Website Notice</h2>
        <p>This website is no longer available. Please move to my new website.</p>
        <div className="popup-actions">
          <button className="btn-primary" onClick={handleRedirect}>
            Go to New Website
          </button>
          <button className="btn-secondary" onClick={() => setShowPopup(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

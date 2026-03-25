import React from "react";
import "./RatingBadge.css";

export default function RatingBadge() {
  return (
    <div className="rating-badge">
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google"
        className="logo"
      />

      <div className="stars">
        {"★★★★★"}
      </div>

      <span className="text">
        <strong>5/5</strong> — Recommandé par nos clients
      </span>
    </div>
  );
}

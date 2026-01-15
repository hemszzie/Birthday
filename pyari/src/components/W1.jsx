import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const W1 = () => {

  // ONLY 3 IMAGES
  const photos = [
    "/images/v1.jpeg",
    "/images/v2.jpeg",
    "/images/v3.jpeg"
  ];

  return (
    <div className="st-wrapper">

      {/* Upside Down Layers */}
      <div className="vines"></div>
      <img src="/images/demogorgon.png" className="evil-shadow" />
      <div className="lightning"></div>

      {/* Title */}
      <h1 className="st-title glitch">
        HAPPY BIRTHDAY VARSHHHH
      </h1>

      {/* Subtitle */}
      <p className="st-sub">
        “Always wanted to tell you,
        you’re the BEST thing in the entire<br /> world even if its Upside Down.”
      </p>

      {/* Large Hero Image */}
      <div className="st-hero-box">
        <img src="/images/poster.png" className="st-hero-img" />
      </div>

      {/* Gallery (NO animation) */}
      <div className="st-gallery st-gallery-3">
        {photos.map((p, i) => (
          <div className="st-card" key={i}>
            <img src={p} className="st-img" />
          </div>
        ))}
      </div>

      {/* Quote */}
      <p className="st-quote typewriter">
        “In every universe, every timeline,
         I'd still choose you, Varshhhh.”
      </p>

      {/* Button */}
       <Link to="/w2" className="st-btn">
        Read lady whistledowns letter →
       </Link>
    </div>
  );
};

export default W1;

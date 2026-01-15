import React from "react";
import "./Hero.css";

const W2 = () => {

  return (
    <div className="whistle-wrapper">
      {/* Floral Arch Overlay */}
<div className="floral-top">
  <img src="/images/wisteria.png" alt="floral arch" />
</div>


      {/* Falling Petals */}
      <div className="petals">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="petal"></div>
        ))}
      </div>

      {/* Main Letter */}
      <div className="whistle-letter fade-in-scale">

        <h2 className="letter-title fade-drop">
          <br /><br /><br /><br /><br />
          Lady Whistledown’s
          <br />
          Society Papers
        </h2>

        <p className="letter-subtitle fade-soft">
          <em>Dearest Gentle Reader,</em>
        </p><br />

        <p className="letter-text typewriter">
          It is with great delight that this author presents the most
          delightful news of the season. Making a pact with destiny and
          <br />
          Today, society celebrates the birthday of the radiant and
          ever-charming <br /><span>Lady Varshhhh</span>.
          <br /><br />
          Her grace rivals the blooming wisteria, her kindness softens
          every heart it touches, and her presence brightens even the
          dullest of days. To all her new start in this year of life,
          may it be filled with endless joy, love, and prosperity.
          <br /><br />
          This author dares to declare that Lady Varshhhh is, indeed,
          the unrivaled jewel of this year’s social season.
          <br /><br />
          May her days be filled with romance, joy, prosperity,
          and the gentle warmth of everlasting happiness.
          <br /><br /><br />
          <em>Yours Truly,</em>
          <br />
          <strong>Lady Whistledown</strong> 🖋️
        </p>

      </div>
    </div>
  );
};

export default W2;



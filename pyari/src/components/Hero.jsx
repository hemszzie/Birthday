import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMusic } from "./MusicProvider";
import "./Hero.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      flavor: "BLACK COFFEE",
      title: "your daily dose of energy",
      desc: "Starting with your recent catch of obssession and blending this BIRTHDAY WISH with all your favorite themes and nationalising this song as oursss. I hope you like thisss. Enjoy your special day with a cup of black coffee, just like you - strong, bold, and full of flavor!",
      colors: ["#996F5B", "#722D1D"],
      main: "/images/mainblack.png",
      music: true,
    },
    {
      flavor: "HAPPY BIRTHDAY PYARI",
      title: "Ended teen perfectly!",
      desc: "Flashbacks are scary and yet memorable to look back at, from the first day of school to till date just can`t stop loving you. Happy Birthday Varshhhhh! ughhh how about STRANGER THINGS version?",
      colors: ["#b26cf2", "#9b4fe0"],
      main: "/images/varsha.jpeg",
      mybtn: "Ready to enter upside down?",
      mybtnLink: "/W1",
    },
  ];

  const [index, setIndex] = useState(0);
  const current = slides[index];
  const [c1, c2] = current.colors;

  // 🎵 USE GLOBAL MUSIC CONTEXT
  const { toggleMusic, isPlaying } = useMusic();

  // Slider controls
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const imageVariants = {
    hidden: { opacity: 0, rotate: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      rotate: -10,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      rotate: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <div
      className="hero"
      style={{
        background: `radial-gradient(circle,
          ${c1} 0%,
          ${c1} 20%,
          ${c2} 20%,
          ${c2} 40%,
          ${c1} 40%,
          ${c1} 60%,
          ${c2} 60%,
          ${c2} 85%,
          ${c1} 85%,
          ${c1} 100%
        )`,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.flavor}
          className="text-curve"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
        >
          <h2 className="flavor">{current.flavor}</h2>
          <h1 className="title">{current.title}</h1>
          <p className="desc">{current.desc}</p>

          {current.mybtn && (
            <Link to={current.mybtnLink} className="mybtn">
              {current.mybtn}
            </Link>
          )}

          {current.music && (
            <button className="music_btn" onClick={toggleMusic}>
              {isPlaying ? "Pause Music" : "Play Music"}
            </button>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.img
          key={current.main}
          src={current.main}
          alt={current.flavor}
          className="icecream"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>

      <div className="nav-arrows">
        <FiChevronLeft className="arrow left" onClick={prevSlide} />
        <FiChevronRight className="arrow right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Hero;

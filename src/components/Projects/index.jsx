import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/work1.png"
import work2 from "../../assets/Images/work2.png"
import work3 from "../../assets/Images/work34.png"
import work4 from "../../assets/Images/work4.png"
import work5 from "../../assets/Images/work5.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Postgram (Instagram Clone)",
      year: "2025",
      img: work1,
      title: "Social Media, Redesigned",
      link: "https://social-media-app-gilt-five.vercel.app/",
      github: "https://github.com/LavanyaChand/Social_media_app",
      detail: "Developed an interactive social media platform inspired by Instagram, enabling users to create, edit, like, and save posts, explore content, and view profiles, all within a modern, responsive, and engaging UI.",
    },
    {
      client: "Ultraverse NFT World",
      year: "2025",
      img: work5,
      title: "Step Into the Ultraverse of NFTs",
      link: "https://lavanya-internship.vercel.app/",
      github: "https://github.com/LavanyaChand/lavanya-internship",
      detail: "Developed a responsive website that transformed a static design into a dynamic application, integrating libraries like Axios, React Slick, and Animate on Scroll to enhance interactivity and user experience. Implemented version control with GitHub branches and pull requests to maintain clean, collaborative workflows.",
    },
    {
      client: "BingeBuddy (Movie Streaming Platform)",
      year: "2025",
      img: work2,
      title: "Lights, Camera, Movies!",
      link: "https://movie-streaming-platform-react.vercel.app/",
      github: "https://github.com/LavanyaChand/Movie_Streaming_Platform_React",
      detail: "Developed a movie streaming platform that lets users explore trending films, search by title, and watch official trailers, delivering a seamless and responsive viewing experience.",
    },
    {
      client: "Digital Library (E-Commerce Website)",
      year: "2025",
      img: work3,
      title: "Smart Library, Happy Readers",
      link: "https://librarybooks-beryl.vercel.app/",
      github: "https://github.com/LavanyaChand/Library",
      detail: "Developed an interactive library platform that allows users to browse collections, add or remove books from their cart, and enjoy a seamless, organized reading experience designed to make book discovery effortless.",
    },
    {
      client: "Treact Clone",
      year: "2025",
      img: work4,
      title: "Pixel-Perfect Treact Clone",
      link: "https://lavanyachand.github.io/Treact_Website/",
      github: "https://github.com/LavanyaChand/Treact_Website",
      detail: "Developed a responsive UI clone of the Treact website using HTML, CSS, and JavaScript. Recreated multiple sections including hero banners, pricing cards, testimonials, and service highlights with pixel-perfect layouts, clean design, and smooth navigation to demonstrate front-end development skills.",
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

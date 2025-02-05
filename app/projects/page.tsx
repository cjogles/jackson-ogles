"use client"
import { title } from "../_components/primitives";
import EmblaCarousel from '../_components/EmblaCarousel';
import '../../styles/base.css'
import '../../styles/embla.css'

const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function ProjectsPage() {
  return (
    <div className="mt-16">
      <h1 className={title({ class: ""})}>Freelance Experience</h1>
      {/* <h2 className="text-sky-800 text-xs mt-4 -mb-4"><a href="/resume.pdf" download="jackson_ogles_resume">P.S. Download my resume 📝</a></h2> */}
      <div className="mt-8">
        <EmblaCarousel slides={SLIDES} options={""} />
      </div>
    </div>
  );
}

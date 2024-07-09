"use client"
import { title } from "@/components/primitives";
import EmblaCarousel from '@/components/EmblaCarousel';
import '../../styles/base.css'
import '../../styles/embla.css'

const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title({ class: ""})}>Projects</h1>
      <h2 className="text-sky-800 text-xs mt-2 -mb-4"><a href="/resume.pdf" download="jackson_ogles_resume">P.S. Download my resume 📝</a></h2>
      <div className="mt-5">
        <EmblaCarousel slides={SLIDES} />
      </div>
    </div>
  );
}

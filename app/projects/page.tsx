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
      <h1 className={title()}>Projects</h1>
      <div className="mt-5">
        <EmblaCarousel slides={SLIDES} />
      </div>
    </div>
  );
}

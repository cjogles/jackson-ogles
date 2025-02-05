import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/image";
import NextImage from "next/image";

const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `translateX(${translate}%)`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax])

  const projects = [
    {
      url: 'https://www.cleansmarts.com/',
      snapshoturl: '/assets/projects/clean_smarts.png',
      alt: 'clean smarts freelance',
      title: `Clean Smarts`,
      description: 'Helped migrate WordPress front end to Vue, enhancing performance and maintainability.'
    },
    {
      url: 'https://boxcc-qiaaa-aaaan-qc7aq-cai.icp0.io/',
      snapshoturl: '/assets/projects/obsidian_tears.png',
      alt: 'obsidian tears videogame on blockchain',
      title: `OT Online RPG`,
      description: 'Refactored the front end implementing Tailwind CSS on React App.'
    },
    {
      url: 'https://lindyslocalpest.com/',
      snapshoturl: '/assets/projects/lindys.png',
      alt: 'lindys local pest control freelance',
      title: `Lindy's Local Pest Co`,
      description: 'Developed the company website using React, LESS, and React Router; deployed via Vercel from GitHub.'
    },
    {
      url: '/',
      snapshoturl: '/assets/projects/under-construction.jpg',
      alt: 'Next project coming soon!',
      title: `Next Project Coming Soon!`,
      description: 'Coming soon!'
    }
  ]

  return (
    <div className="embla relative flex items-center overflow-visible">
      <div className="embla__viewport overflow-visible relative flex items-center" ref={emblaRef}>
        <div className="embla__container">
        {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <p className='my-2 font-bold'>{projects[index].title}</p>
              <div className="embla__parallax">
                <div className="embla__parallax__layer flex flex-col h-carousel-card">
                <Link isExternal href={`${projects[index].url}`}>
                  <Image
                    as={NextImage}
                    priority={true}
                    width={400}
                    height={400}
                    src={`${projects[index].snapshoturl}`}
                    alt={`${projects[index].alt}`}
                    className="border embla__slide__img embla__parallax__img"
                  />
                </Link>
                <p className='mb-auto'>{projects[index].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls absolute left-2/3 sm:left-carousel-controls-left -top-10 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-between w-full -ml-10 sm:ml-4">
        <div className="embla__buttons flex justify-between w-full">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel

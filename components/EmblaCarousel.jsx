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
  }, [emblaApi, tweenParallax])

  const projects = [
    {
      url: 'https://lindyslocalpest.com/',
      snapshoturl: '/lindys.png',
      alt: 'lindys local pest control freelance',
      title: `Lindy's Local Pest Control Marketing Web Site`
    },
    {
      url: '/',
      snapshoturl: '/under-construction.jpg',
      alt: 'Project 2 Coming Soon!',
      title: `Project 2 Coming Soon!`
    },
    {
      url: '/',
      snapshoturl: '/under-construction.jpg',
      alt: 'Project 3 Coming Soon!',
      title: `Project 3 Coming Soon!`
    }
  ]

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ml-0">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <p>{projects[index].title}</p>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
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
                  {/* <img
                    className="embla__slide__img embla__parallax__img"
                    src={`${projects[index].snapshoturl}`}
                    alt={`${projects[index].alt}`}
                  /> */}
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel

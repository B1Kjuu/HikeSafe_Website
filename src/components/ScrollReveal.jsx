import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createElement } from 'react'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  as = 'div',
  innerAs = 'div',
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.08,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  randomize = true,
  randomOffsetY = [20, 80],
  randomRotation = [-6, 6]
}) => {
  const containerRef = useRef(null)
  const isString = typeof children === 'string'

  useEffect(() => {
    if (!isString) return
    const el = containerRef.current
    if (!el) return

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    )

    const wordElements = el.querySelectorAll('.word')

    // apply random initial states per word (offset, rotation, blur, opacity)
    if (randomize) {
      wordElements.forEach(w => {
        gsap.set(w, {
          y: gsap.utils.random(randomOffsetY[0], randomOffsetY[1]),
          rotation: gsap.utils.random(randomRotation[0], randomRotation[1]),
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${gsap.utils.random(blurStrength / 2, blurStrength)}px)` : 'none'
        })
      })
    } else {
      gsap.set(wordElements, { opacity: baseOpacity, filter: enableBlur ? `blur(${blurStrength}px)` : 'none' })
    }

    // animate words to neutral as they scroll into view
    gsap.to(wordElements, {
      y: 0,
      rotation: 0,
      opacity: 1,
      filter: 'blur(0px)',
      ease: 'power1.out',
      stagger: 0.04,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom-=20%',
        end: wordAnimationEnd,
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength])

  // If children is a string, split into word spans for per-word animation
  const splitChildren = typeof children === 'string'
    ? children.split(/(\s+)/).map((word, i) =>
        word.match(/^\s+$/) ? word : <span className="inline-block word" key={i}>{word}</span>
      )
    : children

  return createElement(as, { ref: containerRef, className: containerClassName },
    createElement(innerAs, { className: textClassName }, splitChildren)
  )
}

export default ScrollReveal

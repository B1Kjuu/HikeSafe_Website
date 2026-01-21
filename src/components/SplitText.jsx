import React, { useRef, useEffect } from 'react'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * SplitText component using `splitting` + GSAP ScrollTrigger.
 * Usage: <SplitText text="Hello world" split="chars" />
 */
export default function SplitText({
  text,
  split = 'chars',
  delay = 0.04,
  duration = 0.7,
  ease = 'power3.out',
  className = '',
  tag = 'p',
  triggerOnce = false,
  style = {}
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    // run splitting on the element
    const result = Splitting({ target: ref.current, by: split })[0]

    // determine targets
    let targets = result.chars || result.words || result.lines
    if (split === 'words' && result.words) targets = result.words
    if (split === 'lines' && result.lines) targets = result.lines

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          stagger: delay,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: triggerOnce ? 'play none none none' : 'play reverse play reverse'
          }
        }
      )
    }, ref)

    return () => {
      try { result?.revert?.() } catch (_) {}
      ctx.revert()
      // kill any ScrollTriggers on this element
      ScrollTrigger.getAll().forEach(st => { if (st.trigger === ref.current) st.kill() })
    }
  }, [text, split, delay, duration, ease, triggerOnce])

  const Tag = tag
  return (
    <Tag ref={ref} className={`split-parent ${className}`} style={style}>
      {text}
    </Tag>
  )
}

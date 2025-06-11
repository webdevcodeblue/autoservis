"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseInViewOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
  disabled?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.2, triggerOnce = true, rootMargin = "0px 0px -100px 0px", disabled = false } = options
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observer = useRef<IntersectionObserver>()

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setInView(true)
        if (triggerOnce && ref.current && observer.current) {
          observer.current.unobserve(ref.current)
        }
      } else if (!triggerOnce) {
        setInView(false)
      }
    },
    [triggerOnce],
  )

  useEffect(() => {
    // Disable animations on mobile for better performance
    if (disabled || (typeof window !== "undefined" && window.innerWidth < 768)) {
      setInView(true)
      return
    }

    if (!ref.current) return

    // Use passive observer for better performance
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    observer.current.observe(ref.current)

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [threshold, rootMargin, handleIntersection, disabled])

  return { ref, inView }
}

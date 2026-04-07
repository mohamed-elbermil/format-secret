import { useState, useEffect, useRef } from 'react'

/**
 * useCountUp — anime un compteur numérique au scroll.
 *
 * @param {number} target    Valeur finale
 * @param {number} duration  Durée de l'animation en ms (défaut : 2000)
 * @param {object} options   { threshold: 0–1, easing: 'easeOut' | 'linear' }
 * @returns {{ count: number, ref: React.RefObject }}
 *
 * Usage :
 *   const { count, ref } = useCountUp(95, 2000)
 *   return <span ref={ref}>{count}%</span>
 */
export function useCountUp(target, duration = 2000, options = {}) {
  const { threshold = 0.4 } = options

  const [count, setCount]       = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  // IntersectionObserver — déclenche une seule fois quand l'élément est visible
  useEffect(() => {
    const el = ref.current
    if (!el || triggered) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, triggered])

  // Animation rAF avec easing cubic-out
  useEffect(() => {
    if (!triggered) return

    let startTime = null
    let raf

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed  = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out cubic : décélération naturelle
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      }
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [triggered, target, duration])

  return { count, ref }
}

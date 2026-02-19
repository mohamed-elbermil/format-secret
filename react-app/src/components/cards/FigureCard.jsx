import React, { useEffect, useRef, useState } from 'react'

function animateValue(ref, start, end, duration, suffix) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const current = Math.floor(progress * (end - start) + start)
    if (ref.current) ref.current.textContent = suffix ? `${current}${suffix}` : String(current)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function FigureCard({ icon, label, value, suffix = '', description }) {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true)
          animateValue(ref, 0, value, 2000, suffix)
        }
      },
      { threshold: 0.5 }
    )
    observerRef.current.observe(el)
    return () => observerRef.current?.disconnect()
  }, [value, suffix, animated])

  return (
    <div className="figure-card">
      <div className="figure-icon">
        <i className={icon} />
      </div>
      <h3>{label}</h3>
      <div className="figure-number" ref={ref}>{suffix ? `0${suffix}` : '0'}</div>
      <p>{description}</p>
    </div>
  )
}

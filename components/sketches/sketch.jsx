import React, { useEffect, useRef } from 'react'

export default function Sketch({ sketch }) {
  const sketchRef = useRef(null)
  let instance

  useEffect(() => {
    instance = new window.p5(sketch, sketchRef.current)

    return () => {
      instance.remove()
    }
  })

  return <div ref={sketchRef}></div>
}

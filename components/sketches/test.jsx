import React from 'react'
import Sketch from './sketch'

export default function TestSketch() {
  const s = (p) => {
    p.setup = () => {
      p.createCanvas(500, 500)
    }

    p.draw = () => {
      p.background(0)
      p.ellipse(100, 125, 100, 70)
    }
  }

  return <Sketch sketch={s} />
}

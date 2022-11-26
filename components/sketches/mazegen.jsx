import React from 'react'
import Sketch from './sketch'

export default function MazeGen() {
  let cols, rows;
  const size = 50;
  const grid = [];

  const s = (p) => {

    p.setup = () => {
      p.createCanvas(500, 500)
      rows = p.floor(p.width/size);
      cols = p.floor(p.height/size);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = new Cell(row, col);
            grid.push(cell);
        }
        
      }
    }

    p.draw = () => {
      p.background(51);

      for (const cell of grid) {
        cell.show(p);
      }
      
    }
  }

  function Cell(row, col) {
    this.row = row;
    this.col = col;

    this.show = function(p) {
      const x = this.row * size;
      const y = this.col * size;
      p.stroke(255);
      p.noFill();
      
      p.line(x,y,x+size,y);
      p.line(x+size,y,x+size,y+size);
      p.line(x+size,y+size,x,y+size);
      p.line(x,y+size,x,y);

    }
  }

  return <Sketch sketch={s} />
}

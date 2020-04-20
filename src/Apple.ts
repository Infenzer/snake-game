import {scale, width, height} from './index'

class Apple {
  x: number
  y: number

  draw (ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#00FF7F'
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  create(snakeX: number, snakeY: number) {
    this.x = getRandom().x
    this.y = getRandom().y
    
    while (this.x === snakeX && this.y === snakeY) {
      this.x = getRandom().x
      this.y = getRandom().y
    }
  }
}

function getRandom () {
  const x = (Math.floor(Math.random() * width / scale - 1) + 1) * scale
  const y = (Math.floor(Math.random() * height / scale - 1) + 1) * scale

  return {
    x,
    y
  }
}

export default Apple

import {scale, width, height} from './index'

type SnakeDir = [
  1 | 0 | -1 ,
  1 | 0 | -1 ,
]

class Snake {
  x: number
  y: number
  speed: number
  direction: SnakeDir

  constructor() {
    this.speed = 1
    this.x = 0
    this.y = 0
    this.direction = [1, 0]
  }

  create() {
    this.x = getRandom().x
    this.y = getRandom().y
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#FFF'
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  go() {
    const [dirX, dirY] = this.direction

    this.x += dirX * 10
    this.y += dirY * 10


    if (this.x > width) {
      this.x = 0
    }

    if (this.x < 0) {
      this.x = width
    }

    if (this.y > height) {
      this.y = 0
    }

    if (this.y < 0) {
      this.y = height
    }
  }

  changeDirection(direction: SnakeDir) {
    this.direction = direction
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

export default Snake
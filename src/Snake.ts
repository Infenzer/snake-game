import {scale, width, height} from './index'
import Apple from './Apple'

interface ITail {
  x: number
  y: number
}

type SnakeDir = [
  1 | 0 | -1 ,
  1 | 0 | -1 ,
]

class Snake {
  x: number
  y: number
  direction: SnakeDir
  total: number
  tail: ITail[]

  constructor() {
    this.x = 0
    this.y = 0
    this.direction = [1, 0]
  }

  create() {
    this.x = getRandom().x
    this.y = getRandom().y
    this.total = 0
    this.tail = []
  }

  eat(apple: Apple) {
    this.total++
    apple.create(this.x, this.y)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#FFF'

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
    }
    
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  go() {
    const [dirX, dirY] = this.direction

    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1]
    }

    this.tail[this.total - 1] = {x: this.x, y: this.y}


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
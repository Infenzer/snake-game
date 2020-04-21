import {scale, width, height} from './index'
import Apple from './Apple'

export interface ITail {
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
  tail: ITail[]
  died: boolean

  constructor() {
    this.x = 0
    this.y = 0
    this.direction = [1, 0]
  }

  create() {
    this.x = getRandom().x
    this.y = getRandom().y
    this.tail = []
    this.died = false
    this.tail.push({x: -scale, y: -scale})
  }

  eat(apple: Apple) {
    this.tail.push({x: -scale, y: -scale})
    apple.create()
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

    if (this.tail.length != 0) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1]
      }
      this.tail[this.tail.length - 1] = {x: this.x, y: this.y}
    }
    
    this.x += dirX * scale
    this.y += dirY * scale

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

    this.tail.forEach((arr) => {
      if (this.x === arr.x && this.y === arr.y) {
        this.died = true
      }
    })
  }

  changeDirection(newDir: SnakeDir) {
    const [dirX, dirY] = this.direction
    const [newX, newY] = newDir
    if (dirX === 0 && newX !== 0 ) {
      this.direction = newDir
    }

    if (dirY === 0 && newY !== 0 ) {
      this.direction = newDir
    }
  }
}

function getRandom () {
  const x = (Math.floor(Math.random() * width / scale - 1) + 1) * scale
  const y = (Math.floor(Math.random() * height / scale - 1) + 1) * scale

  return {x, y}
}

export default Snake
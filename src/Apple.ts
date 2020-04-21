import {scale, width, height} from './index'
import Snake, { ITail } from './Snake'

class Apple {
  x: number
  y: number

  draw (ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#00FF7F'
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  getRandom (size: number) {
    let randInt = (Math.floor(Math.random() * size / scale - 1) + 1) * scale

    return randInt
  }

  create() {
    this.x = this.getRandom(width)
    this.y = this.getRandom(height)
  }
}


export default Apple

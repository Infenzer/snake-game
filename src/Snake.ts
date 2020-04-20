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
    this.x = 490
    this.y = 0
    this.direction = [1, 0]
  }

  create(width: number, height: number) {
    this.x = 30
    this.y = 250
  }

  go(width: number, height: number) {
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

export default Snake
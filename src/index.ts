import './scss/style.scss'
import Snake from './Snake'
import Apple from './Apple'

const canvas:HTMLCanvasElement = document.querySelector('.snake')
const ctx = canvas.getContext('2d')

export const scale = 10
export const width = canvas.width - scale
export const height = canvas.height - scale

const snake = new Snake()
const apple = new Apple()

snake.create()
apple.create(snake.x, snake.y)

setInterval(()=> {
  ctx.fillStyle = '#626262'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#FFF'
  ctx.fillRect(snake.x, snake.y, scale, scale)
  snake.go()

  ctx.fillStyle = '#00FF7F'
  ctx.fillRect(apple.x, apple.y, scale, scale)
}, 1000 / 10 )




addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    snake.changeDirection([0, -1])
  }
  
  if (e.key === 'ArrowDown') {
    snake.changeDirection([0, 1])
  }

  if (e.key === 'ArrowLeft') {
    snake.changeDirection([-1, 0])
  }

  if (e.key === 'ArrowRight') {
    snake.changeDirection([1, 0])
  }
})
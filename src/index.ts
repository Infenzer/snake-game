import './scss/style.scss'
import Snake from './Snake'

const canvas:HTMLCanvasElement = document.querySelector('.snake')
const ctx = canvas.getContext('2d')

const snake = new Snake()

setInterval(()=> {
  ctx.fillStyle = '#626262'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#FFF'
  ctx.fillRect(snake.x, snake.y, 10, 10)
  snake.go(canvas.width-10, canvas.height-10)

}, 1000 / 15)




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
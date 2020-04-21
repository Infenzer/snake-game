import './scss/style.scss'
import Snake from './Snake'
import Apple from './Apple'

const canvas:HTMLCanvasElement = document.querySelector('.snake')
const ctx = canvas.getContext('2d')

export const scale = 20
export const width = canvas.width - scale
export const height = canvas.height - scale
// export const map2D = createMap2D(width, height)

const snake = new Snake()
const apple = new Apple()

gameStart()

function gameStart() {
  snake.create()
  apple.create()

  const interval = setInterval(()=> {
    ctx.fillStyle = '#626262'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  
    snake.go()
    snake.draw(ctx)
  
    apple.draw(ctx)
  
    if (snake.x === apple.x && snake.y === apple.y) {
      snake.eat(apple)
    }
  
    if (snake.died) {
      ctx.fillStyle = 'black'
      ctx.font = '40px sans-serif'
      ctx.fillText('Game Over', width / 4, height / 2)
      ctx.font = '20px sans-serif'
      ctx.fillText('Press any key to restart', width / 4.1, height / 1.7)
  
      clearInterval(interval)
    }
  }, 1000 / 8 )
}


// function createMap2D(width, height): ITail[] {
//   const map2D = []

//   for (let i = 0; i <= (height / scale); i++) {
//     for(let j = 0; j <= (width / scale); j++) {
//       map2D.push({x: j * 10, y: i * 10})
//     }
//   }

//   return map2D
// }

addEventListener('keydown', (e) => {

  console.log(e.key)
  if (snake.died) {
    gameStart()
  }

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
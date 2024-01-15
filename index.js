const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

class Player {
    constructor(x, y, width, height, color) {
        this.position = {
            x,
            y
        }
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        context.fillStyle = this.color
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 20, 20, "black")


function animate() {
    requestAnimationFrame(animate)
    console.log(canvas.height, canvas.width)
    context.fillStyle = '#F0ECE5'
    context.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
}

animate()

addEventListener('keydown', ({ key }) => {
    const velocity = 20
    switch (key) {
        // case 'w':
        //     console.log('up')
        //     player.position.y -= velocity * 10
        //     break
        case 'd':
            console.log('right')
            player.position.x += velocity
            break
        case 'a':
            console.log('left')
            player.position.x -= velocity
        //     break
        // case 's':
        //     console.log('down')
        //     player.position.y += velocity
        //     break
    }
})


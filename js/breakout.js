show = document.querySelector('.rules-btn')
close = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

score = 0

brickRowCount = 9
brickColumnCount= 5

//create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height /2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

//Create Paddle Properties

paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height -20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}

//Create Brick properties

brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

//create bricks

bricks = []
for (let i = 0; i < brickRowCount; i++) {
    bricks[i] = []
    for( let j = 0; j < brickColumnCount; j++){
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
        bricks[i][j] = {x, y, ...brickInfo}
    }
}

//Draw ball on canvas
function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.fillStyle = '#79a4ed'
    ctx.fill()
    ctx.closePath()
}

//Draw paddle on canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#79a4ed'
    ctx.fill()
    ctx.closePath()
}

//draw score
function drawScore() {
    ctx.font ='20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width-100, 30)
}
//draw bricks
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visisble ? '#79a4ed' : 'trasnparent'
            ctx.fill()
            ctx.closePath()

        })
    })
}

console.log(bricks)
//draw everything

function draw () {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawPaddle()
    drawBall()
    drawScore()
    drawBricks()
}

//Move Paddle On Canvas
function movePaddle() {
    paddle.x = paddle.x + paddle.dx

    //Wall Detection
    if (paddle.x < 0) {
        paddle.x = 0
    }
    if (paddle.x + paddle.w > canvas.width) {
        paddle.x = canvas.width - paddlw.w
    }
}

//Keydown Event
function keyDown(e) {
if (e.key == 'ArrowRight' || e.key == 'Right') {
    paddle.dx = paddle.speed
}
}

function keyDown(e) {
    if (e.key == 'ArrowLeft' || e.key == 'Left') {
        paddle.dx = -paddle.speed
    }
    }
//Keyup Event

function keyUp(e) {
    if (e.key == 'ArrowRight' || e.key =='Right' || e.key == 'ArrowLeft' || e.key == 'Left') {
        paddle.dx = 0
    }
}


//Keyboard Event Handlers
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)


function moveBall() {
    ball.x = ball.x + ball.dx
    ball.y = ball.y + ball.dy

    //Wall Collision(top)
    if (ball.y + ball.size < 0) {
        ball.dy = -1 * ball.dy
    }
    //Wall Collision(right)
    if (ball.x + ball.size > canvas.width){
        ball.dx = -1 * ball.dx
    }
    //Wall Collision(bottom)
    if (ball.y + ball.size > canvas.height) {
        ball.dy = -1 * ball.dy
    }
    // Wall Collision(left)
    if(ball.x + ball.size < 0){
        ball.dx = -1 * ball.dx
    }
}
//Update the Canvas Drawing and do the Animation
function update () {
    moveBall()
    movePaddle()
    draw()
    requestAnimationFrame(update)
}

update()

// rules page open and close event handlers
show.addEventListener('click', () =>{
    rules.classList.add('show')
})

close.addEventListener('click', () =>{
    rules.classList.remove('show')
})
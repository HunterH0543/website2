const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getELementById('time')
const scoreEl = document.getELementById('score')
const message = document.getELementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => {
    screens[0].claddList.add('up')
})
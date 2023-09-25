import { homeContent } from './home.js'
import { menuContent } from './menu.js'
import { infoContent } from './info.js'
import './style.css'
import si from './img/pexels-volkan-vardar-3887985.jpg'
import hi from './img/absurd.design-chapter1-31.png'
import bi from './img/ii7uq385cc46lit6vs65fc832a.png'

const header = document.createElement('div')
header.classList.add('header')
header.innerHTML = '<em>That Food Place</em>'
const headImg = new Image()
headImg.src = hi
headImg.className = 'head'
headImg.title = 'Roy\'s Secret'
header.appendChild(headImg)

const container = document.createElement('div')
container.className = 'container'
container.innerHTML = '<div class="tabs"><div id="home" class="tab active">HOME</div><div id="menu" class="tab">MENU</div><div id="info" class="tab">INFO</div></div>'

const main = document.createElement('div')
main.className = 'main'

const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'
const home = homeContent()
mainContainer.appendChild(home)
const menu = menuContent()
mainContainer.appendChild(menu)
const info = infoContent()
mainContainer.appendChild(info)
main.appendChild(mainContainer)

const side = document.createElement('div')
side.className = 'side'

const sideImg = new Image()
sideImg.src = si
sideImg.title = 'Image by Volkan Vardar\nSourced from Pexels'
sideImg.classList.add('side-image')
side.appendChild(sideImg)

container.appendChild(main)
container.appendChild(side)

const curveLeft = document.createElement('div')
curveLeft.className = 'curve-left'
const curveRight = document.createElement('div')
curveRight.className = 'curve-right'

document.body.appendChild(header)
document.body.appendChild(container)
document.body.appendChild(curveLeft)
document.body.appendChild(curveRight)

const homeTab = document.getElementById('home')
const menuTab = document.getElementById('menu')
const infoTab = document.getElementById('info')

homeTab.addEventListener('click', () => {
  home.classList.add('selected')
  menu.classList.remove('selected')
  info.classList.remove('selected')
  homeTab.classList.add('active')
  menuTab.classList.remove('active')
  infoTab.classList.remove('active')
})

menuTab.addEventListener('click', () => {
  home.classList.remove('selected')
  menu.classList.add('selected')
  info.classList.remove('selected')
  homeTab.classList.remove('active')
  menuTab.classList.add('active')
  infoTab.classList.remove('active')
})

infoTab.addEventListener('click', () => {
  home.classList.remove('selected')
  menu.classList.remove('selected')
  info.classList.add('selected')
  homeTab.classList.remove('active')
  menuTab.classList.remove('active')
  infoTab.classList.add('active')
})

const banana = document.createElement('div')
banana.className = 'banana'
banana.innerHTML = '<strong>CALORY FINDER</strong>'
const bananaImg = new Image()
bananaImg.src = bi
bananaImg.className = 'banana-img'
banana.appendChild(bananaImg)
const calories = document.createElement('div')
calories.innerHTML = 'Approx. 105-120 calories<br>per medium sized serving of banana<br>(7-8 inches)'
banana.appendChild(calories)
document.body.appendChild(banana)

headImg.onclick = () => {
  banana.classList.contains('show-banana') ? banana.classList.remove('show-banana') : banana.classList.add('show-banana')
}
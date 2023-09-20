import { homeContent } from './home.js'
import { menuContent } from './menu.js'
import { contactContent } from './contact.js'
import './style.css'
import si from './img/pexels-volkan-vardar-3887985.jpg'
import hi from './img/absurd.design-chapter1-31.png'

const header = document.createElement('div')
header.classList.add('header')
header.innerHTML = '<em>That Food Place</em>'
const headImg = new Image()
headImg.src = hi
headImg.className = 'head'
header.appendChild(headImg)

const container = document.createElement('div')
container.className = 'container'
container.innerHTML = '<div class="tabs"><div id="home" class="tab">HOME</div><div id="manu" class="tab">MENU</div><div id="info" class="tab">INFO</div></div>'

const main = document.createElement('div')
main.className = 'main'

const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'
mainContainer.appendChild(homeContent())
mainContainer.appendChild(menuContent())
mainContainer.appendChild(contactContent())
main.appendChild(mainContainer)

const side = document.createElement('div')
side.className = 'side'

const sideImg = new Image()
sideImg.src = si
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

const tabs = document.querySelectorAll('.tab')
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tab.classList.contains('active') ? tab.classList.remove('active') : tab.classList.add('active')
  })
})
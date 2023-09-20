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

const main = document.createElement('div')
main.className = 'main'
main.innerHTML = '<div class="tabs"><div id="home" class="tab">HOME</div><div id="manu" class="tab">MENU</div><div id="contact" class="tab">CONTACT</div></div>'

const container = document.createElement('div')
container.className = 'container'
container.appendChild(homeContent())
container.appendChild(menuContent())
container.appendChild(contactContent())
main.appendChild(container)

const side = document.createElement('div')
side.className = 'side'

const sideImg = new Image()
sideImg.src = si
sideImg.classList.add('side-image')
side.appendChild(sideImg)

const curveLeft = document.createElement('div')
curveLeft.className = 'curve-left'
const curveRight = document.createElement('div')
curveRight.className = 'curve-right'

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(side)
document.body.appendChild(curveLeft)
document.body.appendChild(curveRight)

const tabs = document.querySelectorAll('.tab')
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tab.classList.contains('active') ? tab.classList.remove('active') : tab.classList.add('active')
  })
})
import './style.css'
import si from './img/pexels-guilherme-rossi-1819669.jpg'
import hi from './img/absurd.design-chapter1-31.png'
import content from './content.xml'

const header = document.createElement('div')
header.classList.add('header')
header.innerHTML = '<em>That Food Place</em>'
const headImg = new Image()
headImg.src = hi
headImg.className = 'head'
header.appendChild(headImg)

const main = document.createElement('div')
main.className = 'main'
main.innerHTML = '<div class="description"><strong>That Food Place</strong> is an upscale and sophisticated dining establishment that sets the standard for exquisite culinary experiences. Nestled in the heart of a bustling city, this restaurant is a haven for food enthusiasts seeking a memorable gastronomic adventure</div>'

const side = document.createElement('div')
side.className = 'side'

const sideImg = new Image()
sideImg.src = si
sideImg.classList.add('side-image')
side.appendChild(sideImg)

const curveLeft = document.createElement('div')
curveLeft.className = 'curve-left'
const curveRight = document.createElement('dive')
curveRight.className = 'curve-right'

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(side)
document.body.appendChild(curveLeft)
document.body.appendChild(curveRight)
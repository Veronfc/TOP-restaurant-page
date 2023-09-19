import './style.css'
import si from './img/pexels-lumn-604969.jpg'

const header = document.createElement('div')
header.classList.add('header')
header.innerHTML = '<em>restaurant name</em>'

const main = document.createElement('div')
main.classList.add('main')

const side = document.createElement('div')
side.classList.add('side')

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
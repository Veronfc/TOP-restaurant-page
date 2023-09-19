import {loadMain} from './main-content.js'
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
document.body.appendChild(loadMain())
document.body.appendChild(side)
document.body.appendChild(curveLeft)
document.body.appendChild(curveRight)
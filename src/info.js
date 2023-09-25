function infoContent() {
  const info = document.createElement('div')
  info.className = 'info'

  const location = document.createElement('div')
  location.className = 'desc dish'
  location.innerHTML = 'Located in the heart of Savoryville, That Food Place enjoys a prime location in the charming Culinary County. The restaurant is nestled in Delightfulville, a vibrant and picturesque neighborhood known for its culinary delights and cultural attractions.'

  const nightlife = document.createElement('div')
  nightlife.className = 'desc'
  nightlife.innerHTML = '<strong>VIBRANT NIGHTLIFE</strong>As evening falls, Delightfulville comes alive with a vibrant nightlife scene. Nearby bars, jazz clubs, and cocktail lounges offer live music, craft cocktails, and a chance to unwind after a delicious meal at That Food Place.'

  const farmers = document.createElement('div')
  farmers.className = 'desc'
  farmers.innerHTML = '<strong>FARMERS\' MARKET</strong>On weekends, the nearby Farmers\' Market buzzes with activity. Local farmers and artisans showcase fresh produce, handcrafted goods, and a variety of unique food products. It\'s a delightful place to explore and sample local flavors.'

  const architecture = document.createElement('div')
  architecture.className = 'desc'
  architecture.innerHTML = '<strong>HISTORIC ARCHITECTURE</strong> The architecture in Delightfulville is a mix of historic charm and modern design. You\'ll find quaint cobblestone streets lined with well-preserved heritage buildings alongside sleek, contemporary structures.'

  const address = document.createElement('div')
  address.className = 'signature'
  address.innerHTML = '<strong>ADDRESS</strong><div class="dish">That Food Place,<br>123 Gourmet Avenue,<br>Savoryville, Culinary County,<br>Delightfulville 56789</div>'

  info.appendChild(location)
  info.appendChild(document.createElement('hr'))
  info.appendChild(nightlife)
  info.appendChild(document.createElement('hr'))
  info.appendChild(farmers)
  info.appendChild(document.createElement('hr'))
  info.appendChild(architecture)
  info.appendChild(document.createElement('hr'))
  info.appendChild(address)
  
  return info
}

export {infoContent}
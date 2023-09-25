function homeContent() {
  const home = document.createElement('div')
  home.className = 'home selected'

  const desc = document.createElement('div')
  desc.className = 'desc dish'
  desc.innerHTML = 'That Food Place is an upscale and sophisticated dining establishment that sets the standard for exquisite culinary experiences. Nestled in the heart of a bustling city, this restaurant is a haven for food enthusiasts seeking a memorable gastronomic adventure.'

  const ambiance = document.createElement('div')
  ambiance.className = 'desc'
  ambiance.innerHTML = '<strong>AMBIANCE</strong>As you step through the elegant doors of That Food Place, you are transported into a world of opulence and refinement. The interior decor is a harmonious blend of contemporary design and classic charm. Rich mahogany wood accents and soft, warm lighting create an inviting and intimate atmosphere.The restaurant also boasts a spacious outdoor terrace, complete with lush greenery, perfect for al fresco dining on pleasant evenings.'

  const cuisine = document.createElement('div')
  cuisine.className = 'desc'
  cuisine.innerHTML = '<strong>CUISINE</strong>The culinary team at That Food Place is renowned for its creativity and dedication to delivering an extraordinary dining experience. The menu is a carefully curated selection of globally inspired dishes, crafted with precision and artistry. From the freshest seafood to prime cuts of meat, every ingredient is meticulously sourced to ensure the highest quality. Whether you\'re a seafood aficionado, a carnivore, or a vegetarian, That Food Place has something to delight your palate'

  const selection = document.createElement('div')
  selection.className = 'desc'
  selection.innerHTML = '<strong>WINE & BEVERAGE SELECTION</strong>The wine cellar at That Food Place is extensive, boasting an impressive collection of both vintage and contemporary wines from around the world. The sommelier is ready to assist guests in selecting the perfect wine to complement their meal. The restaurant also offers a range of craft cocktails, artisanal spirits, and non-alcoholic options for those seeking alternative beverages.'

  home.appendChild(desc)
  home.appendChild(document.createElement('hr'))
  home.appendChild(ambiance)
  home.appendChild(document.createElement('hr'))
  home.appendChild(cuisine)
  home.appendChild(document.createElement('hr'))
  home.appendChild(selection)

  return home
}

export {homeContent}
function menuContent() {
  const menu = document.createElement('div')
  menu.className = 'menu'
  
  const signature = document.createElement('div')
  signature.className = 'signature'
  signature.innerHTML = '<strong>SIGNATURE DISHES</strong><div class=dish><strong>Truffle-infused Lobster Risotto</strong>Creamy Arborio rice cooked to perfection, infused with the earthy aroma of black truffles, and adorned with succulent lobster meat</div><div class=dish><strong>Filet Mignon Rossini</strong>A tender, melt-in-your-mouth filet mignon topped with seared foie gras, drizzled with a rich truffle demi-glace, and served with truffle mashed potatoes</div><div class=dish><strong>Vegetable Garden Symphony</strong>A vibrant and artistic presentation of seasonal vegetables and herbs, celebrating the colors and flavors of the garden</div><div class=dish><strong>Chocolate Decadence</strong>A sumptuous dessert that combines layers of dark and white chocolate mousse, garnished with edible gold leaf and fresh berries</div>'

  const apps = document.createElement('div')
  apps.className = 'desc'
  apps.innerHTML = '<strong>APPETIZERS</strong><ul><li><strong>Seared Ahi Tuna Tacos:</strong> Slices of perfectly seared Ahi tuna served in delicate mini tacos with avocado crema and pickled radishes</li><li><strong>Mushroom Truffle Croquettes:</strong> Crispy on the outside, creamy on the inside croquettes featuring a medley of wild mushrooms and truffle oil, served with a garlic aioli dipping sauce</li><li><strong>Crispy Duck Spring Rolls:</strong> Thin rice paper rolls filled with tender duck confit, julienne vegetables, and a zesty plum dipping sauce</li><li><strong>Prawn and Mango Ceviche:</strong> Fresh prawns marinated in lime and orange juice, mixed with diced mango, red onion, and cilantro, served with house-made tortilla chips</li></ul>'

  const salads = document.createElement('div')
  salads.className = 'desc'
  salads.innerHTML = '<strong>SALADS</strong><ul><li><strong>Roasted Beet and Goat Cheese Salad:</strong> Earthy roasted beets, mixed greens, candied pecans, and creamy goat cheese, drizzled with a honey-balsamic vinaigrette</li><li><strong>Kale and Quinoa Superfood Salad:</strong> A health-conscious choice featuring kale, quinoa, roasted chickpeas, cherry tomatoes, and a tahini-lemon dressing</li></ul>'

  const main = document.createElement('div')
  main.className = 'desc'
  main.innerHTML = '<strong>MAIN COURSES</strong><ul><li><strong>Lavender-Infused Rack of Lamb:</strong> Succulent lamb chops marinated in a fragrant lavender and herb rub, served with roasted garlic mashed potatoes and grilled asparagus</li><li><strong>Pan-Seared Halibut with Lemon Herb Butter:</strong> Fresh halibut filet seared to perfection and topped with a zesty lemon herb butter sauce, accompanied by sautéed baby spinach and garlic mashed potatoes</li><li><strong>Wild Mushroom Risotto:</strong> Creamy Arborio rice cooked with a medley of wild mushrooms, finished with truffle oil and parmesan cheese</li><li><strong>Vegetable Tagine:</strong> A vegetarian delight featuring slow-cooked Moroccan-spiced vegetables, served with couscous and a side of harissa sauce</li></ul>'

  const dessert = document.createElement('div')
  dessert.className = 'desc'
  dessert.innerHTML = '<strong>DESSERTS</strong><ul><li><strong>Lemon Lavender Panna Cotta:</strong> A delicate dessert with layers of lemon-infused panna cotta and lavender-scented whipped cream, garnished with fresh berries</li><li><strong>Molten Chocolate Lava Cake:</strong> A chocolate lover\'s dream with a warm, gooey chocolate center, served with vanilla bean ice cream and a drizzle of raspberry coulis</li><li><strong>Tiramisu Martini:</strong> A playful twist on the classic dessert, served in a martini glass with layers of mascarpone cheese, coffee-soaked ladyfingers, and a dusting of cocoa powder</li><li><strong>Artisan Cheese Plate:</strong> A curated selection of artisanal cheeses, served with house-made fruit compote, honey, and a variety of crackers and bread</li></ul>'

  menu.appendChild(signature)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(apps)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(salads)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(main)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(dessert)

  return menu
}

export {menuContent}
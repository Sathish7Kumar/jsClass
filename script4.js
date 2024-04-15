const products = [
    {
      "_id": "64c8c020eefb5d1a487d1203",
      "name": "Iphone 12 Pro",
      "brand": "Apple",
      "desc": "256Gb , 6.1-inch display",
      "price": 1899,
      "image": "https://assets.sangeethamobiles.com/product_img/8474/1667556317_ibE.jpg",
      "__v": 0
    },
    {
      "_id": "64c8cbcfeefb5d1a487d120a",
      "name": "Iphone 12 Mini",
      "brand": "Apple",
      "desc": "128Gb , 5.3-inch display",
      "price": 599,
      "image": "https://ik.imagekit.io/satzz/ecommerce/iphone-12-mini.jpg?updatedAt=1690880027814",
      "__v": 0
    },
    {
      "_id": "64c8d5e6eefb5d1a487d120f",
      "name": "Iphone 13",
      "brand": "Apple",
      "desc": "128Gb , 6.1-inch display",
      "price": 999,
      "image": "https://ik.imagekit.io/satzz/ecommerce/iphone-13.jpg?updatedAt=1690880028479",
      "__v": 0
    },
    {
      "_id": "64c8d5e6eefb5d1a487d1210",
      "name": "One Plus Nord 2T 5g",
      "brand": "OnePlus",
      "desc": "8Gb RAM , 128Gb ROM , 6.5-inch display",
      "price": 759,
      "image": "https://ik.imagekit.io/satzz/ecommerce/oneplusnord%202t.jpg?updatedAt=1690880028076",
      "__v": 0
    },
    {
      "_id": "64c8d6f7eefb5d1a487d1215",
      "name": "Samsung m51",
      "brand": "Samsung",
      "desc": "6Gb RAM , 128Gb ROM , 6.7-inch display",
      "price": 475,
      "image": "https://ik.imagekit.io/satzz/ecommerce/samsung%20m51.jpeg?updatedAt=1690880027859",
      "__v": 0
    },
    {
      "_id": "64c8d6f7eefb5d1a487d1214",
      "name": "One Plus 11R 5g",
      "brand": "OnePlus",
      "desc": "12Gb RAM ,256Gb ROM ,6.51-inch display",
      "price": 859,
      "image": "https://ik.imagekit.io/satzz/ecommerce/oneplus-11r.jpg?updatedAt=1690880027997",
      "__v": 0
    },
    {
      "_id": "64c8d6f7eefb5d1a487d1217",
      "name": "Samsung S23 Ultra",
      "brand": "Samsung",
      "desc": "8Gb RAM , 128Gb ROM , 6.52-inch display",
      "price": 979,
      "image": "https://ik.imagekit.io/satzz/ecommerce/samsung%20s23ultra.jpeg?updatedAt=1690880028804",
      "__v": 0
    },
    {
      "_id": "64c8d6f7eefb5d1a487d1216",
      "name": "Samsung S21 Ultra",
      "brand": "Samsung",
      "desc": "8Gb RAM , 128Gb ROM , 6.43-inch display",
      "price": 1299,
      "image": "https://ik.imagekit.io/satzz/ecommerce/samsung%20s21ultra.jpeg?updatedAt=1690880027663",
      "__v": 0
    },
    {
      "_id": "64c900a3ce60f478728edbb1",
      "name": "Samsung S20 FE",
      "brand": "Samsung",
      "desc": "8Gb RAM , 128Gb ROM , 6.42-inch display",
      "price": 679,
      "image": "https://ik.imagekit.io/satzz/ecommerce/Samsung-Galaxy-S20-FE-5G.jpg?updatedAt=1690894452513",
      "__v": 0
    }
  ]

  const container = document.getElementById('pro-container')

   products.map((pro)=>{

    const card = document.createElement("div")
    card.setAttribute("class","card")

    const heading =  document.createElement("h2")
    heading.innerText = pro.name

    const image = document.createElement("img")
    image.src = pro.image

    const brand =  document.createElement("h3")
    brand.innerText = `Brand : ${pro.brand}`

    const specs =  document.createElement("h3")
    specs.innerText = `Specification : ${pro.desc}`

    const price =  document.createElement("h2")
    price.innerText = "Price : "+pro.price+ " rs"

    const button = document.createElement("button")
    button.setAttribute("id","btn")
    button.innerText = "Add to Cart"
    button.setAttribute("onclick","add()")
    
    card.append(heading,image,brand,specs,price,button)
    container.append(card)

  })

  const cartcount = document.getElementById('cartCount')

  let cartValue = 0

  function add(){
    cartValue++
    cartcount.innerText = cartValue
  }

  

 




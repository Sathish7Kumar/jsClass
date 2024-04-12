const heading = document.createElement("h1")

heading.setAttribute("class","head")
// heading.className = "head"

heading.innerText = "MS DHONI"

const para = document.createElement('p')
para.innerText = "Chennai (/ˈtʃɛnaɪ/ ⓘ, Tamil: [ˈt͡ɕenːaɪ̯], IAST: Cennaī), formerly known as Madras,[b] is the capital city of Tamil Nadu, the southernmost state of India. It is the state's primate city and is located on the Coromandel Coast of the Bay of Bengal. According to the 2011 Indian census, Chennai is the sixth-most populous city in India and forms the fourth-most populous urban agglomeration. Incorporated in 1688, the Greater Chennai Corporation is the oldest municipal corporation of India and the second oldest in the world after London."

const image  = document.createElement("img")
image.className = "image"
image.alt = "onePlus mobile"
image.src = "https://ik.imagekit.io/satzz/ecommerce/oneplusnord%202t.jpg?updatedAt=1690880028076"

const div = document.createElement("div")
div.setAttribute("class","image-container")

const container = document.createElement("div")
container.setAttribute("class","container-fluid")

const row = document.createElement("div")
row.className = "row"

const col1= document.createElement("div")
col1.setAttribute("class","col-4 one bg-info")
col1.innerText = "Column-1"

const col2= document.createElement("div")
col2.setAttribute("class","col-4 one bg-success")
col2.innerText = "Column-2"

const col3= document.createElement("div")
col3.setAttribute("class","col-4 one bg-primary")
col3.innerText = "Column-3"


row.appendChild(col1)
row.appendChild(col2)
row.appendChild(col3)

// row.append(col1,col2,col3)

container.append(row)

document.body.append(container)




div.append(heading,image,para)
document.body.append(div)


const divTag = document.createElement("div")
divTag.innerHTML = `<h2>One Plus</h2>
<img class="image" src="https://ik.imagekit.io/satzz/ecommerce/oneplusnord%202t.jpg?updatedAt=1690880028076" />
<h2>Price : 45000rs </h2>
<button>Add to Bag</button>
`
document.body.append(divTag)


// document.body.appendChild(heading)
// document.body.appendChild(para)







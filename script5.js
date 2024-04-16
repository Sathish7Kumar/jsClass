const container = document.getElementById("pro-container")

// function getResponse(){
//     return new Promise((res,rej)=>{
//         fetch("https://fakestoreapi.com/products")
//         .then(resp => resp.json())
//         .then(data => res(data))
//         .catch(err => rej(err))
//     })
// }
// getResponse()
// .then(data => showProduct(data)) // arg
// .catch(err => console.log(err))

async function getResponse(){
    try {
        const resp = await fetch("https://fakestoreapi.com/products")
        const data = resp.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}
async function getProducts(){
    try {
        const products = await getResponse()
        showProduct(products); // arg
    } catch (error) {
        console.log(error) 
    }
}
getProducts()




function showProduct(products){  // pm
    const card = document.createElement("div")
    card.innerHTML = products.map((e)=>{
        return `<h2>${e.title}</h2>
        <img src=${e.image} />
        <h3>${e.description}</h3>
        <h3>${e.category}</h3>
        <h2>${e.price}</h2>
        <h3>${e.rating.rate}</h3>
        <h3>${e.rating.count}</h3>
        <button onclick="addCart()">Add to Cart</button>
        `
    })
    container.append(card)
}

function addCart(){
    alert("product added")
}

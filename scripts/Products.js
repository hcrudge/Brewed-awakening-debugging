import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {

document.addEventListener(
    "click",
    (event) => {

    if (event.target.id.startsWith("product")) {
    // Start small. First, just log whether the click works or not
    // console.log("hello, click!", event)

   
    // array destructuring 
    const [, productId] = event.target.id.split("--") 

    // productId changed to a number
    const productIdNumber = parseInt(productId)

    // find price for productId
    let productPrice = 0

    for (const product of products) {
      if ( product.id === productIdNumber) {
        productPrice = product.price
      }
    }
    window.alert(`Brewed Awakenings ${event.target.innerText} costs $${productPrice}.`)
  }
}
)

    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}


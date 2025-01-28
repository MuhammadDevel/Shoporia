import products from "./api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProduct"
import { increamentDecreament } from "./increamentDecreament";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
})

// console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate")

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price } = curProd;
        let productClone = document.importNode(templateContainer.content, true);

        const lSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productsImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;
        productClone.querySelector(".stockElement")
        .addEventListener("click", (event) => {
            increamentDecreament(event, id, stock, price);
        })
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));

        cartElement.appendChild(productClone)
    })
}

showCartProduct();

updateCartProductTotal();
import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";


const productContainer = document.querySelector("#productContainer");
const productTemplete = document.querySelector("#productTemplete");

export const showPoductContainer = (products) => {
    if (!products) {
        return false;
    }
    products.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } = curProd;
        const productClone = document.importNode(productTemplete.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productsImage").src = image;
        productClone.querySelector(".productsImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `Rs.${price}`;
        productClone.querySelector(".productActualPrice").textContent = `Rs.${price * 4}`;


        productClone.querySelector(".stockElement")
            .addEventListener("click", (event) => {
                homeQuantityToggle(event, id, stock);
            })

        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        })

        productContainer.append(productClone)
    });
}
import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, stock) => {
    let arrlocalStorageProduct = getCartProductFromLS();
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity , price)
    price = price.replace("Rs.", "");

    let existingProd = arrlocalStorageProduct.find((curProd) => curProd.id === id );
// console.log(existingProd)
    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updateCart = { id, quantity, price };
        updateCart = arrlocalStorageProduct.map((curProd) => {
            return curProd.id === id? updateCart: curProd;})
            console.log(updateCart)
       localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
       showToast("add", id);
     }

    if(existingProd){
        return false; 
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrlocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrlocalStorageProduct))

    updateCartValue(arrlocalStorageProduct);

    showToast("add", id);
}   
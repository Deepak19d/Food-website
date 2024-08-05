// <script src ="fun.js" async></script>
// if(document.readyState=='Running'){
//     document.addEventListener('DOMContentLoaded',ready){
//     }else{
//         ready()
//     }
// }
// put everything inside the ready function
// async when js is in head will prevent it to load all code first before the actual
// contentes, by this the body load along with js running in the background.
//const rem = document.getElementByClassName("btn-danger");
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
// The Functions that will make it dynamic
const removeCartItems = function (event) {
  // EventL has a object event that it return from the function
  var buttClicked = event.target; // tar is the button we clicked on
  buttClicked.parentElement.parentElement.remove(); // to get into div of div
  updateCart();
};
// To shape the price
const updateCart = function () {
  const cartContainer = document.getElementsByClassName("cart-items")[0];
  console.log(cartContainer);
  const cartRows = cartContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceEle = cartRow.getElementsByClassName("cart-price")[0];
    //console.log(priceEle);
    const QuanEle = cartRow.getElementsByClassName("cart-quantity-input")[0];
    console.log(QuanEle);
    console.log(priceEle.innerText.replace("Rs.", ""));
    let price = parseFloat(priceEle.innerText.replace("Rs.", "")); // I have not used parseFloat
    console.log(price);
    // we need to change string to a float num
    const quantity = QuanEle.value; // as this is a input field
    console.log(quantity);
    total = total + price * quantity;
    console.log(total);
  }
  total = Math.round(total * 100) / 100; // to round them into 2 place
  console.log(total);
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "Rs." + total;
};
// function to change price with quant
const quantityChanged = function (event) {
  let input = event.target; // target is the inline text or the quant
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1; // if they delete or try to move to negative we change to 1
  } else {
    updateCart();
  }
};
const addItem = function (t, p, i) {
  var cartRow = document.createElement("div"); // an empty div
  cartRow.classList.add("cart-row"); // it will bring all contents IN LINE
  var cartItem = document.getElementsByClassName("cart-items")[0];
  console.log(cartItem);
  // we don't want one item to get added to cart again
  var cartName = cartItem.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartName.length; i++) {
    if (cartName[i].innerText === t) {
      alert("This item is Added Already");
      return; // we don't add and got out
    }
  }
  var cartRowContent = `
    <div class="cart-item cart-columm">
      <img
        class="cart-item-image"
        src="${i}"
        width="200"
        height="200"
      />
      <span class="cart-item-title">${t}</span>
    </div>
    <span class="cart-price carrt-column">${p}</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1" />
      <button class="btn btn-danger" type="button">Remove</button>
    </div>`;
  cartRow.innerHTML = cartRowContent; // cause we are using tags, not texts
  cartItem.append(cartRow);
  // IMP: cause the events have already loaded we need to check that they load with these new element 2
  // to remove that item- we need to add fun, as the document is loaded already

  // these all elements need to be loaded with the contents of the page
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItems);
  // to update the price according to quantity
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
};

// add to cart function
const addToCart = function (event) {
  const button = event.target;
  var shopItem = button.parentElement.parentElement; // to reach the outer box: Shop item class
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText; // the name of the item
  console.log(title);
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText; // to get the price
  var image = shopItem.getElementsByClassName("shop-item-image")[0].src; // to get the image link
  // to add them in/ as a row
  addItem(title, price, image);
  updateCart();
};
// function to make the purchase
const purchaseDo = function () {
  alert("Thank you, We are happy to serve you");
  // we need to empty the cart now
  const cartItems = document.getElementsByClassName("cart-items")[0]; // get the first of arr
  while (cartItems.hasChildNodes()) {
    // if the cart has items in it
    cartItems.removeChild(cartItems.firstChild); // to remove them one b one in the lop
  }
  // to reset the price
  updateCart();
};

function ready() {
  var rem = document.querySelectorAll(".btn-danger");
  console.log(rem);
  console.log(rem.length);
  for (let i = 0; i < rem.length; i++) {
    var button = rem[i];
    button.addEventListener("click", removeCartItems);
  }
  // to shape the price along quantity
  const quanInputs = document.getElementsByClassName("cart-quantity-input");
  console.log(quanInputs);
  for (let h = 0; h < quanInputs.length; h++) {
    let input = quanInputs[h];
    input.addEventListener("change", quantityChanged);
  }
  const addtoCart = document.getElementsByClassName("shop-item-button");
  console.log(addtoCart);
  for (let n = 0; n < addtoCart.length; n++) {
    var button = addtoCart[n];
    button.addEventListener("click", addToCart);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseDo);
  // these all elements need to be loaded with the contents of the page
}
// The Functions that will make it dynamic

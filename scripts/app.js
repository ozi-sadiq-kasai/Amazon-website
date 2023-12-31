

let productsHTML=''
 products.forEach((product)=>{
  productsHTML += `
  <article class="item__wrapper">
 <img class="item__image" src=${product.image}>
 <h1 class="item__name">${product.name}</h1>
 <div class="rating__div">
   <img class="item__rating" src="./images/ratings/rating-${product.rating.stars * 10}.png" alt="image"><span class="count">${product.rating.count}</span>
 </div>
 <p class="item__price"> $ ${product.priceCents /100 .toFixed(2)}</p>
 <button class="item__btn"data-product-name=${product.name} data-product-price=${product.priceCents}>Add to Cart</button>
 </article>      
 `
})

document.querySelector('#display__container').innerHTML+= productsHTML
let cart = []
let cartButton = document.querySelectorAll('.item__btn')
    cartButton.forEach((button) =>{
      button.addEventListener('click',()=>{  
        cart.push(button.dataset)
        console.log(cart)
      })
    })
  
    
    let checkoutHTML = ''
    products.forEach((product)=>{
      checkoutHTML +=`
    <article class="item__wrapper">
            <h1 id="review">Review your order</h1>
            <div id="review__item">
              <h2>Delivery date: </h2>
              <div class="review__item__info">
                <img class="item__image" src="./images/products/women-french-terry-fleece-jogger-camo.jpg" alt="image">
                <div>
                  <h3 class="item__name">Women Fleece Jogger</h3>
                  <p class="item__price">$20.00</p>
                  <div class="quantity__div">
                    <p>Quantity:</p><span>Update<span><span>Delete<span>
                  </div>
                </div>
                <form action="#">
                  <p>Choose a delivery option:</p>
                  <div>
                    <input type="radio" id="tuesday" name="delivery" value="Tuesday June,15">
                    <label for="tuesday">Tuesday June,15</label>
                  </div>
                  <div>
                    <input type="radio" id="wednesday" name="delivery" value="wednesday June,20">
                    <label for="tuesday">Wednesday June,20</label>
                  </div>
                 </form>
              </div>
            </div>
    </article>     
    `  
    })
    document.querySelector('#display__container__checkout').innerHTML+= checkoutHTML


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
    export default cart;    
    
    
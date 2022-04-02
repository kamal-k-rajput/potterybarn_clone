//code for importing footer

import footer from "../html/components/footer.js";
let ft_container = document.getElementById("ft-container");
ft_container.innerHTML = footer();

//code for importing footer


//code for importing header
import header from "../html//components/header.js";
let header_container = document.getElementById("header-main-container");
header_container.innerHTML = header();


//code for importing header



import sofaDataFn from "../html/components/dataFile.js";

sofaDataFn();


      var sofaData =  JSON.parse(localStorage.getItem("sofaData"))||[];
      var wishlistArr = JSON.parse(localStorage.getItem("listItems")) || [];

  var cartArr = JSON.parse(localStorage.getItem("cartItems"))

  if (!cartArr) {
    // if cart is null/undefined;
    cartArr = []; // initialize it with empty array;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
  } 

  displayData(sofaData);




  function handlerPriceSort() {
    var selected = document.querySelector("#priceSort").value;
    if (selected == "high") {
      sofaData.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    if (selected == "low") {
      sofaData.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    if (selected == "rel") {
      sofaData.sort(function (a, b) {
        return b.rating - a.rating;
      });
    }
    displayData(sofaData);
  }



  //Display product
 function displayData(sofaData) {
    

      document.querySelector("#container").innerHTML = "";

      sofaData.map(function (data) {

        var div = document.createElement("div");
        //img,name,price,strikedoffprice
  
        // image creation
        var image = document.createElement("img");
        image.setAttribute("src", data.image_url);
  
        // name creation
  
        var name = document.createElement("p");
        name.textContent = data.name;
  
        // price creation
  
        var price = document.createElement("p");
        price.textContent = `$ ${data.price}`;
        price.id="price"
  
        //Add to wishlist
      var wishListBtn = document.createElement("button");
      wishListBtn.id="wishListBtn"
      wishListBtn.textContent = "🤍";
      
      wishListBtn.addEventListener("click", function () {
        wishList(data);
      });
  
  
        // add to cart button creation
  
        var addtoCartBtn = document.createElement("button");
        addtoCartBtn.id="addtoCartBtn"
        addtoCartBtn.textContent = "Add To Cart";
        
        addtoCartBtn.addEventListener("click", function () {
          addToCart(data);
        });
        
        
        //wish-add-div creare
        var wish_add_div =document.createElement("div");
        wish_add_div.id="wish_add_div";
        wish_add_div.append(wishListBtn,addtoCartBtn )
  
        //append
        div.append(image, name, price, wish_add_div);
        document.querySelector("#container").append(div);

      });



    // add to cart button creation

    var addtoCartBtn = document.createElement("button");
    addtoCartBtn.id = "addtoCartBtn";
    addtoCartBtn.textContent = "Add To Cart";




    
  }

  
  function addToCart(elem, index) {
  
    console.log("ele:",elem);
    console.log("cartArr",cartArr.length);
    if (cartArr.length == 0) {
      cartArr.push(elem);
    } 
    else {
      var count1=0;
      for (var i = 0; i < cartArr.length; i++) {
        
        if (elem["product_id"] == cartArr[i].product_id) {
          
          count1++;
          cartArr[i].count += 1;
           break;
        }
      }
      if(count1==0){
        cartArr.push(elem);
      }
    }
    // cartArr.push(elem);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    alert("Item added to cart");
  }



  //wishlist
  function wishList(elem) {
    wishlistArr.push(elem);
    localStorage.setItem("listItems", JSON.stringify(wishlistArr));
    alert("Item added to wish list");
  }

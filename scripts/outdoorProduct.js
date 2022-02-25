//code for importing footer

import footer from "/components/footer.js";
let ft_container = document.getElementById("ft-container");
ft_container.innerHTML = footer();

//code for importing footer


//code for importing header
import header from "/components/header.js";
let header_container = document.getElementById("header-main-container");
header_container.innerHTML = header();


//code for importing header



import sofaDataFn from "/components/dataFile.js";

sofaDataFn();


      var outdoorData =  JSON.parse(localStorage.getItem("outdoorData"))||[];

  var cartArr = JSON.parse(localStorage.getItem("cartItems"))

  if (!cartArr) {
    // if cart is null/undefined;
    cartArr = []; // initialize it with empty array;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
  } 
 
  displayData(outdoorData);





//   function handlePriceSort() {
//     var selected = document.querySelector("#priceSort").value;
//     //console.log(selected);
//     if (selected == "high") {
//       //descending
//       sofaData.sort(function (a, b) {
//         return Number(b.price) - Number(a.price);
//       });
//     }
//     if (selected == "low") {
//       //ascending
//       sofaData.sort(function (a, b) {
//         return Number(a.price) - Number(b.price);
//       });
//     }

//     console.log(sofaData);
//     displayData(sofaData);
//   }


 function displayData(outdoorData) {
    


      document.querySelector("#container").innerHTML = "";

      outdoorData.map(function (data) {

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

    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    alert("Item added to cart");
  }


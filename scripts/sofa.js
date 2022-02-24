

import sofaDataFn from "/components/dataFile.js";

sofaDataFn();


      var sofaData =  JSON.parse(localStorage.getItem("sofaData"))||[];
  //console.log(mensData)
  var cartArr = JSON.parse(localStorage.getItem("cartItems"))

  if (!cartArr) {
    // if cart is null/undefined;
    cartArr = []; // initialize it with empty array;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
  } 
  // window.addEventListener("load",function(){
  //   displayData(sofaData);
  // })
  displayData(sofaData);



//   function filterCat() {
//     var selected = document.querySelector("#brandFilter").value;
//     console.log(selected);

//     var filteredList = sofaData.filter(function (elem) {
//       return elem.brandName == selected;
//     });

//     console.log(filteredList);
//     displayData(filteredList);
//   }

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
 function displayData(sofaData) {
    


      document.querySelector("#container").innerHTML = "";
      //console.log(sofaData);
      sofaData.map(function (data) {
        //console.log(data);
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
  
        // div.onclick = () =>{
        //   window.location.href = "productInfo.html";
        // }
      });






    
  }

  
  function addToCart(elem, index) {
    // console.log(elem["product_id"])
    // console.log(cartArr.length)
    console.log("ele:",elem);
    console.log("cartArr",cartArr.length);
    if (cartArr.length == 0) {
      cartArr.push(elem);
    } 
    else {
      var count1=0;
      for (var i = 0; i < cartArr.length; i++) {
        
        if (elem["product_id"] == cartArr[i].product_id) {
          // console.log(
          //   "elem prod id: ",
          //   elem["product_id"],
          //   "Cart product id: ",
          //   cartArr[i].product_id
          // );
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

//   function addToCart(data) {
//     console.log(data, "data");
//     cartArr.push(data);
//     localStorage.setItem("CartItems", JSON.stringify(cartArr));
//     alert("added successfully");
//   }



const APP_TOKEN=localStorage.getItem("token");

//change images of products on view click
function change_image(image){

    var container = document.getElementById("main-image");
  
   container.src = image.src;
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function(event) {
  
  });

  //fetch product details

  async function fetchProductsDetails(){
    let productId=localStorage.getItem("productId");
    url =`https://dummyjson.com/auth/products/${productId}`;
    params = {
        method : 'GET',
        headers: {
          'Authorization': APP_TOKEN, 
          'Content-Type': 'application/json'
        }, 
        
    }
  
    await fetch(url, params).then(response=> response.json())
    .then((data) =>{ 
        let images='';
      console.log(data)
    //   console.log(productId)
    let obj=data;
    // console.log(obj)
  
    // console.log(values.firstName + values.lastName);
    obj.images.map((values)=>{
         let Temp=`<img
        onclick="change_image(this)"
        src="${values}"
        width="70"
      />`
    //   document.getElementsByClassName("thumbnail").innerHTML
      images+=Temp;
      console.log(images);
    })
  const products_list =`<div class="col-md-6">
  <div class="images p-3">
    <div class="text-center p-4">
      <img
        id="main-image" height="150"
        class="img-fluid w-100"
        src="${obj.thumbnail}"
      />
    </div>
    <div class="thumbnail  text-center ps-5 d-md-flex flex-lg-row  flex-sm-column" >
     ${images}
    </div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="product p-4">
    <div
      class="d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
      <a class="text-dark text-decoration-none" href="../index.html"><i class="fa fa-long-arrow-left"></i></a>
      <a class="text-dark text-decoration-none" href="../index.html"><span class="m-1">Back</span></a>
      </div>
      <i class="fa fa-shopping-cart cart-icon text-muted"></i>
    </div>
    <div class="mt-4 mb-3">
      <span class="text-uppercase text-muted brand">${obj.brand}</span>
      <h5 class="text-uppercase">${obj.title}</h5>
      <div class="price d-flex flex-row align-items-center">
        <span class="act-price">$${obj.price}</span>
      </div>
    </div>
    <p class="about">
      ${obj.description}
    </p>
  
    <div class="cart mt-4 align-items-center">
      <button class="btn btn-danger text-uppercase mr-2 px-4">
        Add to cart
      </button>
      <i  class="cart-icon m-1 fa fa-heart text-muted"></i>
      <i class="cart-icon fa m-1 fa-share-alt text-muted"></i>
    </div>
  </div>
  </div>`
  document.getElementById("productData").innerHTML+=products_list;
   
  }
  )
  }
    
fetchProductsDetails();



let pageSkip=0;
let pageLimit=10;
const APP_TOKEN=localStorage.getItem("token");



//fetch products
async function fetchProductsData(){
  let pro='';
  url =`https://dummyjson.com/auth/products/?limit=10&skip=${pageSkip}`;
  params = {
      method : 'GET',
      headers: {
        'Authorization': APP_TOKEN, 
        'Content-Type': 'application/json'
      }, 
      
  }
  
  await fetch(url, params).then(response=> response.json())
  .then((data) =>{ 
    // console.log(data)
    
  let obj=data;
  // console.log(obj)
obj.products.map((values)=>{
  // console.log(values.firstName + values.lastName);
let products_list =`<div class=" col-md-6 col-lg-4 col-xl-3 p-2 best">
<div class="collection-img position-relative">
  <img onclick="goProduct(${values.id})" src="${values.thumbnail}" height="200" class="w-100" style="cursor: pointer;"/>
  <span
    class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center"
    >sale</span
  >
</div>
<div class="text-center">
  <div class="rating mt-3">
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
  </div>
  <p class="text-capitalize my-1">${values.title}</p>
  <span class="fw-bold">$ ${values.price}</span>
</div>
</div>`
pro+=products_list;


 
}
)
document.getElementById("productsd").innerHTML=pro;
})
  
}

fetchProductsData();

// fetch product categories
async function fetchProductsCategories(){
  url ='https://dummyjson.com/auth/products/categories';
  params = {
      method : 'GET',
      headers: {
        'Authorization': APP_TOKEN, 
        'Content-Type': 'application/json'
      }, 
      
  }
  await fetch(url, params).then(response=> response.json())
  .then((data) =>{ 
    console.log(data)
    
  let obj=data;
  let categories_list=`<button onclick="fetchProductsData()"
  type="button"
  class="btn m-2 text-dark active-filter-btn"
>
  All
</button>`;
data.forEach(element => {
  let categories_list1 =`<button id="categoriesBtn" onclick="getProductsByCategories('${element}')"
  type="button"
  class="btn m-2 text-dark "
>
  ${element}
</button>`
categories_list+=categories_list1;

  });
  document.getElementById("categories").innerHTML=categories_list;
  // console.log(obj)
//   const categories_list =`<button
//   type="button"
//   class="btn m-2 text-dark active-filter-btn"
// >
//   ${obj}
// </button>`


})
  
}

fetchProductsCategories();


// to view product details page
function goProduct(id){
  let productId=id;
   window.location.href="./html/product.html"
  localStorage.setItem("productId",productId)

}

//fetch products data by categories
function getProductsByCategories(element){
  // Add active class to the current button (highlight it)
// var header = document.getElementById("categories");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   console.log(btns.length)



//   var current = document.getElementsByClassName("active-filter-btn");
//   current[0].className = current[0].className.replace(" active-filter-btn", "");
//   this.className += " active-filter-btn";
//   };

console.log(element);
let products='';
async function fetchProductsByCategories(){
  url =`https://dummyjson.com/products/category/${element}`;
  params = {
      method : 'GET',
      headers: {
        'Authorization': APP_TOKEN, 
        'Content-Type': 'application/json'
      }, 
      
  }
  await fetch(url, params).then(response=> response.json())
  .then((data) =>{ 
    console.log(data)
    
  let obj=data;
  // console.log(obj)
obj.products.map((values)=>{
  // console.log(values.firstName + values.lastName);
let products_list =`<div class="col-md-6 col-lg-4 col-xl-3 p-2 best">
<div class="collection-img position-relative">
  <img onclick="goProduct(${values.id})" src="${values.thumbnail}" height="200" class="w-100" style="cursor: pointer;"/>
  <span
    class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center"
    >sale</span
  >
</div>
<div class="text-center">
  <div class="rating mt-3">
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
  </div>
  <p class="text-capitalize my-1">${values.title}</p>
  <span class="fw-bold">$ ${values.price}</span>
</div>
</div>`
products+=products_list;

 
}
)
})
document.getElementById("productsd").innerHTML=products;
}

fetchProductsByCategories();
}
getProductsByCategories();

//search products
function searchProducts(){
let search=document.getElementById("search").value;
console.log(search);

let products='';
async function fetchsearchProducts(){
  url =`https://dummyjson.com/products/search?q=${search}`;
  params = {
      method : 'GET',
      headers: {
        'Authorization': APP_TOKEN, 
        'Content-Type': 'application/json'
      }, 
      
  }
  await fetch(url, params).then(response=> response.json())
  .then((data) =>{ 
    console.log(data)
    
  let obj=data;
  // console.log(obj)
obj.products.map((values)=>{
  // console.log(values.firstName + values.lastName);
let products_list =`<div class="col-md-6 col-lg-4 col-xl-3 p-2 best">
<div class="collection-img position-relative">
  <img onclick="goProduct(${values.id})" src="${values.thumbnail}" height="200" class="w-100" style="cursor: pointer;"/>
  <span
    class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center"
    >sale</span
  >
</div>
<div class="text-center">
  <div class="rating mt-3">
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
    <span class="text-primary"><i class="fas fa-star"></i></span>
  </div>
  <p class="text-capitalize my-1">${values.title}</p>
  <span class="fw-bold">$ ${values.price}</span>
</div>
</div>`
products+=products_list;

 
}
)
})
document.getElementById("productsd").innerHTML=products;
}
fetchsearchProducts();
}
searchProducts();

// pagination data fetch
function pagination(page){
  // console.log(e.target.innerText)
  // let page=e.target.innerText;
  if(page==1){
    
    pageSkip=0;
    fetchProductsData();
  }else if(page==2){
    pageSkip=10;
    fetchProductsData();
  }else if(page==3){
    pageSkip=20;
    fetchProductsData();
  }else if(page==4){
    pageSkip=30;
    fetchProductsData();
  }else if(page==5){
    pageSkip=40;
    fetchProductsData();
  }else if(page==6){
    pageSkip=50;
    fetchProductsData();
  }else if(page==7){
    pageSkip=60;
    fetchProductsData();
  }else if(page==8){
    pageSkip=70;
    fetchProductsData();
  }else if(page==9){
    pageSkip=80;
    fetchProductsData();
  }else if(page==10){
    pageSkip=90;
    fetchProductsData();
  }
  
  console.log(pageLimit,pageSkip)
}


//pagination design
// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 10;
let page = 1;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span ><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }

  if(page > 2){ //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span >1</span></li>`;
    if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  console.log(page);
  pagination(page);
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}

function logout(){

    
  localStorage.setItem("currentUser","logged out");
  // window.open("login.html");
  window.location.href="./html/login.html";

}

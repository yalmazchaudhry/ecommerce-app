let userName = 'kminchelle';
let Password = '0lelplR';
localStorage.setItem("userName",userName);
localStorage.setItem("password",Password);

async function fetchUserData(){
    
    url ='https://dummyjson.com/auth/login';
    params = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: userName,
          password: Password,
          // expiresInMins: 60, // optional
        }), 
        
    }
    
    await fetch(url, params).then(response=> response.json())
    .then((data) =>{ 
      console.log(data)
      
    let obj=data;
    // console.log(obj)
  
 console.log(obj.id);
  
  localStorage.setItem("token", obj.token);
  
   
  }
  )
    
    
  }
  
  fetchUserData();


// login function
function login(e){
   
    
   
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(password==localStorage.getItem("password")&&username==localStorage.getItem("userName")){
    localStorage.setItem("currentUser","logged in")
    window.open("../index.html");

}else{
    alert("Wrong Information");
}
    
    
}







          
  


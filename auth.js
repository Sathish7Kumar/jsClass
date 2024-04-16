function login(){
   const mail =  document.getElementById("mail").value
   const pswd =  document.getElementById("pswd").value

   if(mail == "admin@gmail.com" && pswd == "admin123"){
    alert("login successfull")
    window.location.href = "homepage.html"
   }
   else{
    alert("invalid emailID or password")
   }
}

function logout(){
    alert("User logged out successfull")
    window.location.href = "login.html" 
}


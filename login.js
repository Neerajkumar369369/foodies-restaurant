function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username==="admin" && password==="12345"){
document.getElementById("msg").innerHTML="✅ Login Successful";
document.getElementById("msg").style.color="green";
}
else{
document.getElementById("msg").innerHTML="❌ Invalid Username or Password";
document.getElementById("msg").style.color="red";
}

}
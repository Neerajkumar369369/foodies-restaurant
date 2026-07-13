function register(){

let pass=document.getElementById("password").value;
let confirm=document.getElementById("confirm").value;

if(pass===confirm){
document.getElementById("msg").innerHTML="✅ Registration Successful";
document.getElementById("msg").style.color="green";
}
else{
document.getElementById("msg").innerHTML="❌ Password does not match";
document.getElementById("msg").style.color="red";
}

}
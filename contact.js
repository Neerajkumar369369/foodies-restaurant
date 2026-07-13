function sendMessage(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name==="" || email==="" || message===""){
document.getElementById("result").innerHTML="❌ Please fill all fields";
document.getElementById("result").style.color="red";
}
else{
document.getElementById("result").innerHTML="✅ Message Sent Successfully!";
document.getElementById("result").style.color="green";
}
}
function bookTable(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let guest=document.getElementById("guest").value;

if(name==="" || phone==="" || date==="" || time==="" || guest===""){
document.getElementById("result").innerHTML="❌ Please fill all fields";
document.getElementById("result").style.color="red";
}
else{
document.getElementById("result").innerHTML="✅ Table Booked Successfully!";
document.getElementById("result").style.color="green";
}
}

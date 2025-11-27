import "index.html"


const form= document.getElementById("form");
const email= document.getElementById("email");
const subject= document.getElementById("subject");
const message= document.getElementById("pesan");
const button = document.getElementById("addBtn")
 
button.addEventListener('click', () =>  {
    form.value ="";
    email.value="";
    subject.value="";
    message.value="";

})




 
   
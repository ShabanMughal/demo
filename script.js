const passwordBox = document.getElementById("password");
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "-=~!@#$%^&*()[]{}<>\/";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
   let password = "";
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += number[Math.floor(Math.random() * number.length)];
   password += symbol[Math.floor(Math.random() * symbol.length)];

   while(length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
   }
   passwordBox.value = password;
}

 function copyPassword(){
   
   passwordBox.select();
   document.execCommand("copy");

   passwordBox.value = '';
 }




 ///   toast   /////

 const toast = document.querySelector(".copy");

 function copyPassword(){
   toast.classList.add("active");
  
   setTimeout(() => {
   toast.classList.remove("active");
  }, 2000); //1s = 1000 miliseconds.
  
    
}



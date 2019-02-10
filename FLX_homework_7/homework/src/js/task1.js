const hours = new Date().getHours();
const login = prompt ('Your login, please: ');

if(!login){
 alert ('Canceled');
} else if (login.length < 4){
    alert("I don't know any users having name length less than 4 symbols");
} 
if (login != "Admin" && login != "User") {
    alert("I don't know you");
} else if  (login === "User" || login === "Admin"){
    const Password = prompt("your password, please: ");
 if (!Password) {
    alert("Canceled");
} else if (Password === "UserPass"){
     if (hours < 20){
        alert("Good day, dear User!");
    }
    else if (hours > 20){
        alert ("Good evening, dear User!");
    }
} else if (Password === "RootPass"){
    if (hours < 20){
       alert("Good day, dear Admin!");
   }
   else if (hours > 20){
       alert ("Good evening, dear Admin!");
   } else {
       alert ("wrong password ");
}
}}
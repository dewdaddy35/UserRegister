function login(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let usersArray = readUsers();
    let flag ;
for (let i = 0; i < usersArray.length; i++){
let user = usersArray[i]; //user are equal to the current value in the array
console.log(user.studentEmail)
console.log(user.studentPassword)
console.log(email)
console.log(password)
if (user.studentEmail === email && user.studentPassword === password)
     {
     window.location.href = "user.html";
     console.log("yes you reached me!!!");
     flag = true;
     break;//stop the for loop
     }
     {
        if(!flag){
            alert("Invalid creditials")
        }
     }

     }
    }


function init(){
    $("#btnLogin").click(login);//click button and perform the login fucntion from line 1

}

window.onload = init;
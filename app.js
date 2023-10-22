// create the constructor
//let student = {
 //   students:[]
//}

function Student  (email,password,firstName,lastName,age,grade101,grade102,grade103) {
this.studentEmail=email;
this.studentPassword=password;
this.studentFirstName=firstName;
this.studentLastName=lastName;
this.studentAge=age;
this.studentGrade101=grade101;
this.studentGrade102=grade102;
this.studentGrade103=grade103;
}




//create the registration
function register() {
    //get the inputs using jQuery
   
    let inputEmail = $("#txtEmail");
    let inputPassword = $("#txtPassword");
    let inputFirstName = $("#txtFirstName");
    let inputLastName = $("#txtLastName");
    let inputAge = $("#txtAge");
    let inputGrade101 = $("#txt101");
    let inputGrade102 = $("#txt102");
    let inputGrade103 = $("#txt103");
    
    
    let newStudent = new Student (inputEmail.val(),inputPassword.val(),inputFirstName.val(),inputLastName.val(),inputAge.val(),inputGrade101.val(),inputGrade102.val(),inputGrade103.val());
   
    if (isValid(inputEmail,inputPassword,inputFirstName,inputLastName,inputAge,inputGrade101,inputGrade102,inputGrade103)){
      
        console.log("student is Valid");
   save(newStudent);

   clearForm();
   console.log(newStudent);
    }else{
        console.log("student is not valid");
    }
    

   // console.log(newStudent); 
}

//create validation
function isValid(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputGrade101,inputGrade102, inputGrade103){
   
    let validation= true;
    
    inputEmail.removeClass("error");
    inputPassword.removeClass("error");
    inputAge.removeClass("error");
    inputFirstName.removeClass("error");
    inputLastName.removeClass("error");
    inputGrade101.removeClass("error");
    inputGrade102.removeClass("error");
    inputGrade103.removeClass("error");


    if (inputEmail.val() ===""){
        validation = false;
        inputEmail.addClass("error");
    }
    if (inputPassword.val() ===""){
        validation = false;
        inputPassword.addClass("error");
    }
    if (inputAge.val() ===""){
        validation = false;
        inputAge.addClass("error");
    }
    if (inputFirstName.val() ===""){
        validation = false;
        inputFirstName.addClass("error");
    }
    if (inputLastName.val() ===""){
        validation = false;
        inputLastName.addClass("error");
    }
    if (inputGrade101.val() ===""){
        validation = false;
        inputGrade101.addClass("error");
    }if (inputGrade102.val() ===""){
        validation = false;
        inputGrade102.addClass("error");
    }if (inputGrade103.val() ===""){
        validation = false;
        inputGrade103.addClass("error");
    }
return validation;
}
function clearForm(){
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#txtAge").val("");
    $("#txt101").val("");
    $("#txt102").val("");
    $("#txt103").val("");
}
 

function init(){
   
// hook events
$("#btnRegister").on("click",register);

    


}

window.onload=init;
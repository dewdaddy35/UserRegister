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
function register(){
    //get the inputs using jQuery
   
   let inputEmail =$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    let inputFirstName =$("#txtFirstName").val();
    let inputLastName =$("#txtLastName").val();
    let inputAge =$("#txtAge").val();
    let inputGrade101 =$("#txt101").val();
    let inputGrade102 =$("#txt102").val();
    let inputGrade103 =$("#txt103").val();
    let newStudent = new Student (inputEmail,inputPassword,inputFirstName,inputLastName,inputAge,inputGrade101,inputGrade102,inputGrade103);
    if (isValid(newStudent)){
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
function isValid(aStudent){
    let validation= true;
    if (aStudent.studentEmail===""){
        validation = false;
    }
    if (aStudent.studentPassword===""){
        validation = false;
    }
    if (aStudent.studentAge===""){
        validation = false;
    }
    if (aStudent.studentFirstName===""){
        validation = false;
    }
    if (aStudent.studentLastName===""){
        validation = false;
    }
    if (aStudent.studentGrade101===""){
        validation = false;
    }if (aStudent.studentGrade102===""){
        validation = false;
    }if (aStudent.studentGrade103===""){
        validation = false;
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
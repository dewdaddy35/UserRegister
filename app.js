// create the constructor
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
   save(newStudent);
   // console.log(newStudent); 
}

//create validation
function isValid(){
// let validation = true;//assuming everything is valid
//    inputEmail.classList.add();
 //   inputPassword.classList.add();
//    inputFirstName.classList.add();
//    inputLastName.classList.add();
//    inputAge.classList.add();
//    input101.classList.add();
//    input102.classList.add();
//    input103.classList.add();
    

}

function init(){
// hook events
$("#btnRegister").on("click",register);


}

window.onload=init;
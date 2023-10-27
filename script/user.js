 //function ythat uses the array of users
 function displayUsers(UserArray) {
    let tr ="";
    for(var i = 0; i < UserArray.length; i++){
        let User = UserArray[i];
         tr=`
        <tr>
            <td>${User.studentEmail}</td>
            <td>${User.studentFirstName}</td>
            <td>${User.studentLastName}</td>
            <td>${User.studentAge}</td>
            <td>${User.studentGrade101}</td>
            <td>${User.studentGrade102}</td>
            <td>${User.studentGrade103}</td>
        </tr>
            `;
            $("#usersTable").append(tr);//id=userstable
            
    } 
 }   
 function init(){
   let user = readUsers();
   console.log(user);
   displayUsers(user);
 }
 window.onload = init;

